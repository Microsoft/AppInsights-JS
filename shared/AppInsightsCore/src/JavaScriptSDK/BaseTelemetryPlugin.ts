// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

"use strict";

import dynamicProto from "@microsoft/dynamicproto-js";
import { IAppInsightsCore } from "../JavaScriptSDK.Interfaces/IAppInsightsCore"
import { IConfiguration } from "../JavaScriptSDK.Interfaces/IConfiguration";
import { IDiagnosticLogger } from "../JavaScriptSDK.Interfaces/IDiagnosticLogger";
import { IPlugin, ITelemetryPlugin } from "../JavaScriptSDK.Interfaces/ITelemetryPlugin";
import { ITelemetryItem } from "../JavaScriptSDK.Interfaces/ITelemetryItem";
import { IProcessTelemetryContext } from "../JavaScriptSDK.Interfaces/IProcessTelemetryContext";
import { ITelemetryPluginChain } from "../JavaScriptSDK.Interfaces/ITelemetryPluginChain";
import { createProcessTelemetryContext } from "./ProcessTelemetryContext";
import { isArray, isFunction, isNullOrUndefined, setValue } from "./HelperFuncs";
import { strExtensionConfig } from "./Constants";
import { IInstrumentHook } from "../JavaScriptSDK.Interfaces/IInstrumentHooks";

let strGetPlugin = "getPlugin";

/**
 * BaseTelemetryPlugin provides a basic implementation of the ITelemetryPlugin interface so that plugins
 * can avoid implementation the same set of boiler plate code as well as provide a base
 * implementation so that new default implementations can be added without breaking all plugins.
 */
export abstract class BaseTelemetryPlugin implements ITelemetryPlugin {
    
    public identifier: string;
    public version?: string;

    /**
     * Holds the core instance that was used during initialization
     */
    public core: IAppInsightsCore;

    priority: number;

    /**
     * Call back for telemetry processing before it it is sent
     * @param env - This is the current event being reported
     * @param itemCtx - This is the context for the current request, ITelemetryPlugin instances
     * can optionally use this to access the current core instance or define / pass additional information
     * to later plugins (vs appending items to the telemetry item)
     */
    public processNext: (env: ITelemetryItem, itemCtx: IProcessTelemetryContext) => void;

    /**
     * Set next extension for telemetry processing
     */
    public setNextPlugin: (next: ITelemetryPlugin | ITelemetryPluginChain) => void;

    /**
     * Returns the current diagnostic logger that can be used to log issues, if no logger is currently
     * assigned a new default one will be created and returned.
     */
    public diagLog: (itemCtx?:IProcessTelemetryContext) => IDiagnosticLogger;

    /**
     * Returns whether the plugin has been initialized
     */
    public isInitialized: () => boolean;

    /**
     * Helper to return the current IProcessTelemetryContext, if the passed argument exists this just
     * returns that value (helps with minification for callers), otherwise it will return the configured
     * context or a temporary one.
     * @param currentCtx - [Optional] The current execution context
     */
    protected _getTelCtx: (currentCtx?:IProcessTelemetryContext) => IProcessTelemetryContext;

    /**
     * Internal helper to allow setting of the internal initialized setting for inherited instances and unit testing
     */
    protected setInitialized: (isInitialized: boolean) => void;

    /**
     * Internal helper to initialize the instance
     */
    private _baseTelInit: (config: IConfiguration, core: IAppInsightsCore, extensions: IPlugin[], pluginChain?:ITelemetryPluginChain) => void;

