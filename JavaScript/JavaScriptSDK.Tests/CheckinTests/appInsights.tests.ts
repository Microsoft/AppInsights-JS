﻿/// <reference path="..\TestFramework\Common.ts" />
/// <reference path="../../JavaScriptSDK/appInsights.ts" />
/// <reference path="../../JavaScriptSDK/Util.ts"/>

class AppInsightsTests extends TestClass {
    private getAppInsightsSnippet() {
        var snippet: Microsoft.ApplicationInsights.IConfig = {
            instrumentationKey: "",
            endpointUrl: "//dc.services.visualstudio.com/v2/track",
            emitLineDelimitedJson: false,
            accountId: undefined,
            appUserId: undefined,
            sessionRenewalMs: 10,
            sessionExpirationMs: 10,
            maxBatchSizeInBytes: 1000000,
            maxBatchInterval: 1,
            enableDebug: false,
            autoCollectErrors: false,
            disableTelemetry: false,
            verboseLogging: false,
            diagnosticLogInterval: 1000,
            autoTrackPageVisitTime: false,
            samplingPercentage: 100
        };

        // set default values
        return snippet;
    }

    public testInitialize() {
        this.clock.reset();
        Microsoft.ApplicationInsights.Util.setCookie('ai_session', "");
        Microsoft.ApplicationInsights.Util.setCookie('ai_user', "");
        if (window.localStorage) {
            window.localStorage.clear();
    }
    }

    public testCleanup() {
        this.clock.reset();
        Microsoft.ApplicationInsights.Util.setCookie('ai_session', "");
        Microsoft.ApplicationInsights.Util.setCookie('ai_user', "");
        if (window.localStorage) {
            window.localStorage.clear();
    }
    }

