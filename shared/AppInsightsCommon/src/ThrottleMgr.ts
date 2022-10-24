import {
    IAppInsightsCore, IDiagnosticLogger, _eInternalMessageId, _throwInternal, arrForEach, eLoggingSeverity, isNotNullOrUndefined,
    isNullOrUndefined, safeGetLogger, strTrim
} from "@microsoft/applicationinsights-core-js";
import { IThrottleMsgKey } from "./Enums";
import { IthrottleLocalStorageObj, IthrottleMgrConfig, IthrottleResult } from "./Interfaces/IThrottleMgr";
import { utlCanUseLocalStorage, utlGetLocalStorage, utlSetLocalStorage } from "./StorageHelperFuncs";

const THROTTLE_STORAGE_PREFIX = "appInsightsThrottle";

interface SendMsgParameter {
    msgID: _eInternalMessageId,
    message: string,
    severity?: eLoggingSeverity
}

export class ThrottleMgr {
    public canThrottle: () => boolean;
    public sendMessage: (msgID: _eInternalMessageId, message: string, severity?: eLoggingSeverity) => IthrottleResult | null;
    public getConfig: () => IthrottleMgrConfig;
    public isTriggered: () => boolean; // this function is to get previous triggered status
    public isReady: () => boolean
    public onReadyState: (isReady?: boolean) => boolean;
    public flush: () => boolean;

