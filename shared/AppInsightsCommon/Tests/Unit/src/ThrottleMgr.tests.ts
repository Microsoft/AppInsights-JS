import { Assert, AITestClass } from "@microsoft/ai-test-framework";
import { AppInsightsCore, IAppInsightsCore, _eInternalMessageId } from "@microsoft/applicationinsights-core-js";
import { IThrottleMsgKey } from "../../../src/Enums";
import { IThrottleInterval, IThrottleLimit, IthrottleMgrConfig, IthrottleResult } from "../../../src/Interfaces/IThrottleMgr";
import { ThrottleMgr} from "../../../src/ThrottleMgr";
import { SinonSpy } from "sinon";
import { Util } from "../../../src/Util";

const compareDates = (date1: Date, date: string | Date) => {
    try {
        if (date1 && date) {
            let date2 = typeof date == "string"? new Date(date) : date;
            return date1.getUTCFullYear() === date2.getUTCFullYear() &&
            date1.getUTCMonth() === date2.getUTCMonth() &&
            date1.getUTCDate() === date2.getUTCDate();
        }
    } catch (e) {
        console.log("compare dates error" + e);
    }
    return false;
}

export class ThrottleMgrTest extends AITestClass {
    private _core: IAppInsightsCore;
    private _msgKey: IThrottleMsgKey;
    private _storageName: string;
    private _msgId: _eInternalMessageId;
    private loggingSpy: SinonSpy;

    public testInitialize() {
        this._core = new AppInsightsCore();
        this._msgKey = IThrottleMsgKey.ikeyDeprecate;
        this._storageName = "appInsightsThrottle-" + this._msgKey;
        this.loggingSpy = this.sandbox.stub(this._core.logger, "throwInternal");
        this._msgId =  _eInternalMessageId.InstrumentationKeyDeprecation;

        if (Util.canUseLocalStorage()) {
            window.localStorage.clear();
        }
    }

    public testCleanup() {
        if (Util.canUseLocalStorage()) {
            window.localStorage.clear();
        }
    }

