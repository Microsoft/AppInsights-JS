﻿/// <reference path="../TestFramework/TestClass.ts" />

import { AppInsightsCore, IConfiguration, DiagnosticLogger, ITelemetryItem } from "@microsoft/applicationinsights-core-js";
import { Util } from "@microsoft/applicationinsights-common";
import { ReactNativePlugin } from '../../src';

export class ReactNativePluginTests extends TestClass {
    private plugin: ReactNativePlugin;
    private core: AppInsightsCore;
    private config: IConfiguration = {instrumentationKey: ''};
    private item: ITelemetryItem;

    public testInitialize() {
        this.core = new AppInsightsCore();
        this.core.logger = new DiagnosticLogger();
        this.plugin = new ReactNativePlugin();
        this.config = {instrumentationKey: ''};
    }

    public testCleanup() {
        this.core = null;
        this.plugin = null;
        this.config = null;
    }

    public registerTests() {
        this.addConfigTests()
        this.addAPITests();
    }

    private addAPITests() {
        this.testCase({
            name: `setDeviceId sets this device's id`,
            test: () => {
                const expectation = 'something';
                Assert.notEqual(expectation, this.plugin['_device'].id, 'Initial not set');
                this.plugin.setDeviceId(expectation);
                Assert.equal(expectation, this.plugin['_device'].id, 'Value set');
            }
        });

        this.testCase({
            name: `setDeviceModel sets this device's model`,
            test: () => {
                const expectation = 'something';
                Assert.notEqual(expectation, this.plugin['_device'].model, 'Initial not set');
                this.plugin.setDeviceModel(expectation);
                Assert.equal(expectation, this.plugin['_device'].model, 'Value set');
            }
        });

        this.testCase({
            name: `setDeviceType sets this device's type`,
            test: () => {
                const expectation = 'something';
                Assert.notEqual(expectation, this.plugin['_device'].type, 'Initial not set');
                this.plugin.setDeviceType(expectation);
                Assert.equal(expectation, this.plugin['_device'].type, 'Value set');
            }
        });
    }

    private addConfigTests() {
        this.testCase({
            name: 'Autocollection is enabled by default',
            test: () => {
                const autoCollectStub = this.sandbox.stub(this.plugin, '_collectDeviceInfo');

                this.plugin.initialize(this.config, this.core, []);
                Assert.equal(false, this.plugin['_config'].disableDeviceCollection, 'disableDeviceCollection is false');
                Assert.ok(autoCollectStub.calledOnce);
            }
        });

        this.testCase({
            name: 'Autocollection does not run when disabled from root config',
            test: () => {
                const autoCollectStub = this.sandbox.stub(this.plugin, '_collectDeviceInfo');
                this.config['disableDeviceCollection'] = true;
                this.plugin.initialize(this.config, this.core, []);

                Assert.equal(true, this.plugin['_config'].disableDeviceCollection, 'disableDeviceCollection is true');
                Assert.ok(autoCollectStub.notCalled);
            }
        });

        this.testCase({
            name: 'Autocollection does not run when disabled from constructor config',
            test: () => {
                this.plugin = new ReactNativePlugin({disableDeviceCollection: true});
                const autoCollectStub = this.sandbox.stub(this.plugin, '_collectDeviceInfo');
                this.plugin.initialize(this.config, this.core, []);

                Assert.equal(true, this.plugin['_config'].disableDeviceCollection, 'disableDeviceCollection is true');
                Assert.ok(autoCollectStub.notCalled);
            }
        });

        this.testCase({
            name: 'Autocollection runs when empty config is passed',
            test: () => {
                this.plugin = new ReactNativePlugin(<any>{});
                const autoCollectStub = this.sandbox.stub(this.plugin, '_collectDeviceInfo');
                this.plugin.initialize(this.config, this.core, []);

                Assert.equal(false, this.plugin['_config'].disableDeviceCollection, 'disableDeviceCollection is false');
                Assert.ok(autoCollectStub.calledOnce);
            }
        });

        this.testCase({
            name: 'Autocollection runs when random config is passed',
            test: () => {
                this.plugin = new ReactNativePlugin(<any>{foo: 'bar'});
                const autoCollectStub = this.sandbox.stub(this.plugin, '_collectDeviceInfo');
                this.plugin.initialize(this.config, this.core, []);

                Assert.deepEqual(false, this.plugin['_config'].disableDeviceCollection, 'disableDeviceCollection is false');
                Assert.ok(autoCollectStub.calledOnce);
            }
        });
    }
}

export function runTests() {
    new ReactNativePluginTests().registerTests();
}
