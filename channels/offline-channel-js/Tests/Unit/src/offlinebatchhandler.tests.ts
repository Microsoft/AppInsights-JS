import { AITestClass, Assert, PollingAssert } from "@microsoft/ai-test-framework";
import { AppInsightsCore, IConfiguration, IPayloadData, OnCompleteCallback, createDynamicConfig, newGuid } from "@microsoft/applicationinsights-core-js";
import { TestChannel } from "./TestHelper";
import { DEFAULT_BREEZE_ENDPOINT, DEFAULT_BREEZE_PATH, IConfig } from "@microsoft/applicationinsights-common";
import { ILocalStorageConfiguration, eStorageProviders } from "../../../src/Interfaces/IOfflineProvider";
import { OfflineBatchHandler } from "../../../src/OfflineBatchHandler";
import { doAwait } from "@nevware21/ts-async";
import { eBatchSendStatus, eBatchStoreStatus } from "../../../src/Interfaces/IOfflineBatch";

export class OfflineBatchHandlerTests extends AITestClass {
    private core: AppInsightsCore;
    private coreConfig: IConfig & IConfiguration;
    private ctx: any;
 
    public testInitialize() {
        super.testInitialize();
        let channel = new TestChannel();
        this.coreConfig = {
            instrumentationKey: "testIkey",
            endpointUrl: "https://testurl.com"
        };
        this.core = new AppInsightsCore();
        this.core.initialize(this.coreConfig, [channel]);
        
   
        this.ctx = {};
    }

    public testCleanup() {
        super.testCleanup();
        AITestClass.orgLocalStorage.clear();
        this.onDone(() => {
            this.core.unload();
        });
        this.core = null as any;
        this.coreConfig = null as any;
        
    }

    public registerTests() {

        this.testCase({
            name: "Offline Batch Handler: init with web storge provider",
            test: () => {
                let storageObj = {providers:[eStorageProviders.LocalStorage, eStorageProviders.SessionStorage], autoClean: true } as ILocalStorageConfiguration;
                let  storageConfig = createDynamicConfig(storageObj).cfg;

                let itemCtx = this.core.getProcessTelContext();
                let providerCxt = {
                    itemCtx:  itemCtx,
                    storageConfig: storageConfig,
                    endpoint:DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH
                }
                let batchHandler = new OfflineBatchHandler();
                batchHandler.initialize(providerCxt);
                let items = batchHandler["_getDbgPlgTargets"]();
                let provider = items[0];
                let isInit = items[1];
                Assert.ok(provider, "provider is initialized");
                Assert.ok(isInit, "initialization is successful");

                batchHandler.teardown();
            }
        });

        this.testCaseAsync({
            name: "Offline Batch Handler: init with IndexedDB storge provider",
            stepDelay: 100,
            steps: [() => {
                let endpoint = DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH;
                let storageObj = {providers:[eStorageProviders.IndexedDb], autoClean: true } as ILocalStorageConfiguration;
                let  storageConfig = createDynamicConfig(storageObj).cfg;

                let itemCtx = this.core.getProcessTelContext();
                let providerCxt = {
                    itemCtx:  itemCtx,
                    storageConfig: storageConfig,
                    endpoint: endpoint
                }
                let batchHandler = new OfflineBatchHandler();
                doAwait(batchHandler.initialize(providerCxt),(res) => {
                    this.ctx.isInit = true;
                    let items = batchHandler["_getDbgPlgTargets"]();
                    let provider = items[0];
                    let isInit = items[1];
                    Assert.ok(provider, "provider is initialized");
                    Assert.ok(isInit, "initialization is successful");
                });

                doAwait(batchHandler.teardown(),(res) => {
                    this.ctx.isclosed = true;
                });


            }].concat(PollingAssert.createPollingAssert(() => {
                let isInit = this.ctx.isInit;
                if (isInit) {
                    
                    return true;
                }
                return false;
            }, "Wait for init response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let isclosed = this.ctx.isclosed;
                if (isclosed) {
                    return true;
                }
                return false;
            }, "Wait for close response" + new Date().toISOString(), 15, 1000) as any)
        });

