import { IConfig } from "@microsoft/applicationinsights-common";
import {
    CdnFeatureMode, FeatureOptInMode, IAppInsightsCore, IConfiguration, IFeatureOptIn
} from "@microsoft/applicationinsights-core-js";
import { isNullOrUndefined, isObject, objExtend, objForEachKey, setValueByKey } from "@nevware21/ts-utils";
import { ICfgSyncCdnConfig } from "./Interfaces/ICfgSyncCdnConfig";
import { NonOverrideCfg } from "./Interfaces/ICfgSyncConfig";

/**
 * Delete a config key in the given cfg, if the config key exists in nonOverrideConfigs and its value is set to true
 * @param cfg cfg to modify
 * @param nonOverrideConfigs nonOverrideConfigs
 * @param curLevel cur config level, starting at 0
 * @param maxLevel max config level
 * @returns new copy of modified configs
 */
export function replaceByNonOverrideCfg<T=IConfiguration & IConfig, T1=NonOverrideCfg>(cfg: T , nonOverrideConfigs: T1, curLevel: number, maxLevel: number): T {
    try {
        let exceedMaxLevel = curLevel > maxLevel;
        if (exceedMaxLevel) {
            cfg = null;
        }
        let curCfg = curLevel == 0? objExtend({}, cfg): cfg;   // only copy cfg at the begining level
        if (curCfg && nonOverrideConfigs && !exceedMaxLevel) {
            objForEachKey(curCfg, (key) => {
                let nonOverrideVal = nonOverrideConfigs[key];
                if (!!nonOverrideVal) {
                    if (isObject(curCfg[key]) && isObject(nonOverrideVal)) {
                        curCfg[key] = replaceByNonOverrideCfg(curCfg[key], nonOverrideVal, ++curLevel, maxLevel);
                    } else {
                        delete curCfg[key];
                    }
                }
            });
        }
        return curCfg;
        
    } catch(e) {
        // eslint-disable-next-line no-empty
    }

    // if errors happen, do nothing
    return cfg;
}


//                                                     CDN Mode, value = B (CDN value = B)
//                                |--------------------------------------------------------------------------|
//                                |                    | none        | disabled    | enabled     | force     |
//                                | ------------------ | ----------- | ----------- | ----------- | --------- |
// | User Mode, value = A || C    | none               | none        | disabled    | disabled    | enabled   |
// (user Value = A)               | disabled           | disabled    | disabled    | disabled    | enabled   |
// (SDK Defaults = C)             | enabled            | enabled     | disabled    | enabled     | enabled   |
//                                | none(blockCdn)     | none        | none        | none        | none      |
//                                | disabled(blockCdn) | disabled    | disabled    | disabled    | disabled  |
//                                | enabled(blockCdn)  | enabled     | enabled     | enabled     | enabled   |

//                                cdn Mode (cdn Value = B, SDK Config Defaults = C)
//                   |--------------------------------------------------------------------------|
//                   |                    | none        | disabled    | enabled     | force     |
//                   | ------------------ | ----------- | ----------- | ----------- | --------- |
// | User Mode       | none               | A || C      | C           | C           | B || C    |
// (user Value = A)  | disabled           | C           | C           | C           | B || C    |
//                   | enabled            | A || B || C | C           | A || B || C | B || C    |
//                   | none(blockCdn)     | A || C      | A || C      | A || C      | A || C    |
//                   | disabled(blockCdn) | C           | C           | C           | C         |
//                   | enabled(blockCdn)  | A || C      | A || C      | A || C      | A || C    |

export function shouldOptInFeature(field: string, cdnCfg?: ICfgSyncCdnConfig, customOptInDetails?: IFeatureOptIn) {
    
    if (!cdnCfg || !cdnCfg.enabled) {
        return null;
    }
 
    let featureOptIn= cdnCfg.featureOptIn || {};
    let cdnFeature = featureOptIn[field] || {mode: CdnFeatureMode.none};
    let cdnMode = cdnFeature.mode;
    let cdnFeatureVal = cdnFeature.value;
    let customOptIn = customOptInDetails || {};
    let customFeature = customOptIn[field] || {mode: FeatureOptInMode.disable}; // default custom mode is disable
    let customMode = customFeature.mode;
    let customFeatureVal = customFeature.cfgValue;
    let blockCdn = !!customFeature.blockCdnCfg;

    if (blockCdn) {
        return customMode == FeatureOptInMode.disable? null : customFeatureVal;
    }

    if (cdnMode === CdnFeatureMode.force) {
        return cdnFeatureVal;
    }

    if (cdnMode === CdnFeatureMode.disable || customMode === FeatureOptInMode.disable) {
        return null;
    }

    if (customMode === FeatureOptInMode.enable) {
        return customFeatureVal || cdnFeatureVal;
    }

    if (cdnMode === CdnFeatureMode.none && customMode === FeatureOptInMode.none) {
        return customFeatureVal;
    }
    
    return null;

}



// helper function to get cdn config with opt-in features
export function getConfigFromCdn(cdnCfg: ICfgSyncCdnConfig, core: IAppInsightsCore) {
    try {
        if (!cdnCfg || !cdnCfg.enabled) {
            return null;
        }
        if (!cdnCfg.featureOptIn) {
            return cdnCfg.config;
        }
        let optInMap = cdnCfg.featureOptIn;
        let cdnConfig = cdnCfg.config || {};
        objForEachKey(optInMap, (key) => {
            let featureVal = shouldOptInFeature(key, cdnCfg, core.config.featureOptIn);
            if (!isNullOrUndefined(featureVal)) {
                objForEachKey(featureVal, (config, val) => {
                    setValueByKey(cdnConfig, config, val);
                });
            }
        });
        return cdnConfig;
    } catch (e) {
        // eslint-disable-next-line no-empty
    }
    return null;
}
