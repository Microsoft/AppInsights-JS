﻿/// <reference path="telemetrycontext.ts" />
/// <reference path="./Telemetry/Common/Data.ts"/>
/// <reference path="./Util.ts"/>
/// <reference path="./Contracts/Generated/SessionState.ts"/>

module Microsoft.ApplicationInsights {
    "use strict";

    export var Version = "0.15.20150721.4";

    export interface IConfig {
        instrumentationKey: string;
        endpointUrl: string;
        emitLineDelimitedJson: boolean;
        accountId: string;
        appUserId: string;
        sessionRenewalMs: number;
        sessionExpirationMs: number;
        maxBatchSizeInBytes: number;
        maxBatchInterval: number;
        enableDebug: boolean;
        autoCollectErrors: boolean;
        disableTelemetry: boolean;
        verboseLogging: boolean;
        diagnosticLogInterval: number;
    }

    /**
     * The main API that sends telemetry to Application Insights.
     * Learn more: http://go.microsoft.com/fwlink/?LinkID=401493
     */
    export class AppInsights {

        private _eventTracking: Timing;
        private _pageTracking: Timing;

        public config: IConfig;
        public context: TelemetryContext;

        public static defaultConfig: IConfig;

        constructor(config: IConfig) {
            this.config = config || <IConfig>{};

            // load default values if specified
            var defaults: IConfig = AppInsights.defaultConfig;
            if (defaults !== undefined) {
                for (var field in defaults) {
                    // for each unspecified field, set the default value
                    if (this.config[field] === undefined) {
                        this.config[field] = defaults[field];
                    }
                }
            }

            _InternalLogging.verboseLogging = () => this.config.verboseLogging;
            _InternalLogging.enableDebugExceptions = () => this.config.enableDebug;
            var configGetters: ApplicationInsights.ITelemetryConfig = {
                instrumentationKey: () => this.config.instrumentationKey,
                accountId: () => this.config.accountId,
                appUserId: () => this.config.appUserId,
                sessionRenewalMs: () => this.config.sessionRenewalMs,
                sessionExpirationMs: () => this.config.sessionExpirationMs,
                endpointUrl: () => this.config.endpointUrl,
                emitLineDelimitedJson: () => this.config.emitLineDelimitedJson,
                maxBatchSizeInBytes: () => this.config.maxBatchSizeInBytes,
                maxBatchInterval: () => this.config.maxBatchInterval,
                disableTelemetry: () => this.config.disableTelemetry
            }

            this.context = new ApplicationInsights.TelemetryContext(configGetters);
            
            // initialize event timing
            this._eventTracking = new Timing("trackEvent");
            this._eventTracking.action = (name?: string, url?: string, duration?: number, properties?: Object, measurements?: Object) => {
                var event = new Telemetry.Event(name, properties, measurements);
                var data = new ApplicationInsights.Telemetry.Common.Data<ApplicationInsights.Telemetry.Event>(Telemetry.Event.dataType, event);
                var envelope = new Telemetry.Common.Envelope(data, Telemetry.Event.envelopeType);

                this.context.track(envelope);
            }

            // initialize page view timing
            this._pageTracking = new Timing("trackPageView");
            this._pageTracking.action = (name?: string, url?: string, duration?: number, properties?: Object, measurements?: Object) => {
                var pageView = new Telemetry.PageView(name, url, duration, properties, measurements);
                var data = new ApplicationInsights.Telemetry.Common.Data<ApplicationInsights.Telemetry.PageView>(Telemetry.PageView.dataType, pageView);
                var envelope = new Telemetry.Common.Envelope(data, Telemetry.PageView.envelopeType);

                this.context.track(envelope);
            }
        }

        /**
         * Starts timing how long the user views a page or other item. Call this when the page opens. 
         * This method doesn't send any telemetry. Call {@link stopTrackTelemetry} to log the page when it closes.
         * @param   name  A string that idenfities this item, unique within this HTML document. Defaults to the document title.
         */
        public startTrackPage(name?: string) {
            try {
                if (typeof name !== "string") {
                    name = window.document && window.document.title || "";
                }

                this._pageTracking.start(name);
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "startTrackPage failed, page view may not be collected: " + Util.dump(e));
            }
        }