    public registerTests() {

        this.testCase({
            name: "ThrottleMgrTest: Throttle Manager can get expected config",
            test: () => {
                let config = {
                    msgKey: this._msgKey,
                    disabled: false,
                    limit: {
                        samplingPercentage: 50,
                        maxSendNumber: 100
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 2,
                        dayInterval: 10,
                        maxTimesPerMonth: 1
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);
                let actualConfig = throttleMgr.getConfig();
                Assert.deepEqual(config, actualConfig);

                let isTriggered = throttleMgr.isTriggered();
                Assert.equal(isTriggered, false);
            }
        });

        this.testCase({
            name: "ThrottleMgrTest: Throttle Manager can get default config",
            test: () => {
                let config = {
                    msgKey: this._msgKey
                } as IthrottleMgrConfig;

                let expectedConfig = {
                    msgKey: this._msgKey,
                    disabled: false,
                    limit: {
                        samplingPercentage: 100,
                        maxSendNumber:1
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 3,
                        dayInterval: 28,
                        maxTimesPerMonth: 1
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);
                let actualConfig = throttleMgr.getConfig();
                Assert.deepEqual(expectedConfig, actualConfig);

                let isTriggered = throttleMgr.isTriggered();
                Assert.equal(isTriggered, false);
            }
        });

        this.testCase({
            name: "ThrottleMgrTest: should not trigger throttle when disabled is true",
            test: () => {
                let config = {
                    msgKey: this._msgKey,
                    disabled: true
                } as IthrottleMgrConfig;
                let throttleMgr = new ThrottleMgr(config, this._core);
                let canThrottle = throttleMgr.canThrottle();
                Assert.equal(canThrottle, false);

                let isTriggered = throttleMgr.isTriggered();
                Assert.equal(isTriggered, false);
            }
        });

        this.testCase({
            name: "ThrottleMgrTest: should not trigger throttle when month interval requirements are not meet",
            test: () => {
                let date = new Date();
                let month = date.getUTCMonth();
                let year = date.getUTCFullYear();
                if (month == 0) {
                    date.setUTCFullYear(year-1);
                    date.setUTCMonth(11);
                } else {
                    date.setUTCMonth(month-1);
                }
                let storageObj = {
                    date: date,
                    count: 0
                }
                window.localStorage[this._storageName] = JSON.stringify(storageObj);
                
                let config = {
                    msgKey: this._msgKey,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber: 100
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 3,
                        dayInterval: 1,
                        maxTimesPerMonth: 100
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);
                let canThrottle = throttleMgr.canThrottle();
                Assert.equal(canThrottle, false);

                let isTriggered = throttleMgr.isTriggered();
                Assert.equal(isTriggered, false);
            }

        });

        this.testCase({
            name: "ThrottleMgrTest: should not trigger throttle when year and month interval requirements are not meet",
            test: () => {
                let date = new Date();
                let month = date.getUTCMonth();
                let year = date.getUTCFullYear();
             
                if (month == 0) {
                    date.setUTCFullYear(year-2);
                    date.setUTCMonth(11);
                } else {
                    date.setUTCFullYear(year-1);
                    date.setUTCMonth(month-1);
                }
                let storageObj = {
                    date: date,
                    count: 0
                }
                window.localStorage[this._storageName] = JSON.stringify(storageObj);

                let config = {
                    msgKey: this._msgKey,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber: 100
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 3,
                        dayInterval: 1,
                        maxTimesPerMonth: 100
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);
                let canThrottle = throttleMgr.canThrottle();
                Assert.equal(canThrottle, false);

                let isTriggered = throttleMgr.isTriggered();
                Assert.equal(isTriggered, false);
            }

        });

        this.testCase({
            name: "ThrottleMgrTest: should not trigger throttle when day interval requirements are not meet",
            test: () => {
                let date = new Date();
                let storageObj = {
                    date: date,
                    count: 0
                }
                window.localStorage[this._storageName] = JSON.stringify(storageObj);

                let config = {
                    msgKey: this._msgKey,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber: 100
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 1,
                        dayInterval: 31,
                        maxTimesPerMonth: 100
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);
                let canThrottle = throttleMgr.canThrottle();
                Assert.equal(canThrottle, false);

                let isTriggered = throttleMgr.isTriggered();
                Assert.equal(isTriggered, false);
            }

        });

        this.testCase({
            name: "ThrottleMgrTest: should trigger throttle at starting month",
            test: () => {
                let date = new Date();
                let storageObj = {
                    date: date,
                    count: 0
                }
                window.localStorage[this._storageName] = JSON.stringify(storageObj);

                let config = {
                    msgKey: this._msgKey,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber: 100
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 1,
                        dayInterval: 1,
                        maxTimesPerMonth: 100
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);
                let canThrottle = throttleMgr.canThrottle();
                Assert.equal(canThrottle, true);

                let isTriggered = throttleMgr.isTriggered();
                Assert.equal(isTriggered, false);
            }

        });

        this.testCase({
            name: "ThrottleMgrTest: should trigger throttle when month and day intervals are meet",
            test: () => {
                let date = new Date();
                let year = date.getUTCFullYear() - 2;
                date.setUTCFullYear(year);
                let storageObj = {
                    date: date,
                    count: 0
                }
                window.localStorage[this._storageName] = JSON.stringify(storageObj);

                let config = {
                    msgKey: this._msgKey,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber: 100
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 4,
                        dayInterval: 1,
                        maxTimesPerMonth: 100
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);
                let canThrottle = throttleMgr.canThrottle();
                Assert.equal(canThrottle, true);

                let isTriggered = throttleMgr.isTriggered();
                Assert.equal(isTriggered, false);
            }

        });

        this.testCase({
            name: "ThrottleMgrTest: should not trigger throttle when maxSentTimes is not meet",
            test: () => {
                let date = new Date();
                let day = date.getUTCDate();
                let storageObj = {
                    date: date,
                    count: 0
                }
                window.localStorage[this._storageName] = JSON.stringify(storageObj);
                let maxTimes = day-1;
                let config = {
                    msgKey: this._msgKey,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber: 100
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 1,
                        dayInterval: 1,
                        maxTimesPerMonth: maxTimes
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);
                let canThrottle = throttleMgr.canThrottle();
                Assert.equal(canThrottle, false);

                let isTriggered = throttleMgr.isTriggered();
                Assert.equal(isTriggered, false);
            }

        });

        this.testCase({
            name: "ThrottleMgrTest: should not trigger throttle when _isTrigger state is true (in valid send message date)",
            test: () => {
                let storageObj = {
                    date: new Date(),
                    count: 0,
                    preTriggerDate: new Date()
                }
                window.localStorage[this._storageName] = JSON.stringify(storageObj);
                let config = {
                    msgKey: this._msgKey,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber: 100
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 1,
                        dayInterval: 1,
                        maxTimesPerMonth: 33
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);
                let canThrottle = throttleMgr.canThrottle();
                Assert.equal(canThrottle, true);
                let isTriggered = throttleMgr.isTriggered();
                Assert.ok(isTriggered);
                let result = throttleMgr.sendMessage(this._msgId, "test");
                let count = this.loggingSpy.callCount;
                Assert.equal(count,0);
                Assert.deepEqual(result, null);
                let postIsTriggered = throttleMgr.isTriggered();
                Assert.ok(postIsTriggered);

            }

        });

        this.testCase({
            name: "ThrottleMgrTest: should update local storage (in valid send message date)",
            test: () => {
                let date = new Date();
                let msg = "Instrumentation key support will end soon, see aka.ms/IkeyMigrate";
               
                let preTriggerDate = date;
                preTriggerDate.setUTCFullYear(date.getUTCFullYear() - 1);
                let preStorageObj = {
                    date: date,
                    count: 0,
                    preTriggerDate: preTriggerDate
                }
                
                let preStorageVal = JSON.stringify(preStorageObj);
                window.localStorage[this._storageName] = preStorageVal;

                let config = {
                    msgKey: this._msgKey,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber: 1
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 1,
                        dayInterval: date.getUTCDate(),
                        maxTimesPerMonth: 1
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);
                let canThrottle = throttleMgr.canThrottle();
                Assert.equal(canThrottle, true);
                let isPretriggered = throttleMgr.isTriggered();
                Assert.equal(isPretriggered, false);

                throttleMgr.onReadyState(true);
                let sendDate = new Date();
                let result = throttleMgr.sendMessage(this._msgId, msg);
                let expectedRetryRlt = {
                    isThrottled: true,
                    throttleNum: 1
                } as IthrottleResult
                Assert.deepEqual(result, expectedRetryRlt);
                let isPostTriggered = throttleMgr.isTriggered();
                Assert.equal(isPostTriggered, true);

                let afterTriggered = window.localStorage[this._storageName];
                let afterTriggeredObj = JSON.parse(afterTriggered);
                let isAfterTriggeredDateSame = compareDates(date, afterTriggeredObj.date)
                Assert.ok(isAfterTriggeredDateSame);
                Assert.equal(0, afterTriggeredObj.count);
                let isDateSame = compareDates(sendDate, afterTriggeredObj.preTriggerDate);
                Assert.ok(isDateSame, afterTriggeredObj.preTriggerDate);
            }

        });

        this.testCase({
            name: "ThrottleMgrTest: should not trigger sendmessage when isready state is not set and should flush message after isReady state is set",
            test: () => {
                let msg = "Instrumentation key support will end soon, see aka.ms/IkeyMigrate";
                let date = new Date();
                let testStorageObj = {
                    date: date,
                    count: 0
                };
               
                let config = {
                    msgKey: IThrottleMsgKey.ikeyDeprecate,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber:1
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 1,
                        dayInterval: 1,
                        maxTimesPerMonth: 100
                    } as IThrottleInterval
                } as IthrottleMgrConfig;
             
                let throttleMgr = new ThrottleMgr(config, this._core);
               

                let canThrottle = throttleMgr.canThrottle();
                Assert.ok(canThrottle);
                let isTriggeredPre = throttleMgr.isTriggered();
                Assert.equal(isTriggeredPre, false);
                let initialVal = window.localStorage[this._storageName];
                let initObj = JSON.parse(initialVal);
                let isSameInitDate = compareDates(date, initObj.date);
                Assert.ok(isSameInitDate);
                Assert.equal(0, initObj.count);
                Assert.equal(undefined, initObj.preTriggerDate);
                
                let result = throttleMgr.sendMessage(this._msgId, msg);
                let count = this.loggingSpy.callCount;
                Assert.equal(count,0);
                Assert.deepEqual(result, null);
                let isTriggeredPost = throttleMgr.isTriggered();
                Assert.equal(isTriggeredPost, false);
                let postVal = window.localStorage[this._storageName];
                let postObj = JSON.parse(postVal);
                let isSamePostDate = compareDates(date, postObj.date);
                Assert.ok(isSamePostDate);
                Assert.equal(0, postObj.count);
                Assert.equal(undefined, postObj.preTriggerDate);

                let isFlushed = throttleMgr.onReadyState(true);
                Assert.ok(isFlushed);
                let isTriggeredAfterReadySate = throttleMgr.isTriggered();
                Assert.ok(isTriggeredAfterReadySate);
                let postOnReadyVal = window.localStorage[this._storageName];
                let postOnReadyObj = JSON.parse(postOnReadyVal);
                let isSamePostpostOnReadyDate = compareDates(date, postOnReadyObj.date);
                Assert.ok(isSamePostpostOnReadyDate);
                Assert.equal(0, postOnReadyObj.count);
                let isSamePostpostTriggerDate = compareDates(date, postOnReadyObj.preTriggerDate);
                Assert.ok(isSamePostpostTriggerDate);

                let onReadyResult = throttleMgr.sendMessage(this._msgId, msg);
                let onReadyCount = this.loggingSpy.callCount;
                let expectedRlt = {
                    isThrottled: false,
                    throttleNum: 0
                } as IthrottleResult
                Assert.equal(onReadyCount,1);
                Assert.deepEqual(onReadyResult, expectedRlt);
                let onReadyIsTriggered = throttleMgr.isTriggered();
                Assert.equal(onReadyIsTriggered, true);
                let afterResendVal = window.localStorage[this._storageName];
                let afterResendObj = JSON.parse(afterResendVal);
                let isAfterResendDateSame = compareDates(date, afterResendObj.date);
                Assert.ok(isAfterResendDateSame);
                Assert.equal(1, afterResendObj.count);
                let isAfterResendTriggerDateSame = compareDates(date, afterResendObj.preTriggerDate);
                Assert.ok(isAfterResendTriggerDateSame);
            }
        });


        this.testCase({
            name: "ThrottleMgrTest: throw messages with correct number",
            test: () => {
                let msg = "Instrumentation key support will end soon, see aka.ms/IkeyMigrate";
                let date = new Date();
                let testStorageObj = {
                    date: date,
                    count: 5
                }
                let testStorageVal = JSON.stringify(testStorageObj);
                window.localStorage[this._storageName] = testStorageVal;

                let config = {
                    msgKey: IThrottleMsgKey.ikeyDeprecate,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber:1
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 1,
                        dayInterval: 1,
                        maxTimesPerMonth: 100
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);

                let canThrottle = throttleMgr.canThrottle();
                Assert.ok(canThrottle);

                let isTriggeredPre = throttleMgr.isTriggered();
                Assert.equal(isTriggeredPre, false);

                throttleMgr.onReadyState(true);

                let result = throttleMgr.sendMessage(this._msgId, msg);
                let count = this.loggingSpy.callCount
                Assert.equal(count,1);
                let expectedRlt = {
                    isThrottled: true,
                    throttleNum: 1
                } as IthrottleResult
                Assert.deepEqual(result, expectedRlt);
            
                let val = window.localStorage[this._storageName];
                let obj = JSON.parse(val);
                let isSameDate = compareDates(date, obj.date);
                Assert.ok(isSameDate);
                Assert.equal(0, obj.count);
                let isSameTrigerDate = compareDates(date, obj.preTriggerDate);
                Assert.ok(isSameTrigerDate);

                let isTriggeredPost = throttleMgr.isTriggered();
                Assert.equal(isTriggeredPost, true);
            }
        });

        this.testCase({
            name: "ThrottleMgrTest: should throw messages 1 time within a day",
            test: () => {
                let msg = "Instrumentation key support will end soon, see aka.ms/IkeyMigrate";

                let config = {
                    msgKey: IThrottleMsgKey.ikeyDeprecate,
                    disabled: false,
                    limit: {
                        samplingPercentage: 1000,
                        maxSendNumber:1
                    } as IThrottleLimit,
                    interval: {
                        monthInterval: 1,
                        dayInterval: 1,
                        maxTimesPerMonth: 100
                    } as IThrottleInterval
                } as IthrottleMgrConfig;

                let throttleMgr = new ThrottleMgr(config, this._core);

                let canThrottle = throttleMgr.canThrottle();
                Assert.ok(canThrottle);

                let isTriggeredPre = throttleMgr.isTriggered();
                Assert.equal(isTriggeredPre, false);

                throttleMgr.onReadyState(true);

                let result = throttleMgr.sendMessage(this._msgId, msg);
                let count = this.loggingSpy.callCount
                Assert.equal(count,1);
              
                let expectedRlt = {
                    isThrottled: true,
                    throttleNum: 1
                } as IthrottleResult
                Assert.deepEqual(result, expectedRlt);

                let isTriggeredPost = throttleMgr.isTriggered();
                Assert.equal(isTriggeredPost, true);
                let canThrottlePost = throttleMgr.canThrottle();
                Assert.equal(canThrottlePost, true);

                let retryRlt = throttleMgr.sendMessage(this._msgId, msg);
                let retryCount = this.loggingSpy.callCount
                Assert.equal(retryCount,1);
                let expectedRetryRlt = {
                    isThrottled: false,
                    throttleNum: 0
                } as IthrottleResult
                Assert.deepEqual(retryRlt, expectedRetryRlt);
            }
        });
    }
}