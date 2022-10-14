// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
"use strict";

import dynamicProto from "@microsoft/dynamicproto-js";
import {
    arrAppend, arrForEach, arrIndexOf, deepExtend, dumpObj, isFunction, isNullOrUndefined, objDeepFreeze, objDefineProp, objFreeze,
    objHasOwn, throwError
} from "@nevware21/ts-utils";
import { createDynamicConfig, onConfigChange } from "../Config/DynamicConfig";
import { IConfigDefaults } from "../Config/IConfigDefaults";
import { IDynamicConfigHandler, _IInternalDynamicConfigHandler } from "../Config/IDynamicConfigHandler";
import { IWatchDetails, WatcherFunction } from "../Config/IDynamicWatcher";
import { eEventsDiscardedReason } from "../JavaScriptSDK.Enums/EventsDiscardedReason";
import { _eInternalMessageId, eLoggingSeverity } from "../JavaScriptSDK.Enums/LoggingEnums";
import { SendRequestReason } from "../JavaScriptSDK.Enums/SendRequestReason";
import { TelemetryUnloadReason } from "../JavaScriptSDK.Enums/TelemetryUnloadReason";
import { TelemetryUpdateReason } from "../JavaScriptSDK.Enums/TelemetryUpdateReason";
import { IAppInsightsCore, ILoadedPlugin } from "../JavaScriptSDK.Interfaces/IAppInsightsCore";
import { IChannelControls } from "../JavaScriptSDK.Interfaces/IChannelControls";
import { IConfiguration } from "../JavaScriptSDK.Interfaces/IConfiguration";
import { ICookieMgr } from "../JavaScriptSDK.Interfaces/ICookieMgr";
import { IDiagnosticLogger } from "../JavaScriptSDK.Interfaces/IDiagnosticLogger";
import { IDistributedTraceContext } from "../JavaScriptSDK.Interfaces/IDistributedTraceContext";
import { INotificationListener } from "../JavaScriptSDK.Interfaces/INotificationListener";
import { INotificationManager } from "../JavaScriptSDK.Interfaces/INotificationManager";
import { IPerfManager } from "../JavaScriptSDK.Interfaces/IPerfManager";
import { IProcessTelemetryContext, IProcessTelemetryUpdateContext } from "../JavaScriptSDK.Interfaces/IProcessTelemetryContext";
import { ITelemetryInitializerHandler, TelemetryInitializerFunction } from "../JavaScriptSDK.Interfaces/ITelemetryInitializers";
import { ITelemetryItem } from "../JavaScriptSDK.Interfaces/ITelemetryItem";
import { IPlugin, ITelemetryPlugin } from "../JavaScriptSDK.Interfaces/ITelemetryPlugin";
import { ITelemetryPluginChain } from "../JavaScriptSDK.Interfaces/ITelemetryPluginChain";
import { ITelemetryUnloadState } from "../JavaScriptSDK.Interfaces/ITelemetryUnloadState";
import { ITelemetryUpdateState } from "../JavaScriptSDK.Interfaces/ITelemetryUpdateState";
import { ILegacyUnloadHook, IUnloadHook } from "../JavaScriptSDK.Interfaces/IUnloadHook";
import {
    ChannelControllerPriority, IChannelController, IInternalChannelController, _IInternalChannels, createChannelControllerPlugin,
    createChannelQueues
} from "./ChannelController";
import { createCookieMgr } from "./CookieMgr";
import { createUniqueNamespace } from "./DataCacheHelper";
import { getDebugListener } from "./DbgExtensionUtils";
import { DiagnosticLogger, _InternalLogMessage, _throwInternal, _warnToConsole } from "./DiagnosticLogger";
import { getSetValue, isPlainObject, objForEachKey, proxyFunctionAs, proxyFunctions, toISOString } from "./HelperFuncs";
import {
    STR_CHANNELS, STR_CREATE_PERF_MGR, STR_DISABLED, STR_EXTENSIONS, STR_EXTENSION_CONFIG, UNDEFINED_VALUE
} from "./InternalConstants";
import { NotificationManager } from "./NotificationManager";
import { PerfManager, doPerf, getGblPerfMgr } from "./PerfManager";
import {
    createProcessTelemetryContext, createProcessTelemetryUnloadContext, createProcessTelemetryUpdateContext, createTelemetryProxyChain
} from "./ProcessTelemetryContext";
import { _getPluginState, createDistributedTraceContext, initializePlugins, sortPlugins } from "./TelemetryHelpers";
import { TelemetryInitializerPlugin } from "./TelemetryInitializerPlugin";
import { IUnloadHandlerContainer, UnloadHandler, createUnloadHandlerContainer } from "./UnloadHandlerContainer";

const strValidationError = "Plugins must provide initialize method";
const strNotificationManager = "_notificationManager";
const strSdkUnloadingError = "SDK is still unloading...";
const strSdkNotInitialized = "SDK is not initialized";
// const strPluginUnloadFailed = "Failed to unload plugin";

/**
 * The default settings for the config.
 * WE MUST include all defaults here to ensure that the config is created with all of the properties
 * defined as dynamic.
 */
