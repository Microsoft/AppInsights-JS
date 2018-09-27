import { IPageViewTelemetry } from './IPageViewTelemetry';
import { IExceptionTelemetry } from './IExceptionTelemetry';
import { IAutoExceptionTelemetry } from './IExceptionTelemetry'
import { ITraceTelemetry } from './ITraceTelemetry';
import { IMetricTelemetry } from './IMetricTelemetry';
import { ITelemetryItem } from 'applicationinsights-core-js';

export interface IAppInsights {
    trackPageView(pageView: IPageViewTelemetry, customProperties?: { [key: string]: any });
    trackException(exception: IExceptionTelemetry, customProperties?: {[key: string]: any}): void;
    _onerror(exception: IAutoExceptionTelemetry): void;
    trackTrace(trace: ITraceTelemetry, customProperties?: {[key: string]: any}): void;
    trackMetric(metric: IMetricTelemetry, customProperties?: {[key: string]: any}): void;
    startTrackPage(name?: string);
    stopTrackPage(name?: string, url?: string, customProperties?: Object);
    addTelemetryInitializer(telemetryInitializer: (item: ITelemetryItem) => boolean | void);
}