        /**
         * Logs how long a page or other item was visible, after {@link startTrackPage}. Call this when the page closes. 
         * @param   name  The string you used as the name in startTrackPage. Defaults to the document title.
         * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
         * @param   properties  map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        public stopTrackPage(name?: string, url?: string, properties?: Object, measurements?: Object) {
            try {
                if (typeof name !== "string") {
                    name = window.document && window.document.title || "";
                }

                if (typeof url !== "string") {
                    url = window.location && window.location.href || "";
                }

                this._pageTracking.stop(name, url, properties, measurements);
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "stopTrackPage failed, page view will not be collected: " + Util.dump(e));
            }
        }

        /**
         * Logs that a page or other item was viewed. 
         * @param   name  The string you used as the name in startTrackPage. Defaults to the document title.
         * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
         * @param   properties  map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        public trackPageView(name?: string, url?: string, properties?: Object, measurements?: Object) {
            try {
                // ensure we have valid values for the required fields
                if (typeof name !== "string") {
                    name = window.document && window.document.title || "";
                }

                if (typeof url !== "string") {
                    url = window.location && window.location.href || "";
                }

                var durationMs = 0;
                // check if timing data is available
                if (Telemetry.PageViewPerformance.checkPageLoad() !== undefined) {
                    // compute current duration (navigation start to now) for the pageViewTelemetry
                    var startTime = window.performance.timing.navigationStart;
                    durationMs = Telemetry.PageViewPerformance.getDuration(startTime, +new Date);

                    // poll for page load completion and send page view performance data when ready
                    var handle = setInterval(() => {
                        try {
                            // abort this check if we have not finished loading after 1 minute
                            durationMs = Telemetry.PageViewPerformance.getDuration(startTime, +new Date);
                            var timingDataReady = Telemetry.PageViewPerformance.checkPageLoad();
                            var timeoutReached = durationMs > 60000;
                            if (timeoutReached || timingDataReady) {
                                clearInterval(handle);
                                durationMs = Telemetry.PageViewPerformance.getDuration(startTime, +new Date);

                                var pageViewPerformance = new Telemetry.PageViewPerformance(name, url, durationMs, properties, measurements);
                                if (pageViewPerformance.isValid) {
                                    var pageViewPerformanceData = new ApplicationInsights.Telemetry.Common.Data<ApplicationInsights.Telemetry.PageViewPerformance>(
                                        Telemetry.PageViewPerformance.dataType, pageViewPerformance);
                                    var pageViewPerformanceEnvelope = new Telemetry.Common.Envelope(pageViewPerformanceData, Telemetry.PageViewPerformance.envelopeType);
                                    this.context.track(pageViewPerformanceEnvelope);
                                    this.context._sender.triggerSend();
                                }
                            }
                        } catch (e) {
                            _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "trackPageView failed on page load calculation: " + Util.dump(e));
                        }
                    }, 100);
                }

                // track the initial page view
                var pageView = new Telemetry.PageView(name, url, durationMs, properties, measurements);
                var pageViewData = new ApplicationInsights.Telemetry.Common.Data<ApplicationInsights.Telemetry.PageView>(Telemetry.PageView.dataType, pageView);
                var pageViewEnvelope = new Telemetry.Common.Envelope(pageViewData, Telemetry.PageView.envelopeType);

                this.context.track(pageViewEnvelope);
                setTimeout(() => {
                    // fire this event as soon as initial code execution completes in case the user navigates away
                    this.context._sender.triggerSend();
                }, 100);
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "trackPageView failed, page view will not be collected: " + Util.dump(e));
            }
        }

        /**
         * Start timing an extended event. Call {@link stopTrackEvent} to log the event when it ends.
         * @param   name    A string that identifies this event uniquely within the document.
         */
        public startTrackEvent(name: string) {
            try {
                this._eventTracking.start(name);
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "startTrackEvent failed, event will not be collected: " + Util.dump(e));
            }
        }

        /** 
         * Log an extended event that you started timing with {@link startTrackEvent}.
         * @param   name    The string you used to identify this event in startTrackEvent.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        public stopTrackEvent(name: string, properties?: Object, measurements?: Object) {
            try {
                this._eventTracking.stop(name, undefined, properties, measurements);
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "stopTrackEvent failed, event will not be collected: " + Util.dump(e));
            }
        }

        /** 
         * Log a user action or other occurrence.
         * @param   name    A string to identify this event in the portal.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        public trackEvent(name: string, properties?: Object, measurements?: Object) {
            try {
                var eventTelemetry = new Telemetry.Event(name, properties, measurements);
                var data = new ApplicationInsights.Telemetry.Common.Data<ApplicationInsights.Telemetry.Event>(Telemetry.Event.dataType, eventTelemetry);
                var envelope = new Telemetry.Common.Envelope(data, Telemetry.Event.envelopeType);
                this.context.track(envelope);
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "trackEvent failed, event will not be collected: " + Util.dump(e));
            }
        }

        /**
         * Log an exception you have caught.
         * @param   exception   An Error from a catch clause, or the string error message.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        public trackException(exception: Error, handledAt?: string, properties?: Object, measurements?: Object) {
            try {
                if (!Util.isError(exception)) {
                    // ensure that we have an error object (user could pass a string/message)
                    try {
                        throw new Error(<any>exception);
                    } catch (error) {
                        exception = error;
                    }
                }

                var exceptionTelemetry = new Telemetry.Exception(exception, handledAt, properties, measurements);
                var data = new ApplicationInsights.Telemetry.Common.Data<ApplicationInsights.Telemetry.Exception>(Telemetry.Exception.dataType, exceptionTelemetry);
                var envelope = new Telemetry.Common.Envelope(data, Telemetry.Exception.envelopeType);
                this.context.track(envelope);
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "trackException failed, exception will not be collected: " + Util.dump(e));
            }
        }

        /**
         * Log a numeric value that is not associated with a specific event. Typically used to send regular reports of performance indicators.
         * To send a single measurement, use just the first two parameters. If you take measurements very frequently, you can reduce the 
         * telemetry bandwidth by aggregating multiple measurements and sending the resulting average at intervals.
         * @param   name    A string that identifies the metric.
         * @param   average Number representing either a single measurement, or the average of several measurements.
         * @param   sampleCount The number of measurements represented by the average. Defaults to 1.
         * @param   min The smallest measurement in the sample. Defaults to the average.
         * @param   max The largest measurement in the sample. Defaults to the average.
         */
        public trackMetric(name: string, average: number, sampleCount?: number, min?: number, max?: number) {
            try {
                var telemetry = new Telemetry.Metric(name, average, sampleCount, min, max);
                var data = new ApplicationInsights.Telemetry.Common.Data<ApplicationInsights.Telemetry.Metric>(Telemetry.Metric.dataType, telemetry);
                var envelope = new Telemetry.Common.Envelope(data, Telemetry.Metric.envelopeType);

                this.context.track(envelope);
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "trackMetric failed, metric will not be collected: " + Util.dump(e));
            }
        }

        /**
        * Log a diagnostic message. 
        * @param    message A message string 
        * @param   properties  map[string, string] - additional data used to filter traces in the portal. Defaults to empty.
        */
        public trackTrace(message: string, properties?: Object) {
            try {
                var telemetry = new Telemetry.Trace(message, properties);
                var data = new ApplicationInsights.Telemetry.Common.Data<ApplicationInsights.Telemetry.Trace>(Telemetry.Trace.dataType, telemetry);
                var envelope = new Telemetry.Common.Envelope(data, Telemetry.Trace.envelopeType);

                this.context.track(envelope);
            } catch (e) {
                _InternalLogging.warnToConsole("trackTrace failed, trace will not be collected: " + Util.dump(e));
            }
        }

        /**
         * Immediately send all queued telemetry.
         */
        public flush() {
            try {
                this.context._sender.triggerSend();
            } catch (e) {
                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "flush failed, telemetry will not be collected: " + Util.dump(e));
            }
        }

        /**
         * The custom error handler for Application Insights
         * @param {string} message - The error message
         * @param {string} url - The url where the error was raised
         * @param {number} lineNumber - The line number where the error was raised
         * @param {number} columnNumber - The column number for the line where the error was raised
         * @param {Error}  error - The Error object
         */
        public _onerror(message: string, url: string, lineNumber: number, columnNumber: number, error: Error) {
            try {
                var properties = { url : url ? url : document.URL };

                if (Util.isCrossOriginError(message, url, lineNumber, columnNumber, error)) {
                    this.SendCORSException(properties);
                } else {
                    if (!Util.isError(error)) {
                        var stack = "window.onerror@" + properties.url + ":" + lineNumber + ":" + (columnNumber || 0);
                        error = new Error(message);
                        error["stack"] = stack;
                    }
                    this.trackException(error, null, properties);
                }
            } catch (exception) {
                var errorString =
                    error ? (error.name + ", " + error.message) : "null";

                var exceptionDump: string = Util.dump(exception);

                _InternalLogging.throwInternalNonUserActionable(LoggingSeverity.CRITICAL, "_onerror threw " + exceptionDump + " while logging error, error will not be collected: " + errorString);
            }
        }
        
        // In case of CORS exceptions - construct an exception manually.
        // See this for more info: http://stackoverflow.com/questions/5913978/cryptic-script-error-reported-in-javascript-in-chrome-and-firefox        
        private SendCORSException(properties: any) {
            var exceptionData = Microsoft.ApplicationInsights.Telemetry.Exception.CreateSimpleException(
                "Script error.", "Error", "unknown", "unknown",
                "The browser’s same-origin policy prevents us from getting the details of this exception.The exception occurred in a script loaded from an origin different than the web page.For cross- domain error reporting you can use crossorigin attribute together with appropriate CORS HTTP headers.For more information please see http://www.w3.org/TR/cors/.",
                0, null);
            exceptionData.properties = properties;

            var data = new ApplicationInsights.Telemetry.Common.Data<ApplicationInsights.Telemetry.Exception>(Telemetry.Exception.dataType, exceptionData);
            var envelope = new Telemetry.Common.Envelope(data, Telemetry.Exception.envelopeType);
            this.context.track(envelope);
        }
    }

    /**
     * Used to record timed events and page views.
     */
    class Timing {
        private _name;
        private _action: (ITimingDetail, number) => void;
        private _events: {
            [key: string]: number;
        };

        constructor(name: string) {
            this._name = name;
            this._events = {};
        }

        public start(name: string) {
            if (typeof this._events[name] !== "undefined") {
                _InternalLogging.throwInternalUserActionable(
                    LoggingSeverity.WARNING,
                    "start" + this._name + " was called more than once for this event without calling stop" + this._name + ". key is '" + name + "'");
            }

            this._events[name] = +new Date;
        }

        public stop(name: string, url: string, properties?: Object, measurements?: Object) {
            var start = this._events[name];
            if (start) {
                var end = +new Date;
                var duration = Telemetry.PageViewPerformance.getDuration(start, end);
                this.action(name, url, duration, properties, measurements);
            } else {
                _InternalLogging.throwInternalUserActionable(
                    LoggingSeverity.WARNING,
                    "stop" + this._name + " was called without a corresponding start" + this._name + " . Event name is '" + name + "'");
            }

            delete this._events[name];
            this._events[name] = undefined;
        }

        public action: (name?: string, url?: string, duration?: number, properties?: Object, measurements?: Object) => void;
    }
}