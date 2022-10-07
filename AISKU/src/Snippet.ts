// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
"use strict";

import { IConfig } from "@microsoft/applicationinsights-common";
import { IConfiguration } from "@microsoft/applicationinsights-core-js";

/**
 *
 * @export
 * @interface Snippet
 */
export interface Snippet {
    config: IConfiguration & IConfig;
    queue?: Array<() => void>;
    sv?: string;
    version?: number;
}
