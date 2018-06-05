import { IEnvelope } from '../coreSDK/JavaScriptSDK.Interfaces/Telemetry/IEnvelope';
import { Data } from '../coreSDK/JavaScriptSDK/Telemetry/Common/Data';
import { Envelope } from '../coreSDK/JavaScriptSDK/Telemetry/Common/Envelope';
import { RemoteDependencyData } from '../coreSDK/JavaScriptSDK/Telemetry/RemoteDependencyData';
import { Event } from '../coreSDK/JavaScriptSDK/Telemetry/Event';
import { Exception } from '../coreSDK/JavaScriptSDK/Telemetry/Exception';
import { Metric } from '../coreSDK/JavaScriptSDK/Telemetry/Metric';
import { PageView } from '../coreSDK/JavaScriptSDK/Telemetry/PageView';
import { PageViewPerformance } from '../coreSDK/JavaScriptSDK/Telemetry/PageViewPerformance';
import { Trace } from '../coreSDK/JavaScriptSDK/Telemetry/Trace';
import { ITelemetryItem } from '../coreSDK/JavaScriptSDK.Interfaces/ITelemetryItem';

export abstract class EnvelopeCreator {
    abstract Create(telemetryItem: ITelemetryItem): IEnvelope;

    protected static extractMeasurements(properties: { [key: string]: any }): { [key: string]: any } {
        let customMeasurements: { [key: string]: any } = null;
        for (let key in properties) {
            if (properties.hasOwnProperty(key)) {
                let value = properties[key];
                if (value instanceof Number) {
                    if (!customMeasurements) {
                        customMeasurements = {};
                    }
                    customMeasurements[key] = value;
                }
            }
        }

        return customMeasurements;
    }

    protected static createEnvelope<T>(envelopeType: string, telemetryItem: ITelemetryItem, data: Data<T>): IEnvelope {
        let envelope = new Envelope(data, Event.envelopeType);
        envelope.iKey = telemetryItem.instrumentationKey;
        let iKeyNoDashes = telemetryItem.instrumentationKey.replace(/-/g, "");
        envelope.name = envelope.name.replace("{0}", iKeyNoDashes);

        // loop through the envelope systemProperties and pick out the ones that should go in tags
        for (let key in telemetryItem.sytemProperties) {
            if (telemetryItem.sytemProperties.hasOwnProperty(key)) {
                if (/*this key exists in the whitelist of ContextTagKeys*/ true) {// todo barustum
                    envelope.tags[key] = telemetryItem.sytemProperties[key];
                }
            }
        }

        return envelope;
    }
}

export class DependencyEnvelopeCreator extends EnvelopeCreator {
    static DependencyEnvelopeCreator = new DependencyEnvelopeCreator();

    Create(telemetryItem: ITelemetryItem): IEnvelope {
        let customMeasurements = EnvelopeCreator.extractMeasurements(telemetryItem.customProperties);
        let id = telemetryItem.domainProperties["id"];
        let absoluteUrl = telemetryItem.domainProperties["absoluteUrl"];
        let command = telemetryItem.domainProperties["command"];
        let totalTime = telemetryItem.domainProperties["totalTime"];
        let success = telemetryItem.domainProperties["success"];
        let resultCode = telemetryItem.domainProperties["resultCode"];
        let method = telemetryItem.domainProperties["method"];
        let baseData = new RemoteDependencyData(id, absoluteUrl, command, totalTime, success, resultCode, method, telemetryItem.customProperties, customMeasurements);
        let data = new Data<RemoteDependencyData>(RemoteDependencyData.dataType, baseData);
        return EnvelopeCreator.createEnvelope<RemoteDependencyData>(RemoteDependencyData.envelopeType, telemetryItem, data);
    }
}

export class EventEnvelopeCreator extends EnvelopeCreator {
    static EventEnvelopeCreator = new EventEnvelopeCreator();