        this.testCaseAsync({
            name: "Store Batch: store batch with web storge provider",
            stepDelay: 100,
            steps: [() => {
                let endpoint = DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH;
                let storageObj = {providers:[eStorageProviders.LocalStorage], autoClean: true } as ILocalStorageConfiguration;
                let  storageConfig = createDynamicConfig(storageObj).cfg;

                let itemCtx = this.core.getProcessTelContext();
                let providerCxt = {
                    itemCtx:  itemCtx,
                    storageConfig: storageConfig,
                    endpoint: endpoint
                }
                let batchHandler = new OfflineBatchHandler();
                batchHandler.initialize(providerCxt);
                this.ctx.isInit = true;
                this.ctx.handler = batchHandler;
                let items = batchHandler["_getDbgPlgTargets"]();
                let provider = items[0];
                let isInit = items[1];
                Assert.ok(provider, "provider is initialized");
                Assert.ok(isInit, "initialization is successful");
                

                let result:any[] = [];
                let cb = (res) => {
                    result.push(res);
                }
                let evt = TestHelper.mockEvent(endpoint, 1, false);
                doAwait(batchHandler.storeBatch(evt, cb) as any,(res) => {
                    this.ctx.storeBatch = true;
                    this.ctx.result = result;
                });

                doAwait(batchHandler.hasStoredBatch(),(res) => {
                    this.ctx.hasBatch = res;
                });
            

                doAwait( batchHandler.teardown(), () => {
                    this.ctx.isclosed = true;
                });

            }].concat(PollingAssert.createPollingAssert(() => {
                let storeBatch = this.ctx.storeBatch;
                if (storeBatch) {
                    let res = this.ctx.result[0];
                    let state = res.state == eBatchStoreStatus.Success;
                    Assert.ok(state, "state should be ok");
                    let item = res.item;
                    Assert.ok(item.id, "item id should be set");
                    Assert.equal(item.criticalCnt, 1, "expected item should be returned");

                    let storageKey = "AIOffline_1_dc.services.visualstudio.com/v2/track";
                    let storageStr = AITestClass.orgLocalStorage.getItem(storageKey) as any;
                    let storageObject = JSON.parse(storageStr);
                    let storageEvts = storageObject.evts;
                    Assert.deepEqual(Object.keys(storageEvts).length, 1, "storgae should only have one event");
                    Assert.ok(storageEvts[item.id], "storgae should contain expected item");
                    
                    return true;
                }
                return false;
            }, "Wait for store batch response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let hasBatch = this.ctx.hasBatch;
                if (hasBatch) {
                    return true;
                }
                return false;
            }, "Wait for has batch  response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let isclosed = this.ctx.isclosed;
                if (isclosed) {
                    return true;
                }
                return false;
            }, "Wait for close response" + new Date().toISOString(), 15, 1000) as any)
        });

        this.testCaseAsync({
            name: "Store Batch: store batch with indexedDB storge provider",
            stepDelay: 100,
            steps: [() => {
                let endpoint = DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH;
                let storageObj = {providers:[eStorageProviders.IndexedDb], autoClean: true} as ILocalStorageConfiguration;
                let  storageConfig = createDynamicConfig(storageObj).cfg;

                let itemCtx = this.core.getProcessTelContext();
                let providerCxt = {
                    itemCtx:  itemCtx,
                    storageConfig: storageConfig,
                    endpoint: endpoint
                }
                let batchHandler = new OfflineBatchHandler();
                doAwait(batchHandler.initialize(providerCxt),(res) => {
                    this.ctx.isInit = true;
                    let items = batchHandler["_getDbgPlgTargets"]();
                    let provider = items[0];
                    let isInit = items[1];
                    Assert.ok(provider, "provider is initialized");
                    Assert.ok(isInit, "initialization is successful");
                });
                

                let result:any[] = [];
                let cb = (res) => {
                    this.ctx.storeBatch = true;
                    result.push(res);
                }
                let evt = TestHelper.mockEvent(endpoint, 1, false);
                batchHandler.storeBatch(evt, cb);
                doAwait(batchHandler.storeBatch(evt, cb) as any,(res) => {
                    this.ctx.storeBatch = true;
                    this.ctx.result = result;
                });

           
                doAwait(batchHandler.hasStoredBatch(),(res) => {
                    this.ctx.hasBatch = res;
                });
            

                doAwait( batchHandler.teardown(), () => {
                    this.ctx.isclosed = true;
                });

            }].concat(PollingAssert.createPollingAssert(() => {
                let isInit = this.ctx.isInit;
                if (isInit) {
                    return true;
                }
                return false;
            }, "Wait for init response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let storeBatch = this.ctx.storeBatch;
                if (storeBatch) {
                    let res = this.ctx.result[0];
                    let state = res.state == eBatchStoreStatus.Success;
                    Assert.ok(state, "state should be ok");
                    let item = res.item;
                    Assert.ok(item.id, "item id should be set");
                    Assert.equal(item.criticalCnt, 1, "expected item should be returned");
                    
                    return true;
                }
                return false;
            }, "Wait for store batch response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let hasBatch = this.ctx.hasBatch;
                if (hasBatch) {
                    return true;
                }
                return false;
            }, "Wait for has batch  response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let isclosed = this.ctx.isclosed;
                if (isclosed) {
                    return true;
                }
                return false;
            }, "Wait for close response" + new Date().toISOString(), 15, 1000) as any)
        });

        this.testCaseAsync({
            name: "Clean Batch: clean batch with web storge provider",
            stepDelay: 100,
            steps: [() => {
                let endpoint = DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH;
                let storageObj = {providers:[eStorageProviders.LocalStorage], autoClean: true} as ILocalStorageConfiguration;
                let  storageConfig = createDynamicConfig(storageObj).cfg;

                let itemCtx = this.core.getProcessTelContext();
                let providerCxt = {
                    itemCtx:  itemCtx,
                    storageConfig: storageConfig,
                    endpoint: endpoint
                }
                let batchHandler = new OfflineBatchHandler();
                batchHandler.initialize(providerCxt);
                this.ctx.isInit = true;
                this.ctx.handler = batchHandler;
                let items = batchHandler["_getDbgPlgTargets"]();
                let provider = items[0];
                let isInit = items[1];
                Assert.ok(provider, "provider is initialized");
                Assert.ok(isInit, "initialization is successful");
                

                let result:any[] = [];
                let cb = (res) => {
                    result.push(res);
                }
                let evt = TestHelper.mockEvent(endpoint, 1, false);
                doAwait(batchHandler.storeBatch(evt, cb) as any,(res) => {
                    this.ctx.storeBatch = 1;
                    this.ctx.result = result;
                });

                let evt1 = TestHelper.mockEvent(endpoint, 2, false);
                doAwait(batchHandler.storeBatch(evt1, cb) as any,(res) => {
                    this.ctx.storeBatch = 2;
                    this.ctx.result = result;
                });

                let evt2 = TestHelper.mockEvent(endpoint, 3, false);
                doAwait(batchHandler.storeBatch(evt2, cb) as any,(res) => {
                    this.ctx.storeBatch = 3;
                    this.ctx.result = result;
                 
                });
                let storageKey = "AIOffline_1_dc.services.visualstudio.com/v2/track";
                let storageStr = AITestClass.orgLocalStorage.getItem(storageKey) as any;
                let storageObject = JSON.parse(storageStr);
                let storageEvts = storageObject.evts;
                Assert.deepEqual(Object.keys(storageEvts).length, 3, "storgae should have three events");

                let cb1 = (res) => {
                    this.ctx.hasBatch = res;
                }
                doAwait(batchHandler.hasStoredBatch(cb1),(res) => {
                    
                });

                let cb2 = (res) => {
                    this.ctx.cleanBatch = true;
                    this.ctx.cleanBatchRes = res;
                }
                doAwait(batchHandler.cleanStorage(cb2) as any,(res) => {
                    
                });
            

                doAwait( batchHandler.teardown(), () => {
                    this.ctx.isclosed = true;
                });

            }].concat(PollingAssert.createPollingAssert(() => {
                let storeBatch = this.ctx.storeBatch;
                if (storeBatch && storeBatch > 2) {
                    Assert.equal(storeBatch, 3, "should have three response");
                    let res = this.ctx.result;
                    Assert.equal(res.length, 3, "response should have three items");
                    return true
                }
                return false;
            }, "Wait for store batch response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let hasBatch = this.ctx.hasBatch;
                if (hasBatch) {
                    return true;
                }
                return false;
            }, "Wait for has batch  response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let cleanBatch = this.ctx.cleanBatch;
                if (cleanBatch) {
                    let res = this.ctx.cleanBatchRes;
                    Assert.equal(res.batchCnt, 3, "should clean all three items");
                    let storageKey = "AIOffline_1_dc.services.visualstudio.com/v2/track";
                    let storageStr = AITestClass.orgLocalStorage.getItem(storageKey) as any;
                    let storageObject = JSON.parse(storageStr);
                    let storageEvts = storageObject.evts;
                    Assert.deepEqual(Object.keys(storageEvts).length, 0, "storgae should not only have any event");
                    return true;
                }
                return false;
            }, "Wait for clean batch  response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let isclosed = this.ctx.isclosed;
                if (isclosed) {
                    return true;
                }
                return false;
            }, "Wait for close response" + new Date().toISOString(), 15, 1000) as any)
        });

        this.testCaseAsync({
            name: "Clean Batch: clean batch with IndexedDB storge provider",
            stepDelay: 100,
            steps: [() => {
                let endpoint = DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH;
                let storageObj = {providers:[eStorageProviders.IndexedDb], autoClean: true} as ILocalStorageConfiguration;
                let  storageConfig = createDynamicConfig(storageObj).cfg;

                let itemCtx = this.core.getProcessTelContext();
                let providerCxt = {
                    itemCtx:  itemCtx,
                    storageConfig: storageConfig,
                    endpoint: endpoint
                }
                let batchHandler = new OfflineBatchHandler();
                doAwait(batchHandler.initialize(providerCxt),(res) => {
                    this.ctx.isInit = true;
                    let items = batchHandler["_getDbgPlgTargets"]();
                    let provider = items[0];
                    let isInit = items[1];
                    Assert.ok(provider, "provider is initialized");
                    Assert.ok(isInit, "initialization is successful");
                });
                
                let result:any[] = [];
                let cb = (res) => {
                    result.push(res);
                }
                let evt = TestHelper.mockEvent(endpoint, 1, false);
                doAwait(batchHandler.storeBatch(evt, cb),(res) => {
                    this.ctx.storeBatch = 1;
                    this.ctx.result = result;
                });

                let evt1 = TestHelper.mockEvent(endpoint, 2, false);
                doAwait(batchHandler.storeBatch(evt1, cb),(res) => {
                    this.ctx.storeBatch = 2;
                    this.ctx.result = result;
                });

                let evt2 = TestHelper.mockEvent(endpoint, 3, false);
                doAwait(batchHandler.storeBatch(evt2, cb),(res) => {
                    this.ctx.storeBatch = 3;
                    this.ctx.result = result;
                 
                });

                let cb1 = (res) => {
                    this.ctx.hasBatch = res;
                }
                doAwait(batchHandler.hasStoredBatch(cb1),(res) => {
                    
                });

                let cb2 = (res) => {
                    this.ctx.cleanBatch = true;
                    this.ctx.cleanBatchRes = res;
                }
                doAwait(batchHandler.cleanStorage(cb2),(res) => {
                    
                });

                let cb3 = (res) => {
                    this.ctx.hasBatch1Called = true;
                    this.ctx.hasBatch1 = res;
                }
                doAwait(batchHandler.hasStoredBatch(cb3),(res) => {
                    
                });
            

                doAwait( batchHandler.teardown(), () => {
                    this.ctx.isclosed = true;
                });

            }].concat(PollingAssert.createPollingAssert(() => {
                let isInit = this.ctx.isInit;
                if (isInit) {
                    return true;
                }
                return false;
            }, "Wait for int response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let storeBatch = this.ctx.storeBatch;
                if (storeBatch && storeBatch > 2) {
                    Assert.equal(storeBatch, 3, "should have three response");
                    let res = this.ctx.result;
                    Assert.equal(res.length, 3, "response should have three items");
                    return true
                }
                return false;
            }, "Wait for store batch response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let hasBatch = this.ctx.hasBatch;
                if (hasBatch) {
                    return true;
                }
                return false;
            }, "Wait for has batch response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let cleanBatch = this.ctx.cleanBatch;
                if (cleanBatch) {
                    let res = this.ctx.cleanBatchRes;
                    Assert.equal(res.batchCnt, 3, "should clean all three items");
                    return true;
                }
                return false;
            }, "Wait for clean batch response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let hasBatch1Called = this.ctx.hasBatch1Called;
                if (hasBatch1Called) {
                    let hasBatch = this.ctx.hasBatch1;
                    Assert.equal(hasBatch, false, "should not contain any events")
                    return true;
                }
                return false;
            }, "Wait for has batch1 response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let isclosed = this.ctx.isclosed;
                if (isclosed) {
                    return true;
                }
                return false;
            }, "Wait for close response" + new Date().toISOString(), 15, 1000) as any)
        });

        this.testCaseAsync({
            name: "Send Next Batch: send Next Batch with web storge provider",
            stepDelay: 100,
            steps: [() => {
                let endpoint = DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH;
                let storageObj = {providers:[eStorageProviders.LocalStorage], autoClean: true, senderCfg:{retryCodes: [500]}, maxRetry: 2} as ILocalStorageConfiguration;
                let  storageConfig = createDynamicConfig(storageObj).cfg;

                let itemCtx = this.core.getProcessTelContext();
                let providerCxt = {
                    itemCtx:  itemCtx,
                    storageConfig: storageConfig,
                    endpoint: endpoint
                }
                let batchHandler = new OfflineBatchHandler();
                batchHandler.initialize(providerCxt);
                this.ctx.isInit = true;
                this.ctx.handler = batchHandler;
                let items = batchHandler["_getDbgPlgTargets"]();
                let provider = items[0];
                let isInit = items[1];
                Assert.ok(provider, "provider is initialized");
                Assert.ok(isInit, "initialization is successful");
                

                let evt = TestHelper.mockEvent(endpoint, 1, false);
                let evt1 = TestHelper.mockEvent(endpoint, 2, false);
                let evt2 = TestHelper.mockEvent(endpoint, 3, false);
                doAwait(batchHandler.storeBatch(evt),(res) => {
                    this.ctx.storeBatch = 1;
                });
                doAwait(batchHandler.storeBatch(evt1),(res) => {
                    this.ctx.storeBatch = 2;
                });
                doAwait(batchHandler.storeBatch(evt2),(res) => {
                    this.ctx.storeBatch = 3;
                });
                
                let sender1Payload: any[] = []
                let sender1 =  (payload: IPayloadData, oncomplete: OnCompleteCallback, sync?: boolean) => {
                    sender1Payload.push(payload);
                    oncomplete(400, {});
                }
                let sender2Payload: any[] = []
                let sender2 =  (payload: IPayloadData, oncomplete: OnCompleteCallback, sync?: boolean) => {
                    sender2Payload.push(payload);
                    oncomplete(500, {});
                }
                let sender3Payload: any[] = []
                let sender3 =  (payload: IPayloadData, oncomplete: OnCompleteCallback, sync?: boolean) => {
                    sender3Payload.push(payload);
                    oncomplete(200, {});
                }

                let res1: any[] = [];
                let cb1 = (res) =>  {
                    res1.push(res);
                }
                doAwait(batchHandler.sendNextBatch(cb1, false, {sendPOST: sender1}) as any,(res) => {
                    this.ctx.sendBatch1 = true;
                    this.ctx.sendBatch1Res = res1;
                    this.ctx.sendBatch1Pd =  sender1Payload;
                });
                let res2: any[] = [];
                let cb2 = (res) =>  {
                    res2.push(res);
                }
                doAwait(batchHandler.sendNextBatch(cb2, false, {sendPOST: sender2}) as any,(res) => {
                    this.ctx.sendBatch2 = true;
                    this.ctx.sendBatch2Res = res2;
                    this.ctx.sendBatch2Pd =  sender2Payload;
                });
                let res3: any[] = [];
                let cb3 = (res) =>  {
                    res3.push(res);
                }
                doAwait(batchHandler.sendNextBatch(cb3, false, {sendPOST: sender3}) as any,(res) => {
                    this.ctx.sendBatch3 = true;
                    this.ctx.sendBatch3Res = res3;
                    this.ctx.sendBatch3Pd =  sender3Payload;
                });

                let cb4 = (res) => {
                    this.ctx.hasBatch1Called = true;
                    this.ctx.hasBatch1 = res && res.length >= 1;
                }
                doAwait(batchHandler.hasStoredBatch(cb4),(res) => {
                    
                });
            
            

                doAwait( batchHandler.teardown(), () => {
                    this.ctx.isclosed = true;
                });

            }].concat(PollingAssert.createPollingAssert(() => {
                let storeBatch = this.ctx.storeBatch;
                if (storeBatch && storeBatch == 3) {
                    return true;
                }
                return false;
            }, "Wait for store batch response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let sendBatch =  this.ctx.sendBatch1;
                let res = this.ctx.sendBatch1Res;
                let payload = this.ctx.sendBatch1Pd
                
                if (sendBatch) {
                    Assert.equal(res.length, 1, "response 1 should be called once");
                    let res1 = res[0];
                    Assert.equal(res1.state, eBatchSendStatus.Drop, "response 1 state should be drop");
                    Assert.ok(res1.data, "response 1 should have data");
                    Assert.equal(res1.data.criticalCnt, 1 ,"response 1 should have expected data");

                    Assert.equal(payload.length, 1, "payload 1 should be called once");
                    let payload1 = payload[0];
                    Assert.equal(payload1.criticalCnt, 1 , "payload 1 should be contain expected item");
                    return true;
                }
                return false;
            }, "Wait for send batch 1 response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let sendBatch =  this.ctx.sendBatch2;
                let res = this.ctx.sendBatch2Res;
                let payload = this.ctx.sendBatch2Pd
                
                if (sendBatch) {
                    Assert.equal(res.length, 1, "response 2 should be called once");
                    let res1 = res[0];
                    Assert.equal(res1.state, eBatchSendStatus.Retry, "response 2 state should be retry");
                    Assert.ok(res1.data, "response 2 should have data");
                    Assert.equal(res1.data.criticalCnt, 2 ,"response 2 should have expected data");

                    Assert.equal(payload.length, 1, "payload 2 should be called once");
                    let payload1 = payload[0];
                    Assert.equal(payload1.criticalCnt, 2 , "payload 2 should be contain expected item");
                    
                    return true;
                }
                return false;
            }, "Wait for send batch 2 response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let sendBatch = this.ctx.sendBatch3;
                let res = this.ctx.sendBatch3Res;
                let payload = this.ctx.sendBatch3Pd
                
                if (sendBatch) {
                    Assert.equal(res.length, 1, "response 3 should be called once");
                    let res1 = res[0];
                    Assert.equal(res1.state, eBatchSendStatus.Complete, "response 3 state should be complete");
                    Assert.ok(res1.data, "response 3 should have data");
                    Assert.equal(res1.data.criticalCnt, 3 ,"response 3 should have expected data");

                    Assert.equal(payload.length, 1, "payload 3 nshould be called once");
                    let payload1 = payload[0];
                    Assert.equal(payload1.criticalCnt, 3 , "payload 3 should be contain expected item");
                    return true;
                }
                return false;
            }, "Wait for send batch 3 response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let hasBatch1Called = this.ctx.hasBatch1Called;
                if (hasBatch1Called) {
                    let hasBatch = this.ctx.hasBatch1;
                    Assert.equal(hasBatch, false, "should not contain any events")
                    return true;
                }
                return false;
            }, "Wait for has batch1 response" + new Date().toISOString(), 15, 1000) as any).concat(PollingAssert.createPollingAssert(() => {
                let isclosed = this.ctx.isclosed;
                if (isclosed) {
                    return true;
                }
                return false;
            }, "Wait for close response" + new Date().toISOString(), 15, 1000) as any)
        });

        
    }
}


class TestHelper {
    private static _idCount = 0;

    static reset(key: string) {
        this._idCount = 0;
        AITestClass.orgLocalStorage.removeItem(key);
    }

    static mockEvent(endPointUrl: string, criticalCnt: number, setId = true): IPayloadData {
        this._idCount++;
        let payload = {
            urlString: endPointUrl,
            data: '[{"name":"test1","prop":{"prop1":"prop1"}},{"name":"test1","prop":{"prop1":"prop1"}}]',
            headers: {
                "header1": "header1val",
                "header2": "header2val"
            },
            disableXhrSync: false,
            disableFetchKeepAlive: false,
            sendReason: 1,
            id: setId? newGuid() : "",
            iKey: "testIKey",
            criticalCnt: criticalCnt
        }
        return payload;
    }
 
}
