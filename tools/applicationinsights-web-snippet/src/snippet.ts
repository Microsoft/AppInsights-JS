import { Fields, ISnippetConfig } from "./type";
import { IEnvelope } from "@microsoft/applicationinsights-common";
import { IConfiguration, Snippet } from "@microsoft/applicationinsights-web";

(function (win: Window, doc: Document, snipConfig: ISnippetConfig) {
    let locn: Location = win.location;
    let helpLink = "https://go.microsoft.com/fwlink/?linkid=2128109";
    let scriptText = "script";
    let strInstrumentationKey = "instrumentationKey";
    let strIngestionendpoint = "ingestionendpoint";
    let strDisableExceptionTracking = "disableExceptionTracking";
    let strAiDevice = "ai.device.";
    let strAiOperationName = "ai.operation.name";
    let strAiSdkVersion = "ai.internal.sdkVersion";
    let strToLowerCase = "toLowerCase";
    let strConStringIKey = strInstrumentationKey[strToLowerCase]();
    let strEmpty = "";
    let strUndefined = "undefined";
    let strCrossOrigin = "crossOrigin";

    let strPostMethod = "POST";
    let sdkInstanceName = "appInsightsSDK";         // required for Initialization to find the current instance
    let aiName = snipConfig.name || "appInsights";  // provide non default instance name through snipConfig name value
    if (snipConfig.name || win[sdkInstanceName]) {
        // Only set if supplied or another name is defined to avoid polluting the global namespace
        win[sdkInstanceName] = aiName;
    }
    let aiSdk = win[aiName] || (function (aiConfig: IConfiguration) {
        let loadFailed = false;
        let handled = false;
        let appInsights: (Snippet & {initialize:boolean, cookie?:any, core?:any})= {
            initialize: true,   // initialize sdk on download
            queue: [],
            sv: "7",            // Track the actual snippet version for reporting.
            version: 2.0,       // initialization version, if this is not 2.0 the previous scripts fail to initialize
            config: aiConfig
        };
        function isIE() {
            let nav = navigator;
            if (nav) {
                let userAgent = (nav.userAgent || "").toLowerCase();
                return (userAgent.indexOf("msie") !== -1 || userAgent.indexOf("trident/") !== -1);
            }
            return false;
        }
       
        function _parseConnectionString() {
            let fields:Fields = {};
            let connectionString = aiConfig.connectionString;
            if (connectionString) {
                let kvPairs = connectionString.split(";");
                for (let lp = 0; lp < kvPairs.length; lp++) {
                    let kvParts = kvPairs[lp].split("=");
    
                    if (kvParts.length === 2) { // only save fields with valid formats
                        fields[kvParts[0][strToLowerCase]()] = kvParts[1];
                    }
                }
            }

            // apply the default endpoints
            if (!fields[strIngestionendpoint]) {
                // use endpoint suffix where overrides are not provided
                let endpointSuffix = fields.endpointsuffix;
                // Only fetch the location if a suffix was supplied
                let fLocation = endpointSuffix ? fields.location : null;
                fields[strIngestionendpoint] = "https://" + (fLocation ? fLocation + "." : strEmpty) + "dc." + (endpointSuffix || "services.visualstudio.com");
            }

            return fields;
        }

        function _sendEvents(evts:IEnvelope[], endpointUrl?:any) {
            if (JSON) {
                let sender = win.fetch;
                if (sender && !snipConfig.useXhr) {
                    sender(endpointUrl, { method:strPostMethod, body: JSON.stringify(evts), mode:"cors"});
                } else if (XMLHttpRequest) {
                    // IE doesn't support fetch and private clouds may only be using IE
                    let xhr = new XMLHttpRequest();
                    xhr.open(strPostMethod, endpointUrl);
                    xhr.setRequestHeader("Content-type", "application/json");
                    xhr.send(JSON.stringify(evts));
                }
            }
        }

        function _reportFailure(targetSrc:string) {
            let conString = _parseConnectionString();
            let iKey = conString[strConStringIKey] || aiConfig[strInstrumentationKey] || strEmpty;
            let ingest = conString[strIngestionendpoint];
            let endpointUrl = ingest ? ingest + "/v2/track" : aiConfig.endpointUrl; // only add /v2/track when from connectionstring

            let message = "SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details)";
            let evts:IEnvelope[] = [];
            evts.push(_createException(iKey, message, targetSrc, endpointUrl));
            evts.push(_createInternal(iKey, message, targetSrc, endpointUrl));

            _sendEvents(evts, endpointUrl);
        }

        // Gets the time as an ISO date format, using a function as IE7/8 doesn't support toISOString
        function _getTime() {
            let date = new Date();
            function pad(num: Number) {
                let r = strEmpty + num;
                if (r.length === 1) {
                    r = "0" + r;
                }

                return r;
            }

            return date.getUTCFullYear()
                + "-" + pad(date.getUTCMonth() + 1)
                + "-" + pad(date.getUTCDate())
                + "T" + pad(date.getUTCHours())
                + ":" + pad(date.getUTCMinutes())
                + ":" + pad(date.getUTCSeconds())
                + "." + String((date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5)
                + "Z";
        }

        function _createEnvelope(iKey:string, theType:string) {
            let tags = {};
            let type = "Browser";
            tags[strAiDevice + "id"] = type[strToLowerCase]();
            tags[strAiDevice + "type"] = type;
            tags[strAiOperationName] = locn && locn.pathname || "_unknown_";
            tags[strAiSdkVersion] = "javascript:snippet_" + (appInsights.sv || appInsights.version);

            let envelope:IEnvelope = {
                time: _getTime(),
                iKey: iKey,
                name: "Microsoft.ApplicationInsights." + iKey.replace(/-/g, strEmpty) + "." + theType,
                sampleRate: 100,
                tags: tags,
                data: {
                    baseData: {
                        ver: 2
                    }
                },
                ver: 4.0,
                seq: "1",
                aiDataContract: undefined
            };

            return envelope;
        }

        function _createInternal(iKey:string, message:string, targetSrc:string, endpointUrl:any) {
            let envelope : IEnvelope = _createEnvelope(iKey, "Message");
            let data = envelope.data;
            data.baseType = "MessageData";
            let baseData = data.baseData;

            baseData.message = "AI (Internal): 99 message:\"" + (message + " (" + targetSrc + ")").replace(/\"/g, strEmpty) + "\"";
            baseData.properties = {
                endpoint: endpointUrl
            };
            
            return envelope;
        }

        function _createException(iKey:string, message:string, targetSrc:string, endpointUrl:any) {
            let envelope : IEnvelope = _createEnvelope(iKey, "Exception");
            let data = envelope.data;
            data.baseType = "ExceptionData";
            data.baseData.exceptions = [{
                typeName: "SDKLoadFailed",
                message: message.replace(/\./g, "-"),  // Replacing '.' characters as it causes the portal to hide the start of the message in the summary
                hasFullStack: false,
                stack: message + "\nSnippet failed to load [" + targetSrc + "] -- Telemetry is disabled\nHelp Link: " + helpLink + "\nHost: " + (locn && locn.pathname || "_unknown_") + "\nEndpoint: " + endpointUrl,
                parsedStack: []
            }];

            return envelope;
        }
    
        // Assigning these to local variables allows them to be minified to save space:
        let targetSrc : string = (aiConfig as any)["url"] || snipConfig.src
        if (targetSrc) {
            if (isIE() && targetSrc.indexOf("ai.3") !== -1) {
                // This regex matches any URL which contains "\ai.3." but not any full versions like "\ai.3.1" etc
                targetSrc = targetSrc.replace(/(\/)(ai\.3\.)([^\d]*)$/, function(_all, g1, g2) {
                    return g1 + "ai.2" + g2;
                });
                // let message = "Load Version 2 SDK instead to support IE"; // where to report this error?
            }
            const _handleError = (evt?: any) => {
                loadFailed = true;
                appInsights.queue = []; // Clear the queue
                if (!handled) {
                    handled = true;
                    _reportFailure(targetSrc);
                }
            }

            const _handleLoad = (evt?: any, isAbort?:any) => {
                if (!handled) {
                    // IE10, Opera calls loaded before the script is processed.
                    // so delaying to give the script a chance to be processed
                    setTimeout(function() {
                        if (isAbort || !appInsights.core) {
                            _handleError();
                        }
                    }, 500);
                }
            }

            const _createScript = () => {
                let scriptElement : HTMLElement = doc.createElement(scriptText);
                (scriptElement as any)["src"] = targetSrc;
                // Allocate Cross origin only if defined and available
                let crossOrigin = snipConfig[strCrossOrigin];
                if ((crossOrigin || crossOrigin === "") && scriptElement[strCrossOrigin] != strUndefined) {
                    scriptElement[strCrossOrigin] = crossOrigin;
                }
                scriptElement.onload = _handleLoad;
                scriptElement.onerror = _handleError;
                // Some browsers support onload while others onreadystatechange and others both
                (scriptElement as any)["onreadystatechange"] = function (evt?:any, isAbort?:any) {
                    if ((scriptElement as any)["readyState"] === "loaded" || (scriptElement as any)["readyState"]  === "complete") {
                        _handleLoad(evt, isAbort);
                    }
                };

                return scriptElement;
            }

            let theScript = _createScript();
            if (snipConfig.ld && snipConfig.ld < 0) {
                // if user wants to append tag to document head, blocking page load
                let headNode = doc.getElementsByTagName("head")[0];
                headNode.appendChild(theScript);
            } else {
                setTimeout(function () {
                    // Attempts to place the script tag in the same location as the first script on the page
                    doc.getElementsByTagName(scriptText)[0].parentNode.appendChild(theScript);
                }, snipConfig.ld || 0);
            }
        }
    
        // capture initial cookie
        try {
            appInsights.cookie = doc.cookie;
        } catch (e) {
            // eslint-disable-next-line no-empty
        }
    
        function _createMethods(methods:any[]) {
            while (methods.length) {
                (function (name) {
                    // Define a temporary method that queues-up a the real method call
                    appInsights[name] = function () {
                        // Capture the original arguments passed to the method
                        let originalArguments = arguments;
                        if (!loadFailed) { // If we have detected that the main script failed to load then stop queuing events that will never be processed
                            // Queue-up a call to the real method
                            appInsights.queue.push(function () {
                                // Invoke the real method with the captured original arguments
                                appInsights[name].apply(appInsights, originalArguments);
                            });
                        }
                    };
                })(methods.pop());
            }
        }

        let track = "track";
        let trackPage = "TrackPage";
        let trackEvent = "TrackEvent";
        _createMethods([track + "Event",
            track + "PageView",
            track + "Exception",
            track + "Trace",
            track + "DependencyData",
            track + "Metric",
            track + "PageViewPerformance",
            "start" + trackPage,
            "stop" + trackPage,
            "start" + trackEvent,
            "stop" + trackEvent,
            "addTelemetryInitializer",
            "setAuthenticatedUserContext",
            "clearAuthenticatedUserContext",
            "flush"]);
    
        // expose SeverityLevel enum
        appInsights["SeverityLevel"] = {
            Verbose : 0,
            Information : 1,
            Warning : 2,
            Error : 3,
            Critical : 4
        };
    
        // Collect global errors
        // Note: ApplicationInsightsAnalytics is the extension string identifier for
        //  AppAnalytics. It is defined in ApplicationInsights.ts:ApplicationInsights.identifer
        let analyticsCfg = ((aiConfig.extensionConfig || {}).ApplicationInsightsAnalytics ||{});
        if (!(aiConfig[strDisableExceptionTracking] === true || analyticsCfg[strDisableExceptionTracking] === true)) {
            let method = "onerror";
            _createMethods(["_" + method]);
            let originalOnError = win[method];
            win[method] = function(message:string, url:string, lineNumber:Number, columnNumber:Number, error?:any) {
                let handled = originalOnError && originalOnError(message, url, lineNumber, columnNumber, error);
                if (handled !== true) {
                    appInsights["_" + method]({
                        message: message,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber,
                        error: error,
                        evt: win.event
                    });
                }
    
                return handled;
            };
            aiConfig["autoExceptionInstrumented"] = true;
        }
    
        return appInsights;
    })(snipConfig.cfg);

    // global instance must be set in this order to mitigate issues in ie8 and lower
    win[aiName] = aiSdk;
    
    function _onInit() {
        if (snipConfig.onInit) {
            snipConfig.onInit(aiSdk);
        }
    }

    // if somebody calls the snippet twice, don't report page view again
    if (aiSdk.queue && aiSdk.queue.length === 0) {
        aiSdk.queue.push(_onInit);
        aiSdk.trackPageView({});
    } else {
        // Already loaded so just call the onInit
        _onInit();
    }
})(window, document, {
    src: "https://js.monitor.azure.com/scripts/b/ai.2.min.js", // The SDK URL Source
    // name: "appInsights", // Global SDK Instance name defaults to "appInsights" when not supplied
    // ld: 0, // Defines the load delay (in ms) before attempting to load the sdk. -1 = block page load and add to head. (default) = 0ms load after timeout,
    // useXhr: 1, // Use XHR instead of fetch to report failures (if available),
    crossOrigin: "anonymous", // When supplied this will add the provided value as the cross origin attribute on the script tag
    // onInit: null, // Once the application insights instance has loaded and initialized this callback function will be called with 1 argument -- the sdk instance (DO NOT ADD anything to the sdk.queue -- As they won't get called)
    cfg: { // Application Insights Configuration
        connectionString: "YOUR_CONNECTION_STRING"
    }
});
