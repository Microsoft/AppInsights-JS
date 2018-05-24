﻿import { EventData } from '../../JavaScriptSDK.Interfaces/Contracts/Generated/EventData';
import { ISerializable } from '../../JavaScriptSDK.Interfaces/Telemetry/ISerializable';
import { DataSanitizer } from './Common/DataSanitizer';
import { FieldType } from '../Serializer';
import { Util } from 'applicationinsights-common';

export class Event extends EventData implements ISerializable {

    public static envelopeType = "Microsoft.ApplicationInsights.{0}.Event";
    public static dataType = "EventData";

    public aiDataContract = {
        ver: FieldType.Required,
        name: FieldType.Required,
        properties: FieldType.Default,
        measurements: FieldType.Default
    }

    /**
     * Constructs a new instance of the EventTelemetry object
     */
    constructor(name: string, properties?: any, measurements?: any) {

        super();

        this.name = DataSanitizer.sanitizeString(name) || Util.NotSpecified;
        this.properties = DataSanitizer.sanitizeProperties(properties);
        this.measurements = DataSanitizer.sanitizeMeasurements(measurements);
    }
}