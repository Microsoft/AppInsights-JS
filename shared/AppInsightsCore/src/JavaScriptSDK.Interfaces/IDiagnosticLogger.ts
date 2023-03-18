// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { LoggingSeverity, _InternalMessageId } from "../JavaScriptSDK.Enums/LoggingEnums";
import { _InternalLogMessage } from "../JavaScriptSDK/DiagnosticLogger";
import { ITelemetryUpdateState } from "./ITelemetryUpdateState";

export interface IDiagnosticLogger {

    /**
     * 0: OFF
     * 1: only critical (default)
     * 2: critical + info
     */
    consoleLoggingLevel: () => number;

    /**
     * The internal logging queue
     */
    queue: _InternalLogMessage[];

    /**
     * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
     * @param severity - The severity of the log message
     * @param message - The log message.
     */
    throwInternal(severity: LoggingSeverity, msgId: _InternalMessageId, msg: string, properties?: Object, isUserAct?: boolean): void;

    /**
     * This will write a warning to the console if possible
     * @param message - The warning message
     */
    warnToConsole(message: string): void;

    /**
     * This will write an error to the console if possible.
     * Provided by the default DiagnosticLogger instance, and internally the SDK will fall back to warnToConsole, however,
     * direct callers MUST check for its existence on the logger as you can provide your own IDiagnosticLogger instance.
     * @param message - The error message
     */
    errorToConsole?(message: string): void;

    /**
     * Resets the internal message count
     */
    resetInternalMessageCount(): void;

    /**
     * Logs a message to the internal queue.
     * @param severity - The severity of the log message
     * @param message - The message to log.
     */
    logInternalMessage?(severity: LoggingSeverity, message: _InternalLogMessage): void;

    /**
     * Optional Callback hook to allow the diagnostic logger to update it's configuration
     * @param updateState
     */
    update?(updateState: ITelemetryUpdateState): void;
}