    public registerTests() {

        this.testCase({
            name: "AppInsightsTests: public members are correct",
            test: () => {
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                var leTest = (name) => {
                    Assert.ok(name in appInsights, name + " exists");
                }

                var members = ["context"];
                while (members.length) {
                    leTest(members.pop());
                }
            }
        });

        this.testCase({
            name: "AppInsightsTests: public methods are correct",
            test: () => {
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                var leTest = (name) => {
                    Assert.ok(name in appInsights, name + " exists");
                    Assert.ok(typeof appInsights[name] === "function", name + " is a method");
                }

                var methods = ["trackTrace", "trackEvent", "trackMetric", "trackException", "trackPageView"];
                while (methods.length) {
                    leTest(methods.pop());
                }
            }
        });

        this.testCase({
            name: "AppInsightsTests: master off switch can disable sending data",
            test: () => {
                // setup
                var config = this.getAppInsightsSnippet();
                config.disableTelemetry = true;
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(config);
                appInsights.context._sender._sender = () => null;
                var senderStub = sinon.stub(appInsights.context._sender, "_sender",() => {
                    console.log("GOT HERE");
                });
                
                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    Assert.ok(senderStub.notCalled, "sender was not called called for: " + action);
                    senderStub.restore();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                senderStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: track page view performance",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // act
                appInsights.trackPageView();

                // act
                this.clock.tick(100);

                // verify
                Assert.ok(trackStub.calledTwice, "track was called");

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: start and stop session events have correct time",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                var trackStub = sinon.stub(appInsights.context._sender, "send");
                
                // act
                this.clock.tick(1);
                appInsights.trackEvent("first event");

                // verify
                Assert.ok(trackStub.calledTwice, "track was called for event and session start");
                var sessionStartEnvelope1 = <Microsoft.Telemetry.Envelope>trackStub.args[0][0];
                Assert.equal(1, +new Date(sessionStartEnvelope1.time), "first session start time");
                
                // act
                this.clock.tick(2); // now "3"
                appInsights.trackEvent("first event"); // session event is not generated but session end should have this time
                this.clock.tick(appInsights.config.sessionRenewalMs * 2); // now "23"
                appInsights.trackEvent("second event"); // this will generate session end and start

                // verify
                Assert.equal(6, trackStub.callCount, "track was called for event, session end and session start");
                var sessionStopEnvelope2 = <Microsoft.Telemetry.Envelope>trackStub.args[3][0];
                var sessionStartEnvelope2 = <Microsoft.Telemetry.Envelope>trackStub.args[4][0];
                Assert.equal(3, +new Date(sessionStopEnvelope2.time), "session end time");
                Assert.equal(3 + appInsights.config.sessionRenewalMs * 2, +new Date(sessionStartEnvelope2.time), "second session start time");
                

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: envelope type, data type and ikey are correct",
            test: () => {
                // setup
                var config = this.getAppInsightsSnippet();
                config.instrumentationKey = "12345";
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(config);
                appInsights.context._sessionManager._sessionHandler = null;
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action, expectedEnvelopeType, expectedDataType) => {
                    action();
                    var envelope = this.getFirstResult(action, trackStub);
                    Assert.equal("12345", envelope.iKey, "envelope iKey");
                    Assert.equal(expectedEnvelopeType, envelope.name, "envelope name");
                    Assert.equal(expectedDataType, envelope.data.baseType, "type name");
                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"), Microsoft.ApplicationInsights.Telemetry.Event.envelopeType, Microsoft.ApplicationInsights.Telemetry.Event.dataType);

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: envelope time is correct",
            test: () => {
                // setup
                var config = this.getAppInsightsSnippet();
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(config);
                appInsights.context._sessionManager._sessionHandler = null;
                var trackStub = sinon.stub(appInsights.context._sender, "send");
                this.clock.tick(60000);

                // act 
                appInsights.trackEvent("testEvent");

                // verify
                var envelope = this.getFirstResult("track was called", trackStub);
                Assert.equal(60000, new Date(envelope.time).getTime(), "envelope time");
                
                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: application context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                appInsights.context.application.ver = "101";
                appInsights.context.application.build = "101";
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal("101", envelope.tags[contextKeys.applicationVersion], "application.ver");
                    Assert.equal("101", envelope.tags[contextKeys.applicationBuild], "application.build");
                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: device context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                appInsights.context.device.id = "101";
                appInsights.context.device.ip = "101";
                appInsights.context.device.language = "101";
                appInsights.context.device.locale = "101";
                appInsights.context.device.model = "101";
                appInsights.context.device.network = 101;
                appInsights.context.device.oemName = "101";
                appInsights.context.device.os = "101";
                appInsights.context.device.osversion = "101";
                appInsights.context.device.resolution = "101";
                appInsights.context.device.type = "101";
                
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal("101", envelope.tags[contextKeys.deviceId], "device.id");
                    Assert.equal("101", envelope.tags[contextKeys.deviceIp], "device.ip");
                    Assert.equal("101", envelope.tags[contextKeys.deviceLanguage], "device.language");
                    Assert.equal("101", envelope.tags[contextKeys.deviceLocale], "device.locale");
                    Assert.equal("101", envelope.tags[contextKeys.deviceModel], "device.model");
                    Assert.equal("101", envelope.tags[contextKeys.deviceNetwork], "device.network");
                    Assert.equal("101", envelope.tags[contextKeys.deviceOEMName], "device.oemName");
                    Assert.equal("101", envelope.tags[contextKeys.deviceOS], "device.os");
                    Assert.equal("101", envelope.tags[contextKeys.deviceOSVersion], "device.osversion");
                    Assert.equal("101", envelope.tags[contextKeys.deviceScreenResolution], "device.resolution");
                    Assert.equal("101", envelope.tags[contextKeys.deviceType], "device.type");

                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: internal context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                appInsights.context.internal.agentVersion = "101";
                appInsights.context.internal.sdkVersion = "101";
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal("101", envelope.tags[contextKeys.internalAgentVersion], "internal.agentVersion");
                    Assert.equal("101", envelope.tags[contextKeys.internalSdkVersion], "internal.sdkVersion");
                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: location context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                appInsights.context.location.ip = "101";
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal("101", envelope.tags[contextKeys.locationIp], "location.ip");
                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: operation context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                appInsights.context.operation.id = "101";
                appInsights.context.operation.name = "101";
                appInsights.context.operation.parentId = "101";
                appInsights.context.operation.rootId = "101";
                appInsights.context.operation.syntheticSource = "101";
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal("101", envelope.tags[contextKeys.operationId], "operation.id");
                    Assert.equal("101", envelope.tags[contextKeys.operationName], "operation.name");
                    Assert.equal("101", envelope.tags[contextKeys.operationParentId], "operation.parentId");
                    Assert.equal("101", envelope.tags[contextKeys.operationRootId], "operation.rootId");
                    Assert.equal("101", envelope.tags[contextKeys.operationSyntheticSource], "operation.syntheticSource");
                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: sample context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context.sample.sampleRate = 33;
                var trackSpy = sinon.spy(appInsights.context, "_track");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = trackSpy.returnValues[0];
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal(33, envelope.tags[contextKeys.sampleRate], "sample.sampleRate");
                    trackSpy.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                trackSpy.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: appInsights.context.sample.IsSampledIn() receives an envelope with sampling-related contexts applied (sample, user)",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context.sample.sampleRate = 33;
                appInsights.context.user.id = "asdf";
                var trackSpy = sinon.spy(appInsights.context.sample, "isSampledIn");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    //var envelope = this.getFirstResult(action, trackStub);
                    var envelope = trackSpy.args[0][0];
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal(33, envelope.tags[contextKeys.sampleRate], "sample.sampleRate");
                    Assert.equal("asdf", envelope.tags[contextKeys.userId], "user.id");
                    trackSpy.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));
                test(() => appInsights.trackPageView());
                test(() => appInsights.trackException(new Error()));
                test(() => appInsights.trackTrace("testTrace"));

                // teardown
                trackSpy.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: session context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                appInsights.context.session.id = "101";
                appInsights.context.session.isFirst = true;
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal("101", envelope.tags[contextKeys.sessionId], "session.id");
                    Assert.equal(true, envelope.tags[contextKeys.sessionIsFirst], "session.isFirstSession");
                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: user context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                appInsights.context.user.accountAcquisitionDate = "101";
                appInsights.context.user.accountId = "101";
                appInsights.context.user.agent = "101";
                appInsights.context.user.id = "101";
                appInsights.context.user.storeRegion = "101";
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal("101", envelope.tags[contextKeys.userAccountAcquisitionDate], "user.accountAcquisitionDate");
                    Assert.equal("101", envelope.tags[contextKeys.userAccountId], "user.accountId");
                    Assert.equal("101", envelope.tags[contextKeys.userAgent], "user.agent");
                    Assert.equal("101", envelope.tags[contextKeys.userId], "user.id");
                    Assert.equal("101", envelope.tags[contextKeys.userStoreRegion], "user.storeRegion");
                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: set authenticatedId context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());

                appInsights.setAuthenticatedUserContext("10001");

                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal("10001", envelope.tags[contextKeys.userAuthUserId], "user.authenticatedId");

                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));
                
                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: set authenticatedId and accountId context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());