    constructor(throttleMgr?: IthrottleMgrConfig, core?: IAppInsightsCore, namePrefix?: string) {
        let _self = this;
        let _canUseLocalStorage: boolean;
        let _logger: IDiagnosticLogger | null | undefined;
        let _config: IthrottleMgrConfig;
        let _localStorageName: string | null;
        let _localStorageObj: IthrottleLocalStorageObj | null | undefined;
        let _isTriggered: boolean; //_isTriggered is to make sure that we only trigger throttle once a day
        let _namePrefix: string;
        let _queue: Array<SendMsgParameter>;
        let _isReady: boolean = false;

        _initConfig();

        _self.getConfig = (): IthrottleMgrConfig => {
            return _config;
        }

        /**
         * Check if it is the correct day to send message.
         * If _isTriggered is true, even if canThrottle returns true, message will not be sent,
         * because we only allow triggering sendMessage() once a day.
         * @returns if the current date is the valid date to send message
         */
        _self.canThrottle = (): boolean => {
            return _canThrottle(_config, _canUseLocalStorage, _localStorageObj);
        }

        /**
         * Check if throttle is triggered on current day(UTC)
         * if canThrottle returns false, isTriggered will return false
         * @returns if throttle is triggered on current day(UTC)
         */
        _self.isTriggered = (): boolean => {
            return _isTriggered;
        }

        /**
         * Before isReady set to true, all message will be stored in queue.
         * Message will only be sent out after isReady set to true.
         * Initial and default value: false
         * @returns isReady state
         */
        _self.isReady = (): boolean => {
            return _isReady;
        }

        /**
         * Flush all message in queue with isReady state set to true.
         * @returns if message queue is flushed
         */
        _self.flush = (): boolean => {
            try {
                if (_isReady && _queue.length > 0) {
                    arrForEach(_queue, (item: SendMsgParameter) => {
                        _self.sendMessage(item.msgID, item.message, item.severity);
                    });
                    return true;
                }
            } catch(err) {
                // eslint-disable-next-line no-empty
            }
            return false;
        }

        /**
         * Set isReady State
         * if isReady set to true, message queue will be flushed automatically.
         * @param isReady isReady State
         * @returns if message queue is flushed
         */
        _self.onReadyState = (isReady?: boolean): boolean => {
            _isReady  = isNullOrUndefined(isReady)? true : isReady;
            return _self.flush();
        }
       
        _self.sendMessage = (msgID: _eInternalMessageId, message: string, severity?: eLoggingSeverity): IthrottleResult | null => {
            if (_isReady) {
                let isSampledIn = _canSampledIn();
                if (!isSampledIn) {
                    return;
                }
                let canThrottle = _canThrottle(_config, _canUseLocalStorage, _localStorageObj);
                let throttled = false;
                let number = 0;
                try {
                    if (canThrottle && !_isTriggered) {
                        number =  Math.min(_config.limit.maxSendNumber, _localStorageObj.count + 1);
                        _localStorageObj.count = 0;
                        throttled = true;
                        _isTriggered = true;
                        _localStorageObj.preTriggerDate = new Date();
                    } else {
                        _isTriggered = canThrottle;
                        _localStorageObj.count += 1;
                    }
                    _resetLocalStorage(_logger, _localStorageName, _localStorageObj);
                    for (let i = 0; i < number; i++) {
                        _sendMessage(msgID, _logger, message, severity);
                    }
                } catch(e) {
                    // eslint-disable-next-line no-empty
                }
                return {
                    isThrottled: throttled,
                    throttleNum: number
                } as IthrottleResult;
            } else {
                _queue.push({
                    msgID: msgID,
                    message: message,
                    severity: severity
                } as SendMsgParameter);
            }
            return null;
        }
        
        function _initConfig() {
            _canUseLocalStorage = utlCanUseLocalStorage();
            _logger = safeGetLogger(core);
            _isTriggered = false;
            _namePrefix = isNotNullOrUndefined(namePrefix)? namePrefix : "";
            _queue = [];
            let configMgr = throttleMgr;
            _config = {} as any;
            _config.disabled = !!configMgr.disabled;
            _config.msgKey = configMgr.msgKey;
            // default: send data on 28th every 3 month each year
            let interval = {
                // dafault: sent every three months
                monthInterval: configMgr.interval?.monthInterval || 3,
                dayInterval : configMgr.interval?.dayInterval || 28,
                maxTimesPerMonth: configMgr.interval?.maxTimesPerMonth || 1
            };
            _config.interval = interval;
            let limit = {
                samplingPercentage: configMgr.limit?.samplingPercentage || 100,
                // dafault: every time sent only 1 event
                maxSendNumber: configMgr.limit?.maxSendNumber || 1
            };
            _config.limit = limit;
            _localStorageName = _getLocalStorageName(_config.msgKey, _namePrefix);
            
            if (_canUseLocalStorage && _localStorageName) {
                _localStorageObj = _getLocalStorageObj(utlGetLocalStorage(_logger, _localStorageName), _logger, _localStorageName);
            }
            if (_localStorageObj) {
                _isTriggered = _isTriggeredOnCurDate(_localStorageObj.preTriggerDate);
            }
        }

        function _canThrottle(config: IthrottleMgrConfig, canUseLocalStorage: boolean, localStorageObj: IthrottleLocalStorageObj) {
            if (!config.disabled && canUseLocalStorage && isNotNullOrUndefined(localStorageObj)) {
                let curDate = _getThrottleDate();
                let date = localStorageObj.date;
                let interval = config.interval;
                let monthExpand = (curDate.getUTCFullYear() - date.getUTCFullYear()) * 12 + curDate.getUTCMonth() - date.getUTCMonth();
                let monthCheck = _checkInterval(interval.monthInterval, 0, monthExpand);
                let dayCheck = _checkInterval(interval.dayInterval, 0, curDate.getUTCDate()) -1;
                return monthCheck >= 0 && dayCheck >= 0 && dayCheck <= config.interval.maxTimesPerMonth;
            }
            return false;
        }

        function _getLocalStorageName(msgKey: IThrottleMsgKey, prefix?: string) {
            let fix = isNotNullOrUndefined(prefix)? prefix : "";
            if (msgKey) {
                return THROTTLE_STORAGE_PREFIX + fix + "-" + msgKey;
            }
            return null;
        }

        // returns if throttle is triggered on current Date
        function _isTriggeredOnCurDate(preTriggerDate?: Date) {
            try {
                if(preTriggerDate) {
                    let curDate = new Date();
                    return preTriggerDate.getUTCFullYear() === curDate.getUTCFullYear() &&
                    preTriggerDate.getUTCMonth() === curDate.getUTCMonth() &&
                    preTriggerDate.getUTCDate() === curDate.getUTCDate();
                }
            } catch (e) {
                // eslint-disable-next-line no-empty
            }
            return false;
        }

        // transfer local storage string value to object that identifies start date, current count and preTriggerDate
        function _getLocalStorageObj(value: string, logger: IDiagnosticLogger, storageName: string) {
            try {
                let storageObj = {
                    date: _getThrottleDate(),
                    count: 0
                } as IthrottleLocalStorageObj;
                if (value) {
                    let obj = JSON.parse(value);
                    return {
                        date: _getThrottleDate(obj.date) || storageObj.date,
                        count: obj.count || storageObj.count,
                        preTriggerDate: obj.preTriggerDate? _getThrottleDate(obj.preTriggerDate) : undefined
                    } as IthrottleLocalStorageObj;
                } else {
                    _resetLocalStorage(logger, storageName, storageObj);
                    return storageObj;

                }
            } catch(e) {
                // eslint-disable-next-line no-empty
            }
            return null;
        }

        // if datestr is not defined, current date will be returned
        function _getThrottleDate(dateStr?: string) {
            // if new Date() can't be created through the provided dateStr, null will be returned.
            try {
                if (dateStr) {
                    let date = new Date(dateStr);
                    //make sure it is a valid Date Object
                    if (!isNaN(date.getDate())) {
                        return date;
                    }
                } else {
                    return new Date();
                }
                
            } catch (e) {
                // eslint-disable-next-line no-empty
            }
            return null;
        }

        function _resetLocalStorage(logger: IDiagnosticLogger, storageName: string, obj: IthrottleLocalStorageObj) {
            try {
                return utlSetLocalStorage(logger, storageName, strTrim(JSON.stringify(obj)));
            } catch (e) {
            //     // eslint-disable-next-line no-empty
            }
            return false;
        }

        function _checkInterval(interval: number, start: number, current: number) {
            // count from start year
            return  (current >= start) && (current - start) % interval == 0 ? Math.floor((current - start) / interval) + 1 : -1;
        }
        
        function _sendMessage(msgID: _eInternalMessageId, logger: IDiagnosticLogger, message: string, severity?: eLoggingSeverity) {
            _throwInternal(logger,
                severity || eLoggingSeverity.CRITICAL,
                msgID,
                message);
        }

        // NOTE: config.limit.samplingPercentage unit is 1000.
        // So if config.limit.samplingPercentage = 20, it means 20/1000 = 0.02;
        function _canSampledIn() {
            return Math.random() <= _config.limit.samplingPercentage / 1000;
        }
    }
}