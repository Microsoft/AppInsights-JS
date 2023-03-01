// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { initApplicationInsights, trackPageView, unloadApplicationInsights } from "./worker-npm-init";
import { ExampleMessageType, IExampleRequest, IExampleResponse } from "./interfaces/IExampleMessage";
import { IConfiguration, INotificationListener } from "@microsoft/applicationinsights-web";
import { dumpObj, objAssign } from "@nevware21/ts-utils";

/**
 * Default base configuration, add your defaults here.
 * Or simply specify your entire configuration and don't have the main page pass
 * the connection string.
 */
const defaultApplicationInsightsConfig: IConfiguration = {
    
};

/**
 * Simple lookup table which matches the request type to the function that will process the request
 */
const EventHandlers: { [key: number]: (request: IExampleRequest, port: MessagePort) => IExampleResponse } = {
    [ExampleMessageType.Invalid]: workerInvalid,
    [ExampleMessageType.Load]: workerLoadSdk,
    [ExampleMessageType.Unload]: workerUnloadSdk,
    [ExampleMessageType.Fetch]: workerFetch,
    [ExampleMessageType.TrackPageView]: workerTrackPageView
};

/**
 * The main shared worker entry point
 */
addEventListener("connect", (evt: MessageEvent) => {
    const port = evt.ports[0];

    // Add the message listener
    port.addEventListener("message", (evt: MessageEvent<IExampleRequest>) => {
        const request = evt.data;
        if (!request || !request.type) {
            // doesn't look correct
            port.postMessage(workerInvalid(request));
            return;
        }
    
        console.log(`Worker: Received message [${request.type}] from main script`);
        let handler: (request: IExampleRequest, port: MessagePort) => IExampleResponse = EventHandlers[request.type];
        if (!handler) {
            handler = workerInvalid;
        }

        try {
            let response = handler(request, port);
            if (response) {
                port.postMessage(response);
            }
        } catch (e) {
            port.postMessage({
                success: false,
                message: dumpObj(e)
            });
        }
    });

    port.start();
});

/**
 * Handle "Invalid" (Unknown) request
 * @param request
 * @returns
 */
function workerInvalid(request: IExampleRequest) {
    return {
        success: false,
        message: `Unsupported command - ${request ? request.type : "Invalid Request"}`
    }
}

/**
 * Internal hook to listen to the events send notification from the Application Insights Sender
 * @param port
 * @returns
 */
function notificationListener(port: MessagePort): INotificationListener {
    return {
        eventsSendRequest: function () {
            port.postMessage({
                success: true,
                message: `Events Sent: ${dumpObj(arguments)}`
            });
        }
    };
}

/**
 * Initialize the SDK using the passed connection string from the request (if supplied)
 * @param request
 * @param port
 * @returns
 */
function workerLoadSdk(request: IExampleRequest, port: MessagePort) {
    let theConfig = objAssign({}, defaultApplicationInsightsConfig);
    theConfig.connectionString = request.connectionString;
    let appInsights = initApplicationInsights(theConfig);
    if (appInsights && appInsights.core.isInitialized()) {
        appInsights.core.getNotifyMgr().addNotificationListener(notificationListener(port));
        return {
            success: true,
            message: `SDK Loaded and Initialized with - ${appInsights.config.connectionString}`
        };
    }

    return {
        success: true,
        message: "SDK Failed to initialize"
    };
}

/**
 * Unload the SDK instance
 * @param request
 * @returns
 */
function workerUnloadSdk(request: IExampleRequest) {
    if (unloadApplicationInsights()) {
        return {
            success: true,
            message: "SDK Unloading"
        };
    }

    return {
        success: true,
        message: "SDK Already unloaded"
    };
}


/**
 * Perform a "fetch" request for the provided URL
 * @param request
 * @param port
 * @returns
 */
function workerFetch(request: IExampleRequest, port: MessagePort) {
    function fetchFailed(reason: any) {
        port.postMessage({ success: false, message: dumpObj(reason) });
    }

    fetch(request.url).then((value) => {
        value.text().then((theResponse) => {
            port.postMessage({ success: true, resp: theResponse });
        }, fetchFailed);
    }, fetchFailed);

    // Will return message asynchronously
    return {
        success: true,
        message: "Fetch request received"
    };
}

/**
 * Attempt to send a PageView event (if the SDK is initialized)
 * @param request
 * @param port
 * @returns
 */
function workerTrackPageView(request: IExampleRequest, port: MessagePort) {
    return {
        success: trackPageView(),
        message: "TrackPageView requested"
    };
}