                appInsights.setAuthenticatedUserContext("10001", "account33");

                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal("10001", envelope.tags[contextKeys.userAuthUserId], "user.authenticatedId");
                    Assert.equal("account33", envelope.tags[contextKeys.userAccountId], "user.accountId");

                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                trackStub.restore();
                }
        });

        this.testCase({
            name: "AppInsightsTests: set authenticatedId and accountId context is applied with non-ascii languages",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());

                appInsights.setAuthenticatedUserContext("\u0428", "\u0429"); // Cyrillic characters
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // verify
                var test = (action) => {
                    action();
                    this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal("\u0428", envelope.tags[contextKeys.userAuthUserId], "user.authenticatedId is correct");
                    Assert.equal("\u0429", envelope.tags[contextKeys.userAccountId], "user.accountId is correct");

                    trackStub.reset();
                };

                // act 
                test(() => appInsights.trackEvent("testEvent"));
                
                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: clear authID context is applied",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                var trackStub = sinon.stub(appInsights.context._sender, "send");
                appInsights.setAuthenticatedUserContext("1234", "abcd");

                // Clear authenticatedId
                appInsights.clearAuthenticatedUserContext();

                // verify
                var test = (action) => {
                    action();
                this.clock.tick(1);
                    var envelope = this.getFirstResult(action, trackStub);
                    var contextKeys = new AI.ContextTagKeys();
                    Assert.equal(undefined, envelope.tags[contextKeys.userAuthUserId], "user.authenticatedId");
                    Assert.equal(undefined, envelope.tags[contextKeys.userAccountId], "user.accountId");

                    trackStub.reset();
                };

                // act
                test(() => appInsights.trackEvent("testEvent"));

                // teardown
                trackStub.restore();
                }
        });

        this.testCase({
            name: "AppInsightsTests: trackPageView sends base data and performance data when available",
            test: () => {
                // setup
                var perfDataAvailable = false;
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var triggerStub = sinon.stub(appInsights.context, "track");
                var checkPageLoadStub = sinon.stub(Microsoft.ApplicationInsights.Telemetry.PageViewPerformance, "isPerformanceTimingDataReady",() => { return perfDataAvailable; });

                // act
                appInsights.trackPageView();

                // Data not available yet - should not send events
                this.clock.tick(100);
                Assert.ok(triggerStub.notCalled, "Data is not yet available hence nothing is sent");

                // Data becomes available - both page view and client perf should be sent
                perfDataAvailable = true;
                this.clock.tick(100);
                Assert.ok(triggerStub.calledTwice, "Data is available hence both page view and client perf should be sent");

                triggerStub.restore();
                checkPageLoadStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: a page view is sent after 60 seconds even if perf data is not available",
            test: () => {
                // setup
                var duration = 0;
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var triggerStub = sinon.stub(appInsights.context, "track");
                var checkPageLoadStub = sinon.stub(Microsoft.ApplicationInsights.Telemetry.PageViewPerformance, "isPerformanceTimingDataReady",() => { return false; });
                var getDurationStub = sinon.stub(Microsoft.ApplicationInsights.Telemetry.PageViewPerformance, "getDuration",() => { return duration; });

                // act
                appInsights.trackPageView();

                // Data not available yet - should not send events
                this.clock.tick(100);
                Assert.ok(triggerStub.notCalled, "Data is not yet available hence nothing is sent");

                // 60 seconds passed, page view is supposed to be sent
                duration = 60001;
                this.clock.tick(100);
                Assert.ok(triggerStub.calledOnce, "60 seconds passed, page view is supposed to be sent");

                triggerStub.restore();
                checkPageLoadStub.restore();
                getDurationStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: trackException accepts single exception and an array of exceptions",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                appInsights.trackException(new Error());
                Assert.ok(trackStub.calledOnce, "single exception is tracked");
                appInsights.trackException(<any>[new Error()]);
                Assert.ok(trackStub.calledTwice, "array of exceptions is tracked");

                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: trackMetric batches metrics sent in a hot loop",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var trackStub = sinon.stub(appInsights.context._sender, "send");

                // act 
                appInsights.trackMetric("testMetric", 0);
                this.clock.tick(1);

                // verify
                Assert.ok(trackStub.calledOnce, "track was called once after sending one metric");
                trackStub.reset();

                // act
                for (var i = 0; i < 100; i++) {
                    appInsights.trackMetric("testMetric", 0);
                }

                this.clock.tick(1);

                // verify
                Assert.equal(100, trackStub.callCount, "track was called 100 times");

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "AppInsightsTests: config methods are set based on snippet",
            test: () => {
                // setup
                var snippet = this.getAppInsightsSnippet();
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(snippet);
                appInsights.context._sessionManager._sessionHandler = null;

                var test = (name) => {
                    Assert.equal(snippet[name], appInsights.context._config[name](), name + " is set and correct");
                };

                // verify
                test("instrumentationKey");
                test("accountId");
                test("appUserId");
                test("sessionRenewalMs");
                test("sessionExpirationMs");
                test("endpointUrl");
                test("maxBatchSizeInBytes");
                test("maxBatchInterval");

                Assert.equal(snippet.enableDebug, Microsoft.ApplicationInsights._InternalLogging.enableDebugExceptions(), "enableDebugExceptions is set and correct");
            }
        });

        this.testCase({
            name: "AppInsights._onerror creates a dump of unexpected error thrown by trackException for logging",
            test: () => {
                var sut = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                var dumpSpy = sinon.spy(Microsoft.ApplicationInsights.Util, "dump")
                    var unexpectedError = new Error();
                var stub = sinon.stub(sut, "trackException").throws(unexpectedError);

                    sut._onerror("any message", "any://url", 420, 42, new Error());

                    Assert.ok(dumpSpy.calledWith(unexpectedError));
                stub.restore();
                dumpSpy.restore();
                }
        });

        this.testCase({
            name: "AppInsights._onerror stringifies error object",
            test: () => {
                var sut = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                var dumpSpy = sinon.spy(Microsoft.ApplicationInsights.Util, "dump")
                var unexpectedError = new Error("my cool message");
                var stub = sinon.stub(sut, "trackException").throws(unexpectedError);

                sut._onerror("any message", "any://url", 420, 42, new Error());

                Assert.ok(dumpSpy.returnValues[0].indexOf("stack: ") != -1);
                Assert.ok(dumpSpy.returnValues[0].indexOf("message: 'my cool message'") != -1);
                Assert.ok(dumpSpy.returnValues[0].indexOf("name: 'Error'") != -1);

                stub.restore();
                    dumpSpy.restore();
                }
        });

        this.testCase({
            name: "AppInsights._onerror logs dump of unexpected error thrown by trackException for diagnostics",
            test: () => {
                var sut = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                var throwInternalNonUserActionableSpy = sinon.spy(Microsoft.ApplicationInsights._InternalLogging, "throwInternalNonUserActionable");
                var dumpStub = sinon.stub(Microsoft.ApplicationInsights.Util, "dump");
                var stub = sinon.stub(sut, "trackException").throws(new Error());
                    var expectedErrorDump: string = "test error";
                    dumpStub.returns(expectedErrorDump);

                    sut._onerror("any message", "any://url", 420, 42, new Error());

                    var logMessage: string = throwInternalNonUserActionableSpy.getCall(0).args[1];
                    Assert.notEqual(-1, logMessage.indexOf(expectedErrorDump));
                stub.restore();
                    dumpStub.restore();
                    throwInternalNonUserActionableSpy.restore();
                }
        });

        this.testCase({
            name: "AppInsights._onerror add document URL in case of CORS error",
            test: () => {
                // prepare
                var sut = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                var trackSpy = sinon.spy(sut.context, "track");                

                // act
                sut._onerror("Script error.", "", 0, 0, null);

                // assert
                Assert.equal(document.URL,(<any>trackSpy.args[0][0]).data.baseData.properties.url);

                trackSpy.restore();
            }
        });

        this.testCase({
            name: "AppInsights._onerror adds document URL in case of no CORS error",
            test: () => {
                // prepare
                var sut = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                var trackExceptionSpy = sinon.spy(sut, "trackException");                

                // act
                // Last arg is not an error\null which will be treated as not CORS issue
                sut._onerror("Script error.", "", 0, 0, <any>new Object());

                // assert
                // properties are passed as a 3rd parameter
                Assert.equal(document.URL,(<any>trackExceptionSpy.args[0][2]).url);

                trackExceptionSpy.restore();
            }
        });

        this.addPageViewSignatureTests();
        this.addStartStopTests();
    }

    private addPageViewSignatureTests() {
        var testValues = {
            name: "name",
            url: "url",
            duration: 1000,
            properties: {
                "property1": 5,
                "property2": 10
            },
            measurements: {
                "measurement": 300
            }
        };

        var test = (trackAction, validateAction) => {
            // setup
            var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
            appInsights.context._sessionManager._sessionHandler = null;
            var stub = sinon.stub(appInsights, "trackPageViewInternal");

            // act
            trackAction(appInsights);
            
            // verify
            Assert.ok(stub.called);
            var data = stub.args[0];
            validateAction(data);

            // teardown
            stub.restore();
        }


        this.testCase({
            name: name + "PageviewData is initialized in constructor with 0 parameters and valid",
            test: () => {
                var trackAction = (ai) => ai.trackPageView();
                var validateAction = (data) => {
                    Assert.notEqual(testValues.name, data[0]);
                    Assert.notEqual(testValues.url, data[1]);
                    Assert.notEqual(testValues.properties, data[2]);
                    Assert.notEqual(testValues.measurements, data[3]);
                };

                test(trackAction, validateAction);
            }
        });

        this.testCase({
            name: name + "PageviewData is initialized in constructor with name and valid",
            test: () => {
                var trackAction = (ai) => ai.trackPageView(testValues.name);

                var validateAction = (data) => {
                    Assert.equal(testValues.name, data[0]);
                    Assert.notEqual(testValues.url, data[1]);
                    Assert.notEqual(testValues.properties, data[2]);
                    Assert.notEqual(testValues.measurements, data[3]);
                };

                test(trackAction, validateAction);
            }
        });

        this.testCase({
            name: name + "PageviewData is initialized in constructor with name and properties and valid",
            test: () => {
                var trackAction = (ai) => ai.trackPageView(testValues.name, null, testValues.properties);

                var validateAction = (data) => {
                    Assert.equal(testValues.name, data[0]);
                    Assert.notEqual(testValues.url, data[1]);
                    Assert.deepEqual(testValues.properties, data[2]);
                    Assert.notEqual(testValues.measurements, data[3]);
                };

                test(trackAction, validateAction);
            }
        });

        this.testCase({
            name: name + "PageviewData is initialized in constructor with name and url and valid",
            test: () => {
                var trackAction = (ai) => ai.trackPageView(testValues.name, testValues.url);

                var validateAction = (data) => {
                    Assert.equal(testValues.name, data[0]);
                    Assert.equal(testValues.url, data[1]);
                    Assert.notEqual(testValues.properties, data[2]);
                    Assert.notEqual(testValues.measurements, data[3]);
                };

                test(trackAction, validateAction);
            }
        });

        this.testCase({
            name: name + "PageviewData is initialized in constructor with name, properties, and measurements and valid",
            test: () => {
                var trackAction = (ai) => ai.trackPageView(testValues.name, null, testValues.properties, testValues.measurements);

                var validateAction = (data) => {
                    Assert.equal(testValues.name, data[0]);
                    Assert.notEqual(testValues.url, data[1]);
                    Assert.deepEqual(testValues.properties, data[2]);
                    Assert.deepEqual(testValues.measurements, data[3]);
                };

                test(trackAction, validateAction);
            }
        });

        this.testCase({
            name: name + "PageviewData is initialized in constructor with name, url, and properties and valid",
            test: () => {
                var trackAction = (ai) => ai.trackPageView(testValues.name, testValues.url, testValues.properties);

                var validateAction = (data) => {
                    Assert.equal(testValues.name, data[0]);
                    Assert.equal(testValues.url, data[1]);
                    Assert.deepEqual(testValues.properties, data[2]);
                    Assert.notEqual(testValues.measurements, data[3]);
                };

                test(trackAction, validateAction);
            }
        });

        
        this.testCase({
            name: name + "PageviewData is initialized in constructor with name, url, properties, and measurements and valid",
            test: () => {
                var trackAction = (ai) => ai.trackPageView(testValues.name, testValues.url, testValues.properties, testValues.measurements);

                var validateAction = (data) => {
                    Assert.equal(testValues.name, data[0]);
                    Assert.equal(testValues.url, data[1]);
                    Assert.deepEqual(testValues.properties, data[2]);
                    Assert.deepEqual(testValues.measurements, data[3]);
                };

                test(trackAction, validateAction);
            }
        });
    }

    private addStartStopTests() {
        var testValues = {
            name: "name",
            url: "url",
            duration: 200,
            properties: {
                "property1": 5,
                "property2": 10
            },
            measurements: {
                "measurement": 300
            }
        };

        this.testCase({
            name: "Timing Tests: Start/StopPageView pass correct duration",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                var spy = sinon.spy(appInsights, "sendPageViewInternal");

                // act
                appInsights.startTrackPage();
                this.clock.tick(testValues.duration);
                appInsights.stopTrackPage();

                // verify
                Assert.ok(spy.calledOnce, "stop track page view sent data");
                var actualDuration = spy.args[0][2];
                Assert.equal(testValues.duration, actualDuration, "duration is calculated and sent correctly");

                // teardown                
                spy.restore();
            }
        });

        this.testCase({
            name: "Timing Tests: Start/StopPageView tracks single page view with no parameters",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var trackStub = sinon.stub(appInsights.context._sender, "send");
                this.clock.tick(10);        // Needed to ensure the duration calculation works

                // act
                appInsights.startTrackPage();
                this.clock.tick(testValues.duration);
                appInsights.stopTrackPage();
                Assert.ok(trackStub.calledOnce, "single page view tracking stopped");

                // verify
                var telemetry = <Microsoft.ApplicationInsights.Telemetry.PageView>trackStub.args[0][0].data.baseData;
                Assert.notEqual(testValues.name, telemetry.name);
                Assert.notEqual(testValues.url, telemetry.url);
                Assert.notEqual(testValues.properties, telemetry.properties);
                Assert.notEqual(testValues.measurements, telemetry.measurements);

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "Timing Tests: Start/StopPageView tracks single page view with all parameters",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var trackStub = sinon.stub(appInsights.context._sender, "send");
                this.clock.tick(10);        // Needed to ensure the duration calculation works

                // act
                appInsights.startTrackPage(testValues.name);
                this.clock.tick(testValues.duration);
                appInsights.stopTrackPage(testValues.name, testValues.url, testValues.properties, testValues.measurements);
                Assert.ok(trackStub.calledOnce, "single page view tracking stopped");

                // verify
                var telemetry = <Microsoft.ApplicationInsights.Telemetry.PageView>trackStub.args[0][0].data.baseData;
                Assert.equal(testValues.name, telemetry.name);
                Assert.equal(testValues.url, telemetry.url);
                Assert.deepEqual(testValues.properties, telemetry.properties);
                Assert.deepEqual(testValues.measurements, telemetry.measurements);

                // act
                trackStub.reset();
                appInsights.startTrackPage(testValues.name);
                this.clock.tick(testValues.duration);
                appInsights.stopTrackPage(testValues.name, testValues.url, testValues.properties, testValues.measurements);
                Assert.ok(trackStub.calledOnce, "single page view tracking stopped");

                // verify
                telemetry = <Microsoft.ApplicationInsights.Telemetry.PageView>trackStub.args[0][0].data.baseData;
                Assert.equal(testValues.name, telemetry.name);
                Assert.equal(testValues.url, telemetry.url);
                Assert.deepEqual(testValues.properties, telemetry.properties);
                Assert.deepEqual(testValues.measurements, telemetry.measurements);

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "Timing Tests: Multiple Start/StopPageView track single pages view ",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var trackStub = sinon.stub(appInsights.context._sender, "send");
                this.clock.tick(10);        // Needed to ensure the duration calculation works

                // act
                appInsights.startTrackPage(testValues.name);
                this.clock.tick(testValues.duration);

                appInsights.startTrackPage();
                this.clock.tick(testValues.duration);
                appInsights.stopTrackPage();
                Assert.ok(trackStub.calledOnce, "single page view tracking stopped no parameters");

                this.clock.tick(testValues.duration);
                appInsights.stopTrackPage(testValues.name, testValues.url, testValues.properties, testValues.measurements);
                Assert.ok(trackStub.calledTwice, "single page view tracking stopped all parameters");

                // verify
                // Empty parameters
                var telemetry = <Microsoft.ApplicationInsights.Telemetry.PageView>trackStub.args[0][0].data.baseData;
                Assert.notEqual(testValues.name, telemetry.name);
                Assert.notEqual(testValues.url, telemetry.url);
                Assert.notEqual(testValues.properties, telemetry.properties);
                Assert.notEqual(testValues.measurements, telemetry.measurements);

                // All parameters
                telemetry = <Microsoft.ApplicationInsights.Telemetry.PageView>trackStub.args[1][0].data.baseData;
                Assert.equal(testValues.name, telemetry.name);
                Assert.equal(testValues.url, telemetry.url);
                Assert.deepEqual(testValues.properties, telemetry.properties);
                Assert.deepEqual(testValues.measurements, telemetry.measurements);

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "Timing Tests: Multiple startTrackPage",
            test:
            () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var logStub = sinon.stub(Microsoft.ApplicationInsights._InternalLogging, "throwInternalUserActionable");
                Microsoft.ApplicationInsights._InternalLogging.verboseLogging = () => true;
                
                // act
                appInsights.startTrackPage();
                appInsights.startTrackPage();

                // verify
                Assert.ok(logStub.calledOnce, "calling start twice triggers warning to user");

                // teardown
                logStub.restore();
            }
        });

        this.testCase({
            name: "Timing Tests: stopTrackPage called without a corresponding start",
            test:
            () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var logStub = sinon.stub(Microsoft.ApplicationInsights._InternalLogging, "throwInternalUserActionable");
                Microsoft.ApplicationInsights._InternalLogging.verboseLogging = () => true;

                // act
                appInsights.stopTrackPage();

                // verify
                Assert.ok(logStub.calledOnce, "calling stop without a corresponding start triggers warning to user");

                // teardown
                logStub.restore();
            }
        });

        this.testCase({
            name: "Timing Tests: Start/StopTrackEvent",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var trackStub = sinon.stub(appInsights.context._sender, "send");
                this.clock.tick(10);        // Needed to ensure the duration calculation works

                // act
                appInsights.startTrackEvent(testValues.name);
                this.clock.tick(testValues.duration);
                appInsights.stopTrackEvent(testValues.name, testValues.properties, testValues.measurements);
                Assert.ok(trackStub.calledOnce, "single page view tracking stopped");

                // verify
                var telemetry = <Microsoft.ApplicationInsights.Telemetry.Event>trackStub.args[0][0].data.baseData;
                Assert.equal(testValues.name, telemetry.name);
                Assert.deepEqual(testValues.properties, telemetry.properties);
                Assert.deepEqual(testValues.measurements, telemetry.measurements);

                // act
                trackStub.reset();
                appInsights.startTrackEvent(testValues.name);
                this.clock.tick(testValues.duration);
                appInsights.stopTrackEvent(testValues.name, testValues.properties, testValues.measurements);
                Assert.ok(trackStub.calledOnce, "single page view tracking stopped");

                // verify
                telemetry = <Microsoft.ApplicationInsights.Telemetry.Event>trackStub.args[0][0].data.baseData;
                Assert.equal(testValues.name, telemetry.name);
                Assert.deepEqual(testValues.properties, telemetry.properties);
                Assert.deepEqual(testValues.measurements, telemetry.measurements);

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "Timing Tests: Multiple Start/StopTrackEvent",
            test: () => {
                // setup

                var testValues2 = {
                    name: "test2",
                    duration: 500
                };

                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var trackStub = sinon.stub(appInsights.context._sender, "send");
                this.clock.tick(10);        // Needed to ensure the duration calculation works

                // act
                appInsights.startTrackEvent(testValues.name);

                appInsights.startTrackEvent(testValues2.name);
                this.clock.tick(testValues2.duration);
                appInsights.stopTrackEvent(testValues2.name);
                Assert.ok(trackStub.calledOnce, "single event tracking stopped for " + testValues2.name);

                this.clock.tick(testValues.duration);
                appInsights.stopTrackEvent(testValues.name, testValues.properties, testValues.measurements);
                Assert.ok(trackStub.calledTwice, "single event tracking stopped for " + testValues.name);

                // verify
                // TestValues2
                var telemetry = <Microsoft.ApplicationInsights.Telemetry.Event>trackStub.args[0][0].data.baseData;
                Assert.equal(testValues2.name, telemetry.name);

                // TestValues1
                telemetry = <Microsoft.ApplicationInsights.Telemetry.Event>trackStub.args[1][0].data.baseData;
                Assert.equal(testValues.name, telemetry.name);
                Assert.deepEqual(testValues.properties, telemetry.properties);
                Assert.deepEqual(testValues.measurements, telemetry.measurements);

                // teardown
                trackStub.restore();
            }
        });

        this.testCase({
            name: "Timing Tests: Multiple startTrackEvent",
            test:
            () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var logStub = sinon.stub(Microsoft.ApplicationInsights._InternalLogging, "throwInternalUserActionable");
                Microsoft.ApplicationInsights._InternalLogging.verboseLogging = () => true;

                // act
                appInsights.startTrackEvent("Event1");
                appInsights.startTrackEvent("Event1");

                // verify
                Assert.ok(logStub.calledOnce, "calling startTrackEvent twice triggers warning to user");

                // teardown
                logStub.restore();
            }
        });

        this.testCase({
            name: "Timing Tests: stopTrackPage called without a corresponding start",
            test:
            () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                var logStub = sinon.stub(Microsoft.ApplicationInsights._InternalLogging, "throwInternalUserActionable");
                Microsoft.ApplicationInsights._InternalLogging.verboseLogging = () => true;

                // act
                appInsights.stopTrackPage("Event1");

                // verify
                Assert.ok(logStub.calledOnce, "calling stopTrackEvent without a corresponding start triggers warning to user");

                // teardown
                logStub.restore();
            }
        });

        this.testCase({
            name: "flush causes queue to be sent",
            test:
            () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                appInsights.config.maxBatchInterval = 100;
                Microsoft.ApplicationInsights._InternalLogging.verboseLogging = () => true;
                appInsights.context._sender._sender = () => null;
                var senderSpy = sinon.spy(appInsights.context._sender, "_sender");

                // act
                appInsights.trackEvent("Event1");
                appInsights.trackEvent("Event2");
                appInsights.trackEvent("Event3");

                // verify
                sinon.clock.tick(1);
                Assert.ok(senderSpy.notCalled, "data is not sent without calling flush");

                // act
                appInsights.flush();

                // verify
                sinon.clock.tick(1);
                Assert.ok(senderSpy.calledOnce, "data is sent after calling flush");

                // teardown
                senderSpy.restore();
            }
        });

        this.testCase({
            name: "PageView should cause internal event throttle to be reset",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                Microsoft.ApplicationInsights._InternalLogging.verboseLogging = () => true;
                appInsights.context._sender._sender = () => null;
                var senderStub = sinon.stub(appInsights.context._sender, "_sender");
                var resetInternalMessageCountStub = sinon.stub(Microsoft.ApplicationInsights._InternalLogging, "resetInternalMessageCount");

                // setup a page view envelope
                var pageView = new Microsoft.ApplicationInsights.Telemetry.PageView();
                var pageViewData = new Microsoft.ApplicationInsights.Telemetry.Common.Data<Microsoft.ApplicationInsights.Telemetry.PageView>(Microsoft.ApplicationInsights.Telemetry.PageView.dataType, pageView);
                var pageViewEnvelope = new Microsoft.ApplicationInsights.Telemetry.Common.Envelope(pageViewData, Microsoft.ApplicationInsights.Telemetry.PageView.envelopeType);

                // act
                appInsights.context.track(pageViewEnvelope);

                // verify
                Assert.ok(resetInternalMessageCountStub.calledOnce, "Internal throttle was not reset even though Page View was tracked");

                // restore
                senderStub.restore();
                resetInternalMessageCountStub.restore();
            }
        });

        this.testCase({
            name: "No other event than PageView should cause internal event throttle to be reset",
            test: () => {
                // setup
                var appInsights = new Microsoft.ApplicationInsights.AppInsights(this.getAppInsightsSnippet());
                appInsights.context._sessionManager._sessionHandler = null;
                Microsoft.ApplicationInsights._InternalLogging.verboseLogging = () => true;
                appInsights.context._sender._sender = () => null;
                var senderStub = sinon.stub(appInsights.context._sender, "_sender");
                var resetInternalMessageCountStub = sinon.stub(Microsoft.ApplicationInsights._InternalLogging, "resetInternalMessageCount");

                // setup a some other envelope
                var event = new Microsoft.ApplicationInsights.Telemetry.Event('Test Event');
                var eventData = new Microsoft.ApplicationInsights.Telemetry.Common.Data<Microsoft.ApplicationInsights.Telemetry.Event>(Microsoft.ApplicationInsights.Telemetry.Event.dataType, event);
                var eventEnvelope = new Microsoft.ApplicationInsights.Telemetry.Common.Envelope(eventData, Microsoft.ApplicationInsights.Telemetry.Event.envelopeType);

                // act
                appInsights.context.track(eventEnvelope);

                // verify
                Assert.ok(resetInternalMessageCountStub.notCalled, "Internal throttle was reset even though Page View was not tracked");

                // restore
                senderStub.restore();
                resetInternalMessageCountStub.restore();
            }
        });
    }

    private getFirstResult(action: string, trackStub: SinonStub, skipSessionState?: boolean) {
        var index: number;
        if (skipSessionState) {
            index = 1;
        } else {
            index = 0;
        }
        Assert.ok(trackStub.args && trackStub.args[index] && trackStub.args[index], "track was called for: " + action);
        return <Microsoft.Telemetry.Envelope>trackStub.args[index][0];
    }
}
new AppInsightsTests().registerTests();