const defaultConfig: IConfigDefaults<IConfiguration> = objDeepFreeze({
    cookieCfg: {},
    [STR_EXTENSIONS]: [],
    [STR_CHANNELS]: [],
    [STR_EXTENSION_CONFIG]: {},
    [STR_CREATE_PERF_MGR]: UNDEFINED_VALUE,
    loggingLevelConsole: eLoggingSeverity.DISABLED,
    diagnosticLogInterval: UNDEFINED_VALUE
});

/**
 * Helper to create the default performance manager
 * @param core
 * @param notificationMgr
 */
function _createPerfManager (core: IAppInsightsCore, notificationMgr: INotificationManager) {
    return new PerfManager(notificationMgr);
}

function _validateExtensions(logger: IDiagnosticLogger, channelPriority: number, allExtensions: IPlugin[]): { all: IPlugin[]; core: ITelemetryPlugin[] } {
    // Concat all available extensions
    let coreExtensions: ITelemetryPlugin[] = [];

    // Check if any two extensions have the same priority, then warn to console
    // And extract the local extensions from the
    let extPriorities = {};

    // Extension validation
    arrForEach(allExtensions, (ext: ITelemetryPlugin) => {
        // Check for ext.initialize
        if (isNullOrUndefined(ext) || isNullOrUndefined(ext.initialize)) {
            throwError(strValidationError);
        }

        const extPriority = ext.priority;
        const identifier = ext.identifier;

        if (ext && extPriority) {
            if (!isNullOrUndefined(extPriorities[extPriority])) {
                _warnToConsole(logger, "Two extensions have same priority #" + extPriority + " - " + extPriorities[extPriority] + ", " + identifier);
            } else {
                // set a value
                extPriorities[extPriority] = identifier;
            }
        }

        // Split extensions to core and channelController
        if (!extPriority || extPriority < channelPriority) {
            // Add to core extension that will be managed by AppInsightsCore
            coreExtensions.push(ext);
        }
    });

    return {
        all: allExtensions,
        core: coreExtensions
    };
}

function _isPluginPresent(thePlugin: IPlugin, plugins: IPlugin[]) {
    let exists = false;

    arrForEach(plugins, (plugin) => {
        if (plugin === thePlugin) {
            exists = true;
            return -1;
        }
    });

    return exists;
}

function _deepMergeConfig(details: IWatchDetails<IConfiguration>, target: any, newValues: any, merge: boolean) {
    // Lets assign the new values to the existing config
    if (newValues) {
        objForEachKey(newValues, (key, value) => {
            if (merge) {
                if (isPlainObject(value) && isPlainObject(target[key])) {
                    // The target is an object and it has a value
                    _deepMergeConfig(details, target[key], value, merge);
                }
            }
    
            if (merge && isPlainObject(value) && isPlainObject(target[key])) {
                // The target is an object and it has a value
                _deepMergeConfig(details, target[key], value, merge);
            } else {
                // Just Assign (replace) and/or make the property dynamic
                details.set(target, key, value);
            }
        });
    }
}

function _findWatcher(listeners: { rm: () => void, w: WatcherFunction<IConfiguration>}[], newWatcher: WatcherFunction<IConfiguration>) {
    let theListener: { rm: () => void, w: WatcherFunction<IConfiguration>} = null;
    let idx: number = -1;
    arrForEach(listeners, (listener, lp) => {
        if (listener.w === newWatcher) {
            theListener = listener;
            idx = lp;
            return -1;
        }
    });

    return { i: idx, l: theListener };
}
function _addDelayedCfgListener(listeners: { rm: () => void, w: WatcherFunction<IConfiguration>}[], newWatcher: WatcherFunction<IConfiguration>) {
    let theListener = _findWatcher(listeners, newWatcher).l;

    if (!theListener) {
        theListener ={
            w: newWatcher,
            rm: () => {
                let fnd = _findWatcher(listeners, newWatcher);
                if (fnd.i !== -1) {
                    listeners.splice(fnd.i, 1);
                }
            }
        };
        listeners.push(theListener);
    }

    return theListener;
}

function _registerDelayedCfgListener(config: IConfiguration, listeners: { rm: () => void, w: WatcherFunction<IConfiguration>}[], logger: IDiagnosticLogger) {
    arrForEach(listeners, (listener) => {
        let unloadHdl = onConfigChange(config, listener.w, logger);
        delete listener.w;      // Clear the listener reference so it will get garbage collected.
        // replace the remove function
        listener.rm = () => {
            unloadHdl.rm();
        };
    });
}

export class AppInsightsCore implements IAppInsightsCore {
    public static defaultConfig: IConfiguration;
    public config: IConfiguration;
    public logger: IDiagnosticLogger;

    public _extensions: IPlugin[];
    public isInitialized: () => boolean;

