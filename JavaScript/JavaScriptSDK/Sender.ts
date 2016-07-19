﻿/// <reference path="serializer.ts" />
/// <reference path="Telemetry/Common/Envelope.ts"/>
/// <reference path="Telemetry/Common/Base.ts" />
/// <reference path="../JavaScriptSDK.Interfaces/Contracts/Generated/ContextTagKeys.ts"/>
/// <reference path="../JavaScriptSDK.Interfaces/Contracts/Generated/Envelope.ts" />
/// <reference path="Context/Application.ts"/>
/// <reference path="Context/Device.ts"/>
/// <reference path="Context/Internal.ts"/>
/// <reference path="Context/Location.ts"/>
/// <reference path="Context/Operation.ts"/>
/// <reference path="Context/Sample.ts"/>
/// <reference path="Context/Session.ts"/>
/// <reference path="Context/User.ts"/>
/// <reference path="ajax/ajax.ts"/>
/// <reference path="DataLossAnalyzer.ts"/>
/// <reference path="SendBuffer.ts"/>

interface XDomainRequest extends XMLHttpRequestEventTarget {
    responseText: string;
    send(payload: string);
    open(method: string, url: string);
};

declare var XDomainRequest: {
    prototype: XDomainRequest;
    new (): XDomainRequest;
};

module Microsoft.ApplicationInsights {
    "use strict";

    export interface ISenderConfig {
        /**
         * The url to which payloads will be sent
         */
        endpointUrl: () => string;

        /**
        * The JSON format (normal vs line delimited). True means line delimited JSON.
        */
        emitLineDelimitedJson: () => boolean;

        /**
         * The maximum size of a batch in bytes
         */
        maxBatchSizeInBytes: () => number;

        /**
         * The maximum interval allowed between calls to batchInvoke
         */
        maxBatchInterval: () => number;

        /**
         * The master off switch.  Do not send any data if set to TRUE
         */
        disableTelemetry: () => boolean;

        /**
         * Store a copy of a send buffer in the session storage
         */
        enableSessionStorageBuffer: () => boolean;

        /**
         * Disable partial resposne handler (206 response code)
         */
        disablePartialResponseHandler: () => boolean;
    }

    export interface IResponseError {
        index: number;
        statusCode: number;
        message: string;
    }

    export interface IBackendResponse {
        /**
         * Number of items received by the backend
         */
        itemsReceived: number;

        /**
         * Number of items succesfuly accepted by the backend
         */
        itemsAccepted: number;

        /**
         * List of errors for items which were not accepted
         */
        errors: IResponseError[];
    }

    export class Sender {
        /**
         * How many times in a row a retryable error condition has occurred.
         */
        private _consecutiveErrors: number;

        /**
         * The time to retry at in milliseconds from 1970/01/01 (this makes the timer calculation easy).
         */
        private _retryAt: number;

        /**
         * The time of the last send operation.
         */
        private _lastSend: number;

        /**
         * Handle to the timer for delayed sending of batches of data.
         */
        private _timeoutHandle: any;

        /**
         * A send buffer object
         */
        public _buffer: ISendBuffer;

        /**
         * The configuration for this sender instance
         */
        public _config: ISenderConfig;

        /**
         * A method which will cause data to be send to the url
         */

        public _sender: (payload: string[], isAsync: boolean) => void;

        /**
         * Whether XMLHttpRequest object is supported. Older version of IE (8,9) do not support it.
         */
        public _XMLHttpRequestSupported: boolean = false;

        /**
         * Constructs a new instance of the Sender class
         */
        constructor(config: ISenderConfig) {
            this._consecutiveErrors = 0;
            this._retryAt = null;
            this._lastSend = 0;
            this._config = config;
            this._sender = null;
            this._buffer = (Util.canUseSessionStorage() && this._config.enableSessionStorageBuffer())
                ? new SessionStorageSendBuffer(config) : new ArraySendBuffer(config);

            if (typeof XMLHttpRequest != "undefined") {
                var testXhr = new XMLHttpRequest();
                if ("withCredentials" in testXhr) {
                    this._sender = this._xhrSender;
                    this._XMLHttpRequestSupported = true;
                } else if (typeof XDomainRequest !== "undefined") {
                    this._sender = this._xdrSender; //IE 8 and 9
                }
            }
        }

        /**
         * Add a telemetry item to the send buffer
         */
        public send(envelope: Microsoft.ApplicationInsights.IEnvelope) {
            try {
                // if master off switch is set, don't send any data
                if (this._config.disableTelemetry()) {
                    // Do not send/save data
                    return;
                }

                // validate input
                if (!envelope) {
                    _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, new _InternalLogMessage(_InternalMessageId.NONUSRACT_CannotSendEmptyTelemetry, "Cannot send empty telemetry"));
                    return;
                }

                // ensure a sender was constructed
                if (!this._sender) {
                    _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, new _InternalLogMessage(_InternalMessageId.NONUSRACT_SenderNotInitialized, "Sender was not initialized"));
                    return;
                }