    constructor() {
        let _self = this;           // Setting _self here as it's used outside of the dynamicProto as well

        // NOTE!: DON'T set default values here, instead set them in the _initDefaults() function as it is also called during teardown()
        let _isinitialized: boolean;
        let _rootCtx: IProcessTelemetryContext; // Used as the root context, holding the current config and initialized core
        let _nextPlugin: ITelemetryPlugin | ITelemetryPluginChain; // Used for backward compatibility where plugins don't call the main pipeline
        let _hooks: IInstrumentHook[];

        _initDefaults();

        dynamicProto(BaseTelemetryPlugin, _self, (_self) => {

            _self.initialize = (config: IConfiguration, core: IAppInsightsCore, extensions: IPlugin[], pluginChain?:ITelemetryPluginChain): void => {
                _setDefaults(config, core, pluginChain);
                _isinitialized = true;
            }
        
            _self._addHook = (hooks: IInstrumentHook | IInstrumentHook[]) => {
                if (hooks) {
                    if (isArray(hooks)) {
                        _hooks = _hooks.concat(hooks);
                    } else {
                        _hooks.push(hooks);
                    }
                }
            };
        });

        // These are added after the dynamicProto so that are not moved to the prototype

        _self.diagLog = (itemCtx:IProcessTelemetryContext): IDiagnosticLogger => {
            return _getTelCtx(itemCtx).diagLog();
        }

        _self.isInitialized = () => {
            return _isinitialized;
        }

        _self.setInitialized = (isInitialized: boolean):void => {
            _isinitialized = isInitialized;
        }

        // _self.getNextPlugin = () => DO NOT IMPLEMENT
        // Sub-classes of this base class *should* not be relying on this value and instead
        // should use processNext() function. If you require access to the plugin use the
        // IProcessTelemetryContext.getNext().getPlugin() while in the pipeline, Note getNext() may return null.

        _self.setNextPlugin = (next: ITelemetryPlugin | ITelemetryPluginChain) => {
            _nextPlugin = next;
        };

        _self.processNext = (env: ITelemetryItem, itemCtx: IProcessTelemetryContext) => {
            if (itemCtx) {
                // Normal core execution sequence
                itemCtx.processNext(env);
            } else if (_nextPlugin && isFunction(_nextPlugin.processTelemetry)) {
                // Looks like backward compatibility or out of band processing. And as it looks
                // like a ITelemetryPlugin or ITelemetryPluginChain, just call processTelemetry
                _nextPlugin.processTelemetry(env, null);
            }
        };

        _self._getTelCtx = _getTelCtx;
        
        function _getTelCtx(currentCtx:IProcessTelemetryContext = null) {
            let itemCtx:IProcessTelemetryContext = currentCtx;
            if (!itemCtx) {
                let rootCtx = _rootCtx || createProcessTelemetryContext(null, {}, _self.core);
                // tslint:disable-next-line: prefer-conditional-expression
                if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                    // Looks like a chain object
                    itemCtx = rootCtx.createNew(null, _nextPlugin[strGetPlugin]);
                } else {
                    itemCtx = rootCtx.createNew(null, _nextPlugin as ITelemetryPlugin);
                }
            }
            
            return itemCtx;
        }

        function _setDefaults(config: IConfiguration, core: IAppInsightsCore, pluginChain: ITelemetryPluginChain) {
            if (config) {
                // Make sure the extensionConfig exists
                setValue(config, strExtensionConfig, [], null, isNullOrUndefined);
            }
    
            if (!pluginChain && core) {
                // Get the first plugin from the core
                pluginChain = core.getProcessTelContext().getNext();
            }
    
            let nextPlugin: IPlugin = _nextPlugin as IPlugin;
            if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                // If it looks like a proxy/chain then get the plugin
                nextPlugin = _nextPlugin[strGetPlugin]();
            }

            // Support legacy plugins where core was defined as a property
            _self.core = core;
            _rootCtx = createProcessTelemetryContext(pluginChain, config, core, nextPlugin);
        }

        function _initDefaults() {
            _isinitialized = false;
            _self.core = null;
            _rootCtx = null;
            _nextPlugin = null;
            _hooks = [];
        }
    }

    public initialize(config: IConfiguration, core: IAppInsightsCore, extensions: IPlugin[], pluginChain?:ITelemetryPluginChain): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }

    public abstract processTelemetry(env: ITelemetryItem, itemCtx?: IProcessTelemetryContext): void;

    /**
     * Add this hook so that it is automatically removed during unloading
     * @param hooks - The single hook or an array of IInstrumentHook objects
     */
    protected _addHook(hooks: IInstrumentHook | IInstrumentHook[]): void {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    }
}