    constructor() {
        // NOTE!: DON'T set default values here, instead set them in the _initDefaults() function as it is also called during teardown()
        let _configHandler: IDynamicConfigHandler<IConfiguration>;
        let _isInitialized: boolean;
        let _eventQueue: ITelemetryItem[];
        let _notificationManager: INotificationManager | null | undefined;
        let _perfManager: IPerfManager | null;
        let _cfgPerfManager: IPerfManager | null;
        let _cookieManager: ICookieMgr | null;
        let _pluginChain: ITelemetryPluginChain | null;
        let _configExtensions: IPlugin[];
        let _coreExtensions: ITelemetryPlugin[] | null;
        let _channelControl: IChannelController | null;
        let _channelConfig: IChannelControls[][] | null | undefined;
        let _channelQueue: _IInternalChannels[] | null;
        let _isUnloading: boolean;
        let _telemetryInitializerPlugin: TelemetryInitializerPlugin;
        let _internalLogsEventName: string | null;
        let _evtNamespace: string;
        let _unloadHandlers: IUnloadHandlerContainer;
        let _hooks: Array<ILegacyUnloadHook | IUnloadHook>;
        let _debugListener: INotificationListener | null;
        let _traceCtx: IDistributedTraceContext | null;
        let _instrumentationKey: string | null;
        let _cfgListeners: { rm: () => void, w: WatcherFunction<IConfiguration>}[];

        /**
         * Internal log poller
         */
        let _internalLogPoller: number = 0;

        dynamicProto(AppInsightsCore, this, (_self) => {

            // Set the default values (also called during teardown)
            _initDefaults();

            _self.isInitialized = () => _isInitialized;

            // Creating the self.initialize = ()
            _self.initialize = (config: IConfiguration, extensions: IPlugin[], logger?: IDiagnosticLogger, notificationManager?: INotificationManager): void => {
                if (_isUnloading) {
                    throwError(strSdkUnloadingError);
                }
        
                // Make sure core is only initialized once
                if (_self.isInitialized()) {
                    throwError("Core cannot be initialized more than once");
                }

                // Re-assigning the local config property so we don't have any references to the passed value and it can be garbage collected
                _configHandler = createDynamicConfig(config, defaultConfig, logger || _self.logger, false);
                config = _configHandler.cfg;

                // This will be "re-run" if the referenced config properties are changed
                _addUnloadHook(_configHandler.watch((details) => {
                    _instrumentationKey = details.cfg.instrumentationKey;

                    if (isNullOrUndefined(_instrumentationKey)) {
                        throwError("Please provide instrumentation key");
                    }
                }));

                _notificationManager = notificationManager;

                _initDebugListener();
                _initPerfManager();

                _self.logger = logger || new DiagnosticLogger(config);
                _configHandler.logger = _self.logger;

                let cfgExtensions = config.extensions;

                // Extension validation
                _configExtensions = [];
                _configExtensions.push(...extensions, ...cfgExtensions);
                _channelConfig = config.channels;

                _initPluginChain(null);

                if (!_channelQueue || _channelQueue.length === 0) {
                    throwError("No " + STR_CHANNELS + " available");
                }
                
                _registerDelayedCfgListener(config, _cfgListeners, _self.logger);
                _cfgListeners = null;

                _isInitialized = true;
                _self.releaseQueue();
            };
        
            _self.getTransmissionControls = (): IChannelControls[][] => {
                let controls: IChannelControls[][] = [];
                if (_channelQueue) {
                    arrForEach(_channelQueue, (channels) => {
                        controls.push(channels.queue);
                    });
                }

                return objFreeze(controls);
            };
        
            _self.track = (telemetryItem: ITelemetryItem) => {
                doPerf(_self.getPerfMgr(), () => "AppInsightsCore:track", () => {
                    if (telemetryItem === null) {
                        _notifyInvalidEvent(telemetryItem);
                        // throw error
                        throwError("Invalid telemetry item");
                    }
                    
                    // do basic validation before sending it through the pipeline
                    if (!telemetryItem.name && isNullOrUndefined(telemetryItem.name)) {
                        _notifyInvalidEvent(telemetryItem);
                        throwError("telemetry name required");
                    }
            
                    // setup default iKey if not passed in
                    telemetryItem.iKey = telemetryItem.iKey || _instrumentationKey;

                    // add default timestamp if not passed in
                    telemetryItem.time = telemetryItem.time || toISOString(new Date());

                    // Common Schema 4.0
                    telemetryItem.ver = telemetryItem.ver || "4.0";
            
                    if (!_isUnloading && _self.isInitialized()) {
                        // Process the telemetry plugin chain
                        _createTelCtx().processNext(telemetryItem);
                    } else {
                        // Queue events until all extensions are initialized
                        _eventQueue.push(telemetryItem);
                    }
                }, () => ({ item: telemetryItem }), !((telemetryItem as any).sync));
            };
        
            _self.getProcessTelContext = _createTelCtx;

            _self.getNotifyMgr = (): INotificationManager => {
                if (!_notificationManager) {
                    _addUnloadHook(_configHandler.watch((details) => {
                        _notificationManager = new NotificationManager(details.cfg);
                        // For backward compatibility only
                        _self[strNotificationManager] = _notificationManager;
                    }));
                }

                return _notificationManager;
            };

            /**
             * Adds a notification listener. The SDK calls methods on the listener when an appropriate notification is raised.
             * The added plugins must raise notifications. If the plugins do not implement the notifications, then no methods will be
             * called.
             * @param listener - An INotificationListener object.
             */
            _self.addNotificationListener = (listener: INotificationListener): void => {
                _self.getNotifyMgr().addNotificationListener(listener);
            };
        
            /**
             * Removes all instances of the listener.
             * @param listener - INotificationListener to remove.
             */
            _self.removeNotificationListener = (listener: INotificationListener): void => {
                if (_notificationManager) {
                    _notificationManager.removeNotificationListener(listener);
                }
            }
        
            _self.getCookieMgr = (): ICookieMgr => {
                if (!_cookieManager) {
                    _addUnloadHook(_configHandler.watch((details) => {
                        _cookieManager = createCookieMgr(details.cfg, _self.logger);
                    }));
                }

                return _cookieManager;
            };

            _self.setCookieMgr = (cookieMgr: ICookieMgr) => {
                _cookieManager = cookieMgr;
            };

            _self.getPerfMgr = (): IPerfManager => {
                if (!_perfManager && !_cfgPerfManager) {
                    _addUnloadHook(_configHandler.watch((details) => {
                        if (details.cfg.enablePerfMgr) {
                            let createPerfMgr = details.cfg.createPerfMgr;
                            if (isFunction(createPerfMgr)) {
                                _cfgPerfManager = createPerfMgr(_self, _self.getNotifyMgr());
                            }
                        }
                    }));
                }

                return _perfManager || _cfgPerfManager || getGblPerfMgr();
            };

            _self.setPerfMgr = (perfMgr: IPerfManager) => {
                _perfManager = perfMgr;
            };

            _self.eventCnt = (): number => {
                return _eventQueue.length;
            };

            _self.releaseQueue = () => {
                if (_isInitialized && _eventQueue.length > 0) {
                    let eventQueue = _eventQueue;
                    _eventQueue = [];

                    arrForEach(eventQueue, (event: ITelemetryItem) => {
                        _createTelCtx().processNext(event);
                    });
                }
            };

            /**
             * Periodically check logger.queue for log messages to be flushed
             */
            _self.pollInternalLogs = (eventName?: string): number => {
                _internalLogsEventName = eventName || null;

                _addUnloadHook(_configHandler.watch((details) => {
                    let interval: number = details.cfg.diagnosticLogInterval;
                    if (!interval || !(interval > 0)) {
                        interval = 10000;
                    }

                    if(_internalLogPoller) {
                        clearInterval(_internalLogPoller);
                    }
                    _internalLogPoller = setInterval(() => {
                        _flushInternalLogs();
                    }, interval) as any;
                }));

                return _internalLogPoller;
            }

            /**
             * Stop polling log messages from logger.queue
             */
            _self.stopPollingInternalLogs = (): void => {
                if(_internalLogPoller) {
                    clearInterval(_internalLogPoller);
                    _internalLogPoller = 0;
                    _flushInternalLogs();
                }
            }

            // Add addTelemetryInitializer
            proxyFunctions(_self, () => _telemetryInitializerPlugin, [ "addTelemetryInitializer" ]);

            _self.unload = (isAsync: boolean = true, unloadComplete?: (unloadState: ITelemetryUnloadState) => void, cbTimeout?: number): void => {
                if (!_isInitialized) {
                    // The SDK is not initialized
                    throwError(strSdkNotInitialized);
                }

                // Check if the SDK still unloading so throw
                if (_isUnloading) {
                    // The SDK is already unloading
                    throwError(strSdkUnloadingError);
                }

                let unloadState: ITelemetryUnloadState = {
                    reason: TelemetryUnloadReason.SdkUnload,
                    isAsync: isAsync,
                    flushComplete: false
                }

                let processUnloadCtx = createProcessTelemetryUnloadContext(_getPluginChain(), _self);
                processUnloadCtx.onComplete(() => {
                    let oldHooks = _hooks;
                    _hooks = [];

                    // Remove all registered unload hooks
                    arrForEach(oldHooks, (fn) => {
                        // allow either rm or remove callback function
                        try{
                            ((fn as IUnloadHook).rm || (fn as ILegacyUnloadHook).remove).call(fn);
                        } catch (e) {
                            _throwInternal(_self.logger, eLoggingSeverity.WARNING, _eInternalMessageId.PluginException, "Unloading:" + dumpObj(e));
                        }
                    });

                    _initDefaults();
                    unloadComplete && unloadComplete(unloadState);
                }, _self);

                function _doUnload(flushComplete: boolean) {
                    unloadState.flushComplete = flushComplete;
                    _isUnloading = true;

                    // Run all of the unload handlers first (before unloading the plugins)
                    _unloadHandlers.run(processUnloadCtx, unloadState);
                    
                    // Stop polling the internal logs
                    _self.stopPollingInternalLogs();

                    // Start unloading the components, from this point onwards the SDK should be considered to be in an unstable state
                    processUnloadCtx.processNext(unloadState);
                }

                if (!_flushChannels(isAsync, _doUnload, SendRequestReason.SdkUnload, cbTimeout)) {
                    _doUnload(false);
                }
            };

            _self.getPlugin = _getPlugin;

            _self.addPlugin = <T extends IPlugin = ITelemetryPlugin>(plugin: T, replaceExisting?: boolean, isAsync?: boolean, addCb?: (added?: boolean) => void): void => {
                if (!plugin) {
                    addCb && addCb(false);
                    _logOrThrowError(strValidationError);
                    return;
                }

                let existingPlugin = _getPlugin(plugin.identifier);
                if (existingPlugin && !replaceExisting) {
                    addCb && addCb(false);

                    _logOrThrowError("Plugin [" + plugin.identifier + "] is already loaded!");
                    return;
                }

                let updateState: ITelemetryUpdateState = {
                    reason: TelemetryUpdateReason.PluginAdded
                };

                function _addPlugin(removed: boolean) {
                    _configExtensions.push(plugin);
                    updateState.added = [plugin];

                    // Re-Initialize the plugin chain
                    _initPluginChain(updateState);
                    addCb && addCb(true);
                }

                if (existingPlugin) {
                    let removedPlugins: IPlugin[] = [existingPlugin.plugin];
                    let unloadState: ITelemetryUnloadState = {
                        reason: TelemetryUnloadReason.PluginReplace,
                        isAsync: !!isAsync
                    };

                    _removePlugins(removedPlugins, unloadState, (removed) => {
                        if (!removed) {
                            // Previous plugin was successfully removed or was not installed
                            addCb && addCb(false);
                        } else {
                            updateState.removed = removedPlugins
                            updateState.reason |= TelemetryUpdateReason.PluginRemoved;
                            _addPlugin(true);
                        }
                    });
                } else {
                    _addPlugin(false);
                }
            };

            _self.updateCfg = <T extends IConfiguration = IConfiguration>(newConfig: T, mergeExisting: boolean = true) => {
                let updateState: ITelemetryUpdateState = {
                    reason: TelemetryUpdateReason.ConfigurationChanged,
                    cfg: _configHandler.cfg,
                    oldCfg: deepExtend({}, _configHandler.cfg),
                    newConfig: deepExtend({}, newConfig),
                    merge: mergeExisting
                };

                newConfig = updateState.newConfig as T;

                let cfg =  _configHandler.cfg;

                // replace the immutable values
                newConfig.extensions = cfg.extensions;
                newConfig.channels = cfg.channels;

                // We don't currently allow updating the extensions and channels via the update config
                // So overwriting any user provided values to reuse the existing values
                // Explicitly blocking any previous config watchers so that they don't get called because
                // of this bulk update (Probably not necessary)
                (_configHandler as _IInternalDynamicConfigHandler<IConfiguration>)._block((details) => {

                    // Lets assign the new values to the existing config either overwriting or re-assigning
                    let theConfig = details.cfg;
                    _deepMergeConfig(details, theConfig, newConfig, mergeExisting);

                    if (!mergeExisting) {
                        // Remove (unassign) the values "missing" from the newConfig and also not in the default config
                        objForEachKey(theConfig, (key) => {
                            if (!objHasOwn(newConfig, key)) {
                                // Set the value to undefined
                                details.set(theConfig, key, UNDEFINED_VALUE);
                            }
                        });
                    }

                    // Apply defaults to the new config
                    details.setDf(theConfig, defaultConfig as any);
                });

                // Now execute all of the listeners (synchronously) so they update their values immediately
                _configHandler.notify();

                _doUpdate(updateState);

            };

            _self.evtNamespace = (): string => {
                return _evtNamespace;
            };

            _self.flush = _flushChannels;
        
            _self.getTraceCtx = (createNew?: boolean): IDistributedTraceContext | null => {
                if (!_traceCtx) {
                    _traceCtx = createDistributedTraceContext();
                }

                return _traceCtx;
            };

            _self.setTraceCtx = (traceCtx: IDistributedTraceContext): void => {
                _traceCtx = traceCtx || null;
            };

            _self.addUnloadHook = _addUnloadHook;

            // Create the addUnloadCb
            proxyFunctionAs(_self, "addUnloadCb", () => _unloadHandlers, "add");

            _self.onCfgChange = <T extends IConfiguration = IConfiguration>(handler: WatcherFunction<T>): IUnloadHook => {
                let unloadHook: IUnloadHook;
                if (!_isInitialized) {
                    unloadHook = _addDelayedCfgListener(_cfgListeners, handler);
                } else {
                    unloadHook = onConfigChange(_configHandler.cfg, handler, _self.logger);
                }

                return {
                    rm: () => {
                        unloadHook.rm();
                    }
                }
            };

            function _initDefaults() {
                _isInitialized = false;

                // Use a default logger so initialization errors are not dropped on the floor with full logging
                _configHandler = createDynamicConfig({}, defaultConfig, _self.logger);
                
                // Set the logging level to critical so that any critical initialization failures are displayed on the console
                _configHandler.cfg.loggingLevelConsole = eLoggingSeverity.CRITICAL;

                // Define _self.config
                objDefineProp(_self, "config", {
                    configurable: true,
                    enumerable: true,
                    get: () => _configHandler.cfg,
                    set: (newValue) => {
                        if (_self.isInitialized()) {
                            _self.updateCfg(newValue, false);
                        }
                    }
                });



                _self.logger = new DiagnosticLogger(_configHandler.cfg);
                _self._extensions = [];

                _telemetryInitializerPlugin = new TelemetryInitializerPlugin();
                _eventQueue = [];
                _notificationManager = null;
                _perfManager = null;
                _cfgPerfManager = null;
                _cookieManager = null;
                _pluginChain = null;
                _coreExtensions = null;
                _configExtensions = [];
                _channelControl = null;
                _channelConfig = null;
                _channelQueue = null;
                _isUnloading = false;
                _internalLogsEventName = null;
                _evtNamespace = createUniqueNamespace("AIBaseCore", true);
                _unloadHandlers = createUnloadHandlerContainer();
                _traceCtx = null;
                _instrumentationKey = null;
                _hooks = [];
                _cfgListeners = [];
            }

            function _createTelCtx(): IProcessTelemetryContext {
                return createProcessTelemetryContext(_getPluginChain(), _configHandler.cfg, _self);
            }

            // Initialize or Re-initialize the plugins
            function _initPluginChain(updateState: ITelemetryUpdateState | null) {
                // Extension validation
                let theExtensions = _validateExtensions(_self.logger, ChannelControllerPriority, _configExtensions);
            
                _coreExtensions = theExtensions.core;
                _pluginChain = null;
            
                // Sort the complete set of extensions by priority
                let allExtensions = theExtensions.all;

                // Initialize the Channel Queues and the channel plugins first
                _channelQueue = objFreeze(createChannelQueues(_channelConfig, allExtensions, _self));
                if (_channelControl) {
                    // During add / remove of a plugin this may get called again, so don't re-add if already present
                    // But we also want the controller as the last, so remove if already present
                    // And reusing the existing instance, just in case an installed plugin has a reference and
                    // is using it.
                    let idx = arrIndexOf(allExtensions, _channelControl);
                    if (idx !== -1) {
                        allExtensions.splice(idx, 1);
                    }

                    idx = arrIndexOf(_coreExtensions, _channelControl);
                    if (idx !== -1) {
                        _coreExtensions.splice(idx, 1);
                    }

                    (_channelControl as IInternalChannelController)._setQueue(_channelQueue);
                } else {
                    _channelControl = createChannelControllerPlugin(_channelQueue, _self);
                }

                // Add on "channelController" as the last "plugin"
                allExtensions.push(_channelControl);
                _coreExtensions.push(_channelControl);

                // Required to allow plugins to call core.getPlugin() during their own initialization
                _self._extensions = sortPlugins(allExtensions);

                // Initialize the controls
                _channelControl.initialize(_configHandler.cfg, _self, allExtensions);
                
                initializePlugins(_createTelCtx(), allExtensions);

                // Now reset the extensions to just those being managed by AppInsightsCore
                _self._extensions = objFreeze(sortPlugins(_coreExtensions || [])).slice();

                if (updateState) {
                    _doUpdate(updateState);
                }
            }

            function _getPlugin<T extends IPlugin = IPlugin>(pluginIdentifier: string): ILoadedPlugin<T> {
                let theExt: ILoadedPlugin<T> = null;
                let thePlugin: IPlugin = null;

                arrForEach(_self._extensions, (ext: any) => {
                    if (ext.identifier === pluginIdentifier && ext !== _channelControl && ext !== _telemetryInitializerPlugin) {
                        thePlugin = ext;
                        return -1;
                    }
                });

                if (!thePlugin && _channelControl) {
                    // Check the channel Controller
                    thePlugin = _channelControl.getChannel(pluginIdentifier);
                }

                if (thePlugin) {
                    theExt = {
                        plugin: thePlugin as T,
                        setEnabled: (enabled: boolean) => {
                            _getPluginState(thePlugin)[STR_DISABLED] = !enabled;
                        },
                        isEnabled: () => {
                            let pluginState = _getPluginState(thePlugin);
                            return !pluginState.teardown && !pluginState[STR_DISABLED];
                        },
                        remove: (isAsync: boolean = true, removeCb?: (removed?: boolean) => void): void => {
                            let pluginsToRemove: IPlugin[] = [thePlugin];
                            let unloadState: ITelemetryUnloadState = {
                                reason: TelemetryUnloadReason.PluginUnload,
                                isAsync: isAsync
                            };

                            _removePlugins(pluginsToRemove, unloadState, (removed) => {
                                if (removed) {
                                    // Re-Initialize the plugin chain
                                    _initPluginChain({
                                        reason: TelemetryUpdateReason.PluginRemoved,
                                        removed: pluginsToRemove
                                    });
                                }

                                removeCb && removeCb(removed);
                            });
                        }
                    }
                }

                return theExt;
            }

            function _getPluginChain() {
                if (!_pluginChain) {
                    // copy the collection of extensions
                    let extensions = (_coreExtensions || []).slice();

                    // During add / remove this may get called again, so don't readd if already present
                    if (arrIndexOf(extensions, _telemetryInitializerPlugin) === -1) {
                        extensions.push(_telemetryInitializerPlugin);
                    }

                    _pluginChain = createTelemetryProxyChain(sortPlugins(extensions), _configHandler.cfg, _self);
                }

                return _pluginChain;
            }

            function _removePlugins(thePlugins: IPlugin[], unloadState: ITelemetryUnloadState, removeComplete: (removed: boolean) => void) {

                if (thePlugins && thePlugins.length > 0) {
                    let unloadChain = createTelemetryProxyChain(thePlugins, _configHandler.cfg, _self);
                    let unloadCtx = createProcessTelemetryUnloadContext(unloadChain, _self);

                    unloadCtx.onComplete(() => {
                        let removed = false;

                        // Remove the listed config extensions
                        let newConfigExtensions: IPlugin[] = [];
                        arrForEach(_configExtensions, (plugin, idx) => {
                            if (!_isPluginPresent(plugin, thePlugins)) {
                                newConfigExtensions.push(plugin);
                            } else {
                                removed = true;
                            }
                        });

                        _configExtensions = newConfigExtensions;

                        // Re-Create the channel config
                        let newChannelConfig: IChannelControls[][] = [];
                        if (_channelConfig) {
                            arrForEach(_channelConfig, (queue, idx) => {
                                let newQueue: IChannelControls[] = [];
                                arrForEach(queue, (channel) => {
                                    if (!_isPluginPresent(channel, thePlugins)) {
                                        newQueue.push(channel);
                                    } else {
                                        removed = true;
                                    }
                                });

                                newChannelConfig.push(newQueue);
                            });

                            _channelConfig = newChannelConfig;
                        }

                        removeComplete && removeComplete(removed);
                    });

                    unloadCtx.processNext(unloadState);
                } else {
                    removeComplete(false);
                }
            }

            function _flushInternalLogs() {
                let queue: _InternalLogMessage[] = _self.logger ? _self.logger.queue : [];
                if (queue) {
                    arrForEach(queue, (logMessage: _InternalLogMessage) => {
                        const item: ITelemetryItem = {
                            name: _internalLogsEventName ? _internalLogsEventName : "InternalMessageId: " + logMessage.messageId,
                            iKey: _instrumentationKey,
                            time: toISOString(new Date()),
                            baseType: _InternalLogMessage.dataType,
                            baseData: { message: logMessage.message }
                        };
                        _self.track(item);
                    });

                    queue.length = 0;
                }
            }

            function _flushChannels(isAsync?: boolean, callBack?: (flushComplete?: boolean) => void, sendReason?: SendRequestReason, cbTimeout?: number) {
                if (_channelControl) {
                    return _channelControl.flush(isAsync, callBack, sendReason || SendRequestReason.SdkUnload, cbTimeout);
                }

                callBack && callBack(false);
                return true;
            }

            function _initDebugListener() {
                // Lazily ensure that the notification manager is created
                !_notificationManager && _self.getNotifyMgr();

                // Will get recalled if any referenced config values are changed
                _addUnloadHook(_configHandler.watch((details) => {
                    let disableDbgExt = details.cfg.disableDbgExt;

                    if (disableDbgExt === true && _debugListener) {
                        // Remove any previously loaded debug listener
                        _notificationManager.removeNotificationListener(_debugListener);
                        _debugListener = null;
                    }
    
                    if (_notificationManager && !_debugListener && disableDbgExt !== true) {
                        _debugListener = getDebugListener(details.cfg);
                        _notificationManager.addNotificationListener(_debugListener);
                    }
                }));
            }

            function _initPerfManager() {
                // Will get recalled if any referenced config values are changed
                _addUnloadHook(_configHandler.watch((details) => {
                    let enablePerfMgr = details.cfg.enablePerfMgr;

                    if (!enablePerfMgr && _cfgPerfManager) {
                        // Remove any existing config based performance manager
                        _cfgPerfManager = null;
                    }
    
                    if (enablePerfMgr) {
                        // Set the performance manager creation function if not defined
                        getSetValue(details.cfg, STR_CREATE_PERF_MGR, _createPerfManager);
                    }
                }));
            }

            function _doUpdate(updateState: ITelemetryUpdateState): void {
                let updateCtx = createProcessTelemetryUpdateContext(_getPluginChain(), _self);

                if (!_self._updateHook || _self._updateHook(updateCtx, updateState) !== true) {
                    updateCtx.processNext(updateState);
                }
            }

            function _logOrThrowError(message: string) {
                let logger = _self.logger;
                if (logger) {
                    // there should always be a logger
                    _throwInternal(logger, eLoggingSeverity.WARNING, _eInternalMessageId.PluginException, message);
                } else {
                    throwError(message);
                }
            }

            function _notifyInvalidEvent(telemetryItem: ITelemetryItem): void {
                let manager = _self.getNotifyMgr();
                if (manager) {
                    manager.eventsDiscarded([telemetryItem], eEventsDiscardedReason.InvalidEvent);
                }
            }

            function _addUnloadHook(hooks: IUnloadHook | IUnloadHook[] | Iterator<IUnloadHook> | ILegacyUnloadHook | ILegacyUnloadHook[] | Iterator<ILegacyUnloadHook>) {
                if (hooks) {
                    arrAppend(_hooks, hooks);
                }
            }
        });
    }

