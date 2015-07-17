﻿/// <reference path="../Contracts/Generated/PageViewData.ts" />
/// <reference path="./Common/DataSanitizer.ts"/>

module Microsoft.ApplicationInsights.Telemetry {
    "use strict";

    export class PageView extends AI.PageViewData implements ISerializable {

        public static envelopeType = "Microsoft.ApplicationInsights.Pageview";
        public static dataType = "PageviewData";

        public aiDataContract = {
            ver: true,
            name: false,
            url: false,
            duration: false,
            properties: false,
            measurement: false
        }

        /**
         * Constructs a new instance of the PageEventTelemetry object
         */
        constructor(name?: string, url?: string, durationMs?: number, properties?: any, measurements?: any) {
            super();

            this.url = Common.DataSanitizer.sanitizeUrl(url);
            this.name = Common.DataSanitizer.sanitizeString(name || Util.NotSpecified);
            if (!isNaN(durationMs)) {
                this.duration = Util.msToTimeSpan(durationMs);
            }
            this.properties = ApplicationInsights.Telemetry.Common.DataSanitizer.sanitizeProperties(properties);
            this.measurements = ApplicationInsights.Telemetry.Common.DataSanitizer.sanitizeMeasurements(measurements);
        }
    }
}