                // check if the incoming payload is too large, truncate if necessary
                var payload: string = Serializer.serialize(envelope);

                // flush if we would exceed the max-size limit by adding this item
                var bufferPayload = this._buffer.getItems();
                var batch = this._buffer.batchPayloads(bufferPayload);

                if (batch && (batch.length + payload.length > this._config.maxBatchSizeInBytes())) {
                    this.triggerSend();
                }

                // enqueue the payload
                this._buffer.enqueue(payload);

                // ensure an invocation timeout is set
                this._setupTimer();

                DataLossAnalyzer.incrementItemsQueued();
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL,
                    new _InternalLogMessage(_InternalMessageId.NONUSRACT_FailedAddingTelemetryToBuffer, "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " + Util.getExceptionName(e),
                        { exception: Util.dump(e) }));
            }
        }

        /**
         * Sets up the timer which triggers actually sending the data.
         */
        private _setupTimer() {
            if (!this._timeoutHandle) {
                var retryInterval = this._retryAt ? Math.max(0, this._retryAt - Date.now()) : 0;
                var timerValue = Math.max(this._config.maxBatchInterval(), retryInterval);

                this._timeoutHandle = setTimeout(() => {
                    this.triggerSend();
                }, timerValue);
            }
        }

        /**
         * Gets the size of the list in bytes.
         * @param list {string[]} - The list to get the size in bytes of.
         */
        private _getSizeInBytes(list: string[]) {
            var size = 0;
            if (list && list.length) {
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    if (item && item.length) {
                        size += item.length;
                    }
                }
            }

            return size;
        }

        /**
         * Immediately send buffered data
         * @param async {boolean} - Indicates if the events should be sent asynchronously (Optional, Defaults to true)
         */
        public triggerSend(async?: boolean) {
            // We are async by default
            var isAsync = true;

            // Respect the parameter passed to the func
            if (typeof async === 'boolean') {
                isAsync = async;
            }

            try {
                // Send data only if disableTelemetry is false
                if (!this._config.disableTelemetry()) {

                    if (this._buffer.count() > 0) {
                        var payload = this._buffer.getItems();

                        // invoke send
                        this._sender(payload, isAsync);
                    }

                    // update lastSend time to enable throttling
                    this._lastSend = +new Date;
                } else {
                    this._buffer.clear();
                }

                clearTimeout(this._timeoutHandle);
                this._timeoutHandle = null;
                this._retryAt = null;
            } catch (e) {
                /* Ignore this error for IE under v10 */
                if (!Util.getIEVersion() || Util.getIEVersion() > 9) {
                    _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, new _InternalLogMessage(_InternalMessageId.NONUSRACT_TransmissionFailed, "Telemetry transmission failed, some telemetry will be lost: " + Util.getExceptionName(e),
                        { exception: Util.dump(e) }));
                }
            }
        }

        /** Calculates the time to wait before retrying in case of an error based on
         * http://en.wikipedia.org/wiki/Exponential_backoff
         */
        private _setRetryTime() {
            const SlotDelayInSeconds = 10;
            var delayInSeconds: number;

            if (this._consecutiveErrors <= 1) {
                delayInSeconds = SlotDelayInSeconds;
            } else {
                var backOffSlot = (Math.pow(2, this._consecutiveErrors) - 1) / 2;
                var backOffDelay = Math.floor(Math.random() * backOffSlot * SlotDelayInSeconds) + 1;
                delayInSeconds = Math.max(Math.min(backOffDelay, 3600), SlotDelayInSeconds);
            }

            // TODO: Log the backoff time like the C# version does.
            var retryAfterTimeSpan = Date.now() + (delayInSeconds * 1000);

            // TODO: Log the retry at time like the C# version does.
            this._retryAt = retryAfterTimeSpan;
        }

        /**
         * Parses the response from the backend. 
         * @param response - XMLHttpRequest or XDomainRequest response
         */
        private _parseResponse(response: any): IBackendResponse {
            try {
                var result = JSON.parse(response);

                if (result && result.itemsReceived && result.itemsReceived >= result.itemsAccepted &&
                    result.itemsReceived - result.itemsAccepted == result.errors.length) {
                    return result;
                }
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL,
                    new _InternalLogMessage(_InternalMessageId.NONUSRACT_InvalidBackendResponse, "Cannot parse the response. " + Util.getExceptionName(e)));
            }

            return null;
        }

        /**
         * Send XMLHttpRequest
         * @param payload {string} - The data payload to be sent.
         * @param isAsync {boolean} - Indicates if the request should be sent asynchronously
         */
        private _xhrSender(payload: string[], isAsync: boolean) {
            var xhr = new XMLHttpRequest();
            xhr[AjaxMonitor.DisabledPropertyName] = true;
            xhr.open("POST", this._config.endpointUrl(), isAsync);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => this._xhrReadyStateChange(xhr, payload, payload.length);
            xhr.onerror = (event: ErrorEvent) => this._onError(payload, xhr.responseText || xhr.response || "", event);

            // compose an array of payloads
            var batch = this._buffer.batchPayloads(payload);
            xhr.send(batch);

            this._buffer.markAsSent(payload);
        }

        /**
         * Send XDomainRequest
         * @param payload {string} - The data payload to be sent.
         * @param isAsync {boolean} - Indicates if the request should be sent asynchronously
         * 
         * Note: XDomainRequest does not support sync requests. This 'isAsync' parameter is added
         * to maintain consistency with the xhrSender's contract
         */
        private _xdrSender(payload: string[], isAsync: boolean) {
            var xdr = new XDomainRequest();
            xdr.onload = () => this._xdrOnLoad(xdr, payload);
            xdr.onerror = (event: ErrorEvent) => this._onError(payload, xdr.responseText || "", event);

            // AI is sending all telemetry with HTTPS, but XDomainRequest requires the same scheme as the hosting page
            var endpointUrl = this._config.endpointUrl().replace(/^(https?:)/, "");
            xdr.open('POST', endpointUrl);

            // compose an array of payloads
            var batch = this._buffer.batchPayloads(payload);
            xdr.send(batch);

            this._buffer.markAsSent(payload);
        }

        /**
         * xhr state changes
         */
        public _xhrReadyStateChange(xhr: XMLHttpRequest, payload: string[], countOfItemsInPayload: number) {
            if (xhr.readyState === 4) {
                if ((xhr.status < 200 || xhr.status >= 300) && xhr.status !== 0) {
                    this._onError(payload, xhr.responseText || xhr.response || "");
                } else {
                    if (xhr.status === 206) {
                        var response = this._parseResponse(xhr.responseText || xhr.response);

                        if (response && !this._config.disablePartialResponseHandler()) {
                            this._onPartialSuccess(payload, response);
                        } else {
                            this._onError(payload, xhr.responseText || xhr.response || "");
                        }
                    } else {
                        this._consecutiveErrors = 0;
                        this._onSuccess(payload, countOfItemsInPayload);
                    }
                }
            }
        }

        /**
         * xdr state changes
         */
        public _xdrOnLoad(xdr: XDomainRequest, payload: string[]) {
            if (xdr && (xdr.responseText + "" === "200" || xdr.responseText === "")) {
                this._consecutiveErrors = 0;
                this._onSuccess(payload, 0);
            } else {
                var results = this._parseResponse(xdr.responseText);

                if (results && results.itemsReceived && results.itemsReceived > results.itemsAccepted
                    && !this._config.disablePartialResponseHandler()) {
                    this._onPartialSuccess(payload, results);
                } else {
                    this._onError(payload, xdr && xdr.responseText || "");
                }
            }
        }

        /**
         * partial success handler
         */
        public _onPartialSuccess(payload: string[], results: IBackendResponse) {
            var failed = [];
            var retry = [];

            // Iterate through the reversed array of errors so that splicing doesn't have invalid indexes after the first item.
            var errors = results.errors.reverse();
            for (var error of errors) {
                var extracted = payload.splice(error.index, 1)[0];
                if (error.statusCode == 408 // Timeout
                    || error.statusCode == 429 // Too many requests.
                    || error.statusCode == 500 // Internal server error.
                    || error.statusCode == 503 // Service unavailable.
                ) {
                    retry.push(extracted);
                } else {
                    // All other errors, including: 402 (Monthly quota exceeded) and 439 (Too many requests and refresh cache).
                    failed.push(extracted);
                }
            }

            if (payload.length > 0) {
                this._onSuccess(payload, results.itemsAccepted);
            }

            if (failed.length > 0) {
                this._onError(failed, ['partial success', results.itemsAccepted, 'of', results.itemsReceived].join(' '));
            }

            if (retry.length > 0) {
                for (var item of retry) {
                    this._buffer.enqueue(item);
                }

                this._buffer.clearSent(retry);
                this._consecutiveErrors++;

                // setup timer
                this._setRetryTime();
                this._setupTimer();

                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL,
                    new _InternalLogMessage(_InternalMessageId.NONUSRACT_TransmissionFailed, "Partial success. " +
                        "Delivered: " + payload.length + ", Failed: " + failed.length +
                        ". Will retry to send " + retry.length + " our of " + results.itemsReceived + " items"));
            }
        }

        /**
         * error handler
         */
        public _onError(payload: string[], message: string, event?: ErrorEvent) {
            _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.WARNING,
                new _InternalLogMessage(_InternalMessageId.NONUSRACT_OnError, "Failed to send telemetry.", { message: message }));

            this._buffer.clearSent(payload);
        }

        /**
         * success handler
         */
        public _onSuccess(payload: string[], countOfItemsInPayload: number) {
            DataLossAnalyzer.decrementItemsQueued(countOfItemsInPayload);
            this._buffer.clearSent(payload);
        }
    }

    interface linkedListNode {
        next: linkedListNode;
        payload: string;
    }
}