    public initialize(config: IConfiguration, extensions: IPlugin[], logger?: IDiagnosticLogger, notificationManager?: INotificationManager): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    public getTransmissionControls(): IChannelControls[][] {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    }

    public track(telemetryItem: ITelemetryItem) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    public getProcessTelContext(): IProcessTelemetryContext {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    }

    public getNotifyMgr(): INotificationManager {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    }

    /**
     * Adds a notification listener. The SDK calls methods on the listener when an appropriate notification is raised.
     * The added plugins must raise notifications. If the plugins do not implement the notifications, then no methods will be
     * called.
     * @param listener - An INotificationListener object.
     */
    public addNotificationListener(listener: INotificationListener): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    /**
     * Removes all instances of the listener.
     * @param listener - INotificationListener to remove.
     */
    public removeNotificationListener(listener: INotificationListener): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    /**
     * Get the current cookie manager for this instance
     */
    public getCookieMgr(): ICookieMgr {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    }

    /**
     * Set the current cookie manager for this instance
     * @param cookieMgr - The manager, if set to null/undefined will cause the default to be created
     */
    public setCookieMgr(cookieMgr: ICookieMgr) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    public getPerfMgr(): IPerfManager {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    }

    public setPerfMgr(perfMgr: IPerfManager) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    public eventCnt(): number {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return 0;
    }

