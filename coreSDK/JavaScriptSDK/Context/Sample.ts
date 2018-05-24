﻿import { SamplingScoreGenerator } from '../SamplingScoreGenerator';
import { Envelope } from '../../JavaScriptSDK.Interfaces/Contracts/Generated/Envelope';
import { ISample } from '../../JavaScriptSDK.Interfaces/Context/ISample';
import { IEnvelope } from '../../JavaScriptSDK.Interfaces/Telemetry/IEnvelope';
import { _InternalLogging, _InternalMessageId, LoggingSeverity } from 'applicationinsights-common';

export class Sample implements ISample {
    public sampleRate: number;
    private samplingScoreGenerator: SamplingScoreGenerator;

    // We're using 32 bit math, hence max value is (2^31 - 1)
    public INT_MAX_VALUE: number = 2147483647;

    constructor(sampleRate: number) {
        if (sampleRate > 100 || sampleRate < 0) {
            _InternalLogging.throwInternal(LoggingSeverity.WARNING,
                _InternalMessageId.SampleRateOutOfRange,
                "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.",
                { samplingRate: sampleRate }, true);
            this.sampleRate = 100;
        }

        this.sampleRate = sampleRate;
        this.samplingScoreGenerator = new SamplingScoreGenerator();
    }

    /**
    * Determines if an envelope is sampled in (i.e. will be sent) or not (i.e. will be dropped).
    */
    public isSampledIn(envelope: IEnvelope): boolean {
        if (this.sampleRate == 100) return true;

        var score = this.samplingScoreGenerator.getSamplingScore(envelope);

        return score < this.sampleRate;
    }
}