    Create(telemetryItem: ITelemetryItem): IEnvelope {
        let customMeasurements = EnvelopeCreator.extractMeasurements(telemetryItem.customProperties);
        let eventName = telemetryItem.domainProperties["name"];
        let baseData = new Event(eventName, telemetryItem.customProperties, customMeasurements);
        let data = new Data<Event>(Event.dataType, baseData);
        return EnvelopeCreator.createEnvelope<Event>(Event.envelopeType, telemetryItem, data);
    }
}

export class ExceptionEnvelopeCreator extends EnvelopeCreator {
    static ExceptionEnvelopeCreator = new ExceptionEnvelopeCreator();

    Create(telemetryItem: ITelemetryItem): IEnvelope {
        let customMeasurements = EnvelopeCreator.extractMeasurements(telemetryItem.customProperties);
        let exception = telemetryItem.domainProperties["exception"];
        let severityLevel = telemetryItem.domainProperties["severityLevel"];
        let baseData = new Exception(exception, telemetryItem.customProperties, customMeasurements, severityLevel);
        let data = new Data<Exception>(Exception.dataType, baseData);
        return EnvelopeCreator.createEnvelope<Exception>(Exception.envelopeType, telemetryItem, data);
    }
}

export class MetricEnvelopeCreator extends EnvelopeCreator {
    static MetricEnvelopeCreator = new MetricEnvelopeCreator();

    Create(telemetryItem: ITelemetryItem): IEnvelope {
        let name = telemetryItem.domainProperties["name"];
        let average = telemetryItem.domainProperties["average"];
        let sampleCount = telemetryItem.domainProperties["sampleCount"];
        let min = telemetryItem.domainProperties["min"];
        let max = telemetryItem.domainProperties["max"];
        let baseData = new Metric(name, average, sampleCount, min, max, telemetryItem.customProperties);
        let data = new Data<Metric>(Metric.dataType, baseData);
        return EnvelopeCreator.createEnvelope<Metric>(Metric.envelopeType, telemetryItem, data);
    }
}

export class PageViewEnvelopeCreator extends EnvelopeCreator {
    static PageViewEnvelopeCreator = new PageViewEnvelopeCreator();

    Create(telemetryItem: ITelemetryItem): IEnvelope {
        let customMeasurements = EnvelopeCreator.extractMeasurements(telemetryItem.customProperties);
        let name = telemetryItem.domainProperties["name"];
        let url = telemetryItem.domainProperties["url"];
        let duration = telemetryItem.domainProperties["duration"];
        let baseData = new PageView(name, url, duration, telemetryItem.customProperties, customMeasurements);
        let data = new Data<PageView>(PageView.dataType, baseData);
        return EnvelopeCreator.createEnvelope<PageView>(PageView.envelopeType, telemetryItem, data);
    }
}

export class PageViewPerformanceEnvelopeCreator extends EnvelopeCreator {
    static PageViewPerformanceEnvelopeCreator = new PageViewPerformanceEnvelopeCreator();

    Create(telemetryItem: ITelemetryItem): IEnvelope {
        let customMeasurements = EnvelopeCreator.extractMeasurements(telemetryItem.customProperties);
        let name = telemetryItem.domainProperties["name"];
        let url = telemetryItem.domainProperties["url"];
        let duration = telemetryItem.domainProperties["duration"];
        let baseData = new PageViewPerformance(name, url, duration, telemetryItem.customProperties, customMeasurements);
        let data = new Data<PageViewPerformance>(PageViewPerformance.dataType, baseData);
        return EnvelopeCreator.createEnvelope<PageViewPerformance>(PageViewPerformance.envelopeType, telemetryItem, data);
    }
}

export class TraceEnvelopeCreator extends EnvelopeCreator {
    static TraceEnvelopeCreator = new TraceEnvelopeCreator();

    Create(telemetryItem: ITelemetryItem): IEnvelope {
        let message = telemetryItem.domainProperties["message"];
        let severityLevel = telemetryItem.domainProperties["severityLevel"];
        let baseData = new Trace(message, telemetryItem.customProperties, severityLevel);
        let data = new Data<Trace>(Trace.dataType, baseData);
        return EnvelopeCreator.createEnvelope<Trace>(Trace.envelopeType, telemetryItem, data);
    }
}