    /**
     * Periodically check logger.queue for
     */
    public pollInternalLogs(eventName?: string): number {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return 0;
    }

    /**
     * Periodically check logger.queue for
     */
    public stopPollingInternalLogs(): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    /**
     * Add a telemetry processor to decorate or drop telemetry events.
     * @param telemetryInitializer - The Telemetry Initializer function
     * @returns - A ITelemetryInitializerHandler to enable the initializer to be removed
     */
    public addTelemetryInitializer(telemetryInitializer: TelemetryInitializerFunction): ITelemetryInitializerHandler {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    }

    /**
     * Unload and Tear down the SDK and any initialized plugins, after calling this the SDK will be considered
     * to be un-initialized and non-operational, re-initializing the SDK should only be attempted if the previous
     * unload call return `true` stating that all plugins reported that they also unloaded, the recommended
     * approach is to create a new instance and initialize that instance.
     * This is due to possible unexpected side effects caused by plugins not supporting unload / teardown, unable
     * to successfully remove any global references or they may just be completing the unload process asynchronously.
     * @param isAsync - Can the unload be performed asynchronously (default)
     * @param unloadComplete - An optional callback that will be called once the unload has completed
     * @param cbTimeout - An optional timeout to wait for any flush operations to complete before proceeding with the unload. Defaults to 5 seconds.
     */
    public unload(isAsync?: boolean, unloadComplete?: (unloadState: ITelemetryUnloadState) => void, cbTimeout?: number): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    public getPlugin<T extends IPlugin = IPlugin>(pluginIdentifier: string): ILoadedPlugin<T> {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    }

