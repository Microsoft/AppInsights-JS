// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
"use strict";

import { IAppInsightsCore } from "./IAppInsightsCore";
import { IDiagnosticLogger } from "./IDiagnosticLogger";
import { IConfiguration } from "./IConfiguration";
import { ITelemetryItem } from "./ITelemetryItem";
import { IPlugin, ITelemetryPlugin } from "./ITelemetryPlugin";
import { ITelemetryPluginChain } from "./ITelemetryPluginChain";

export const enum GetExtCfgMergeType {
    None = 0,
    MergeDefaultOnly = 1,
    MergeDefaultFromRootOrDefault = 2,
}

/**
 * The current context for the current call to processTelemetry(), used to support sharing the same plugin instance
 * between multiple AppInsights instances
 */
export interface IProcessTelemetryContext {
    /**
     * The current core instance for the request
     */
    core: () => IAppInsightsCore;

    /**
     * THe current diagnostic logger for the request
     */
    diagLog: () => IDiagnosticLogger;

    /**
     * Gets the current core config instance
     */
    getCfg: () => IConfiguration;

    /**
     * Gets the named extension config
     */
    getExtCfg: <T>(identifier: string, defaultValue?: T | any, mergeDefault?: GetExtCfgMergeType) => T;

    /**
     * Gets the named config from either the named identifier extension or core config if neither exist then the
     * default value is returned
     * @param identifier The named extension identifier
     * @param field The config field name
     * @param defaultValue The default value to return if no defined config exists
     */
    getConfig: (identifier: string, field: string, defaultValue?: number | string | boolean | string[] | RegExp[] | Function) => number | string | boolean | string[] | RegExp[] | Function;

    /**
     * Helper to allow plugins to check and possibly shortcut executing code only
     * required if there is a nextPlugin
     */
    hasNext: () => boolean;

    /**
     * Returns the next configured plugin proxy
     */
    getNext: () => ITelemetryPluginChain;

    /**
     * Helper to set the next plugin proxy
     */
    setNext: (nextCtx: ITelemetryPluginChain) => void;

    /**
     * Call back for telemetry processing before it it is sent
     * @param env - This is the current event being reported
     */
    processNext: (env: ITelemetryItem) => void;

    /**
     * Synchronously iterate over the context chain running the callback for each plugin, once
     * every plugin has been executed via the callback, any associated onComplete will be called.
     * @param callback - The function call for each plugin in the context chain
     */
    iterate: <T extends ITelemetryPlugin = ITelemetryPlugin>(callback: (plugin: T) => void) => void;

    /**
     * Create a new context using the core and config from the current instance
     * @param plugins - The execution order to process the plugins, if null or not supplied
     *                  then the current execution order will be copied.
     * @param startAt - The plugin to start processing from, if missing from the execution
     *                  order then the next plugin will be NOT set.
     */
    createNew: (plugins?:IPlugin[]|ITelemetryPluginChain, startAt?:IPlugin) => IProcessTelemetryContext;

    /**
     * Set the function to call when the current chain has executed all processNext or unloadNext items.
     */
    onComplete: (onComplete: () => void) => void;
}
