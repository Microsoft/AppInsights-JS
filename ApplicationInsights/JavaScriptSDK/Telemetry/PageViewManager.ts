﻿import {
    PageViewData, PageViewPerformance,
    _InternalLogging, LoggingSeverity,
    _InternalMessageId, Util, IChannelControlsAI
} from 'applicationinsights-common';
import { IAppInsightsCore } from 'applicationinsights-core-js';

/**
* Internal interface to pass appInsights object to subcomponents without coupling 
*/
export interface IAppInsightsInternal {
    sendPageViewInternal(name?: string, url?: string, duration?: number, properties?: Object, measurements?: Object);
    sendPageViewPerformanceInternal(pageViewPerformance: PageViewPerformance);
}


/**
* Class encapsulates sending page views and page view performance telemetry.
*/
export class PageViewManager {
    private pageViewPerformanceSent: boolean = false;

    private overridePageViewDuration: boolean = false;

    private appInsights: IAppInsightsInternal;
    private _channel: IChannelControlsAI;

    constructor(
        appInsights: IAppInsightsInternal,
        overridePageViewDuration: boolean, core: IAppInsightsCore) {
        this.overridePageViewDuration = overridePageViewDuration;
        this.appInsights = appInsights;
        if (core) {
            this._channel = <IChannelControlsAI>(core.getTransmissionControl());
        }

    }

    /**
    * Currently supported cases:
    * 1) (default case) track page view called with default parameters, overridePageViewDuration = false. Page view is sent with page view performance when navigation timing data is available.
    *    If navigation timing is not supported then page view is sent right away with undefined duration. Page view performance is not sent.
    * 2) overridePageViewDuration = true, custom duration provided. Custom duration is used, page view sends right away.
    * 3) overridePageViewDuration = true. Page view is sent right away, duration is time spent from page load till now (or undefined if navigation timing is not supported). 
    * 4) overridePageViewDuration = false, custom duration is provided. Page view is sent right away with custom duration. 
    *
    * In all cases page view performance is sent once (only for the 1st call of trackPageView), or not sent if navigation timing is not supported.
    */
    public trackPageView(name?: string, url?: string, properties?: Object, measurements?: Object, duration?: number) {
        // ensure we have valid values for the required fields
        if (typeof name !== "string") {
            name = window.document && window.document.title || "";
        }

        if (typeof url !== "string") {
            url = window.location && window.location.href || "";
        }


        // if performance timing is not supported by the browser, send the page view telemetry with the duration provided by the user. If the user
        // do not provide the duration, set duration to undefined
        if (!PageViewPerformance.isPerformanceTimingSupported()) {
            this.appInsights.sendPageViewInternal(
                name,
                url,
                !isNaN(duration) ? duration : undefined,
                properties,
                measurements);
            this._channel.flush();

            // no navigation timing (IE 8, iOS Safari 8.4, Opera Mini 8 - see http://caniuse.com/#feat=nav-timing)
            _InternalLogging.throwInternal(
                LoggingSeverity.WARNING,
                _InternalMessageId.NavigationTimingNotSupported,
                "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info.");

            return;
        }

        var pageViewSent = false;
        var customDuration = undefined;

        // if the performance timing is supported by the browser, calculate the custom duration
        var start = PageViewPerformance.getPerformanceTiming().navigationStart;
        customDuration = PageViewPerformance.getDuration(start, +new Date);
        if (!PageViewPerformance.shouldCollectDuration(customDuration)) {
            customDuration = undefined;
        }

        // if the user has provided duration, send a page view telemetry with the provided duration. Otherwise, if
        // overridePageViewDuration is set to true, send a page view telemetry with the custom duration calculated earlier
        if (this.overridePageViewDuration || !isNaN(duration)) {
            this.appInsights.sendPageViewInternal(
                name,
                url,
                !isNaN(duration) ? duration : customDuration,
                properties,
                measurements);
            this._channel.flush();
            pageViewSent = true;
        }

        // now try to send the page view performance telemetry
        var maxDurationLimit = 60000;
        var handle = setInterval(() => {
            try {
                if (PageViewPerformance.isPerformanceTimingDataReady()) {
                    clearInterval(handle);
                    var pageViewPerformance = new PageViewPerformance(name, url, null, properties, measurements);

                    if (!pageViewPerformance.getIsValid() && !pageViewSent) {
                        // If navigation timing gives invalid numbers, then go back to "override page view duration" mode.
                        // That's the best value we can get that makes sense.
                        this.appInsights.sendPageViewInternal(
                            name, 
                            url, 
                            customDuration, 
                            properties, 
                            measurements);
                        this._channel.flush();
                    } else {
                        if (!pageViewSent) {
                            this.appInsights.sendPageViewInternal(
                                name, 
                                url, 
                                pageViewPerformance.getDurationMs(), 
                                properties, 
                                measurements);
                        }

                        if (!this.pageViewPerformanceSent) {
                            this.appInsights.sendPageViewPerformanceInternal(pageViewPerformance);
                            this.pageViewPerformanceSent = true;
                        }
                        this._channel.flush();
                    }
                } else if (PageViewPerformance.getDuration(start, +new Date) > maxDurationLimit) {
                    // if performance timings are not ready but we exceeded the maximum duration limit, just log a page view telemetry
                    // with the maximum duration limit. Otherwise, keep waiting until performance timings are ready
                    clearInterval(handle);
                    if (!pageViewSent) {
                        this.appInsights.sendPageViewInternal(
                            name, 
                            url, 
                            maxDurationLimit, 
                            properties, 
                            measurements);
                        this._channel.flush();
                    }
                }
            } catch (e) {
                _InternalLogging.throwInternal(
                    LoggingSeverity.CRITICAL,
                    _InternalMessageId.TrackPVFailedCalc,
                    "trackPageView failed on page load calculation: " + Util.getExceptionName(e),
                    { exception: Util.dump(e) });
            }
        }, 100);
    }
}