    /**
     * Add a new plugin to the installation
     * @param plugin - The new plugin to add
     * @param replaceExisting - should any existing plugin be replaced, default is false
     * @param doAsync - Should the add be performed asynchronously
     * @param addCb - [Optional] callback to call after the plugin has been added
     */
    public addPlugin<T extends IPlugin = ITelemetryPlugin>(plugin: T, replaceExisting?: boolean, doAsync?: boolean, addCb?: (added?: boolean) => void): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    /**
     * Update the configuration used and broadcast the changes to all loaded plugins
     * @param newConfig - The new configuration is apply
     * @param mergeExisting - Should the new configuration merge with the existing or just replace it. Default is to true.
     */
    public updateCfg<T extends IConfiguration = IConfiguration>(newConfig: T, mergeExisting?: boolean): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    /**
     * Returns the unique event namespace that should be used
     */
    public evtNamespace(): string {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    }

    /**
     * Add an unload handler that will be called when the SDK is being unloaded
     * @param handler - the handler
     */
    public addUnloadCb(handler: UnloadHandler): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    /**
     * Flush and send any batched / cached data immediately
     * @param async - send data asynchronously when true (defaults to true)
     * @param callBack - if specified, notify caller when send is complete, the channel should return true to indicate to the caller that it will be called.
     * If the caller doesn't return true the caller should assume that it may never be called.
     * @param sendReason - specify the reason that you are calling "flush" defaults to ManualFlush (1) if not specified
     * @returns - true if the callback will be return after the flush is complete otherwise the caller should assume that any provided callback will never be called
     */
    public flush(isAsync?: boolean, callBack?: (flushComplete?: boolean) => void, sendReason?: SendRequestReason): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }
        
    /**
     * Gets the current distributed trace context for this instance if available
     * @param createNew - Optional flag to create a new instance if one doesn't currently exist, defaults to true
     */
    public getTraceCtx(createNew?: boolean): IDistributedTraceContext | null {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    }

    /**
     * Sets the current distributed trace context for this instance if available
     */
    public setTraceCtx(newTracectx: IDistributedTraceContext): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    /**
     * Add this hook so that it is automatically removed during unloading
     * @param hooks - The single hook or an array of IInstrumentHook objects
     */
    public addUnloadHook(hooks: IUnloadHook | IUnloadHook[] | Iterator<IUnloadHook> | ILegacyUnloadHook | ILegacyUnloadHook[] | Iterator<ILegacyUnloadHook>): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    /**
     * Watches and tracks changes for accesses to the current config, and if the accessed config changes the
     * handler will be recalled.
     * @param handler
     * @returns A watcher handler instance that can be used to remove itself when being unloaded
     */
    public onCfgChange<T extends IConfiguration = IConfiguration>(handler: WatcherFunction<T>): IUnloadHook {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    }

    protected releaseQueue() {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    /**
     * Hook for Core extensions to allow them to update their own configuration before updating all of the plugins.
     * @param updateCtx - The plugin update context
     * @param updateState - The Update State
     * @returns boolean - True means the extension class will call updateState otherwise the Core will
     */
    protected _updateHook?(updateCtx: IProcessTelemetryUpdateContext, updateState: ITelemetryUpdateState): void | boolean {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return false;
    }
}
