// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { ITimerHandler, arrForEach, dumpObj, newSymbol, scheduleTimeout } from "@nevware21/ts-utils";
import { _eInternalMessageId, eLoggingSeverity } from "../JavaScriptSDK.Enums/LoggingEnums";
import { throwAggregationError } from "../JavaScriptSDK/AggregationError";
import { _IInternalDynamicConfigHandler } from "./IDynamicConfigHandler";
import { IWatcherHandler, WatcherFunction, _IDynamicDetail } from "./IDynamicWatcher";
import { _IDynamicConfigHandlerState } from "./_IDynamicConfigHandlerState";

const symPrefix = "[[ai_";
const symPostfix = "]]";

/**
 * @internal
 * @ignore
 * Add the watcher to the collection of watchers to be notified for the named value that is changing
 * @param watchers - The collection of watchers
 * @param theDetail - The dynamic property detail
 * @param prevValue - The previous value
 */
function _insertWatcher<T>(watchers: IWatcherHandler<T>[], theDetail: _IDynamicDetail<T>) {
    if (theDetail && theDetail.h && theDetail.h.length > 0) {
        arrForEach(theDetail.h, (handler) => {
            // The handler may have self removed and we also want to only call the handler once.
            if (handler && handler.fn && watchers.indexOf(handler) === -1) {
                watchers.push(handler);
            }
        });
    }
}

export function _createState<T>(cfgHandler: _IInternalDynamicConfigHandler<T>): _IDynamicConfigHandlerState<T> {
    let dynamicPropertySymbol = newSymbol(symPrefix + "get" + cfgHandler.uid + symPostfix);
    let dynamicPropertyReadOnly = newSymbol(symPrefix + "ro" + cfgHandler.uid + symPostfix);
    let _waitingHandlers: IWatcherHandler<T>[] = null;
    let _watcherTimer: ITimerHandler = null;
    let theState: _IDynamicConfigHandlerState<T>;

    function _useHandler(activeHandler: IWatcherHandler<T>, callback: WatcherFunction<T>) {
        let prevWatcher = theState.act;
        try {
            theState.act = activeHandler;
            callback({
                cfg: cfgHandler.cfg,
                set: cfgHandler.set.bind(cfgHandler),
                setDf: cfgHandler.setDf.bind(cfgHandler)
            });
        } catch(e) {
            let logger = cfgHandler.logger;
            if (logger) {
                // Don't let one individual failure break everyone
                logger.throwInternal(eLoggingSeverity.CRITICAL, _eInternalMessageId.ConfigWatcherException, "Watcher [" + dumpObj(callback) + "] failed [" + dumpObj(e) + "]");
            }

            // Re-throw the exception so that any true "error" is reported back to the called
            throw e;
        } finally {
            theState.act = prevWatcher || null;
        }
    }

    function _notifyWatchers() {
        if (_waitingHandlers) {
            let notifyHandlers = _waitingHandlers;
            _waitingHandlers = null;
            if (_watcherTimer) {
                // Stop any timer as we are running them now anyway
                _watcherTimer.cancel();
                _watcherTimer = null;
            }

            let watcherFailures: any[] = [];

            // Now run the handlers
            arrForEach(notifyHandlers, (handler) => {
                // The handler may have self removed as part of another handler so re-check
                if (handler.fn) {
                    try {
                        _useHandler(handler, handler.fn);
                    } catch (e) {
                        // Don't let a single failing watcher cause other watches to fail
                        watcherFailures.push(e);
                    }
                }
            });

            // During notification we may have had additional updates -- so notify those updates as well
            if (_waitingHandlers) {
                try {
                    _notifyWatchers();
                } catch (e) {
                    watcherFailures.push(e);
                }
            }

            if (watcherFailures.length > 0) {
                throwAggregationError("Unexpected watcher error occurred: ", watcherFailures);
            }
        }
    }

    function _addWatcher(detail: _IDynamicDetail<T>) {
        if (detail && detail.h.length > 0) {
            if (!_waitingHandlers) {
                _waitingHandlers = [];
            }
    
            if (!_watcherTimer) {
                _watcherTimer = scheduleTimeout(() => {
                    _watcherTimer = null;
                    _notifyWatchers();
                }, 0);
            }
    
            // Add the watcher to the collection of waiting watchers to be executed later
            _insertWatcher(_waitingHandlers, detail);
        }
    }

    theState = {
        prop: dynamicPropertySymbol,
        ro: dynamicPropertyReadOnly,
        hdlr: cfgHandler,
        add: _addWatcher,
        notify: _notifyWatchers,
        use: _useHandler
    };

    return theState;
}
