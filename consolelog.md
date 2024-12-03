Found configuration in C:\Users\siyuniu\Desktop\ai-js-v3\ApplicationInsights-JS\rush.json


[1mRush Multi-Project Build Tool 5.130.3[33m[39m[22m[36m - https://rushjs.io[39m
Node.js version is 18.5.0 (pre-LTS)


Your version of Node.js (18.5.0) is not a Long-Term Support (LTS) release. These versions frequently have bugs. Please consider installing a stable release.

Starting "rush rebuild"

[33mWarning: Phantom "node_modules" folders were found. This defeats Rush's
protection against NPM phantom dependencies and may cause confusing build
errors. It is recommended to delete these folders:[39m
[33m"C:\Users\siyuniu\Desktop\ai-js-v3\ApplicationInsights-JS\node_modules"[39m
[33m"C:\Users\siyuniu\node_modules"[39m

Analyzing repo state... DONE (0.26 seconds)

Executing a maximum of 7 simultaneous processes...

==[ applicationinsights-js-release-tools ]========================[ 1 of 30 ]==
"applicationinsights-js-release-tools" did not define any work.

==[ @microsoft/applicationinsights-rollup-plugin-uglify3-js ]=====[ 2 of 30 ]==

./dist-es5/uglify3-js.js ΓåÆ ./dist/es5/node/rollup-plugin-uglify3-js.js...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
uglify-js (imported by "dist-es5/uglify3-js.js")
(!) Missing global variable name
https://rollupjs.org/configuration-options/#output-globals
Use "output.globals" to specify browser global variable names corresponding to external modules:
uglify-js (guessing "UglifyJs")
created ./dist/es5/node/rollup-plugin-uglify3-js.js in 42ms

./dist-es5/uglify3-js.js ΓåÆ ./dist/es5/esm/rollup-plugin-uglify3-js.js...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
uglify-js (imported by "dist-es5/uglify3-js.js")
created ./dist/es5/esm/rollup-plugin-uglify3-js.js in 25ms
"@microsoft/applicationinsights-rollup-plugin-uglify3-js" completed with warnings in 1 minute 21.1 seconds.

==[ applicationinsights-web-config ]==============================[ 3 of 30 ]==
"applicationinsights-web-config" completed successfully in 36.71 seconds.

==[ @microsoft/ai-test-framework ]================================[ 4 of 30 ]==

dist-es5/ai-test-framework.js ΓåÆ dist/es5/ai-test-framework.js...
(!) Use of eval is strongly discouraged
https://rollupjs.org/troubleshooting/#avoiding-eval
../../temp/node_modules/sinon/pkg/sinon-esm.js
20144:         } else {
20145:             /* eslint no-eval: "off" */
20146:             eval(timer.func);
                   ^
20147:         }
20148:     }
...and 1 other occurrence
created dist/es5/ai-test-framework.js in 3.3s
"@microsoft/ai-test-framework" completed with warnings in 1 minute 19.4 seconds.

==[ @microsoft/applicationinsights-rollup-es5 ]===================[ 5 of 30 ]==

./dist-es5/applicationinsights-rollup-es5.js ΓåÆ ./dist/es5/node/applicationinsights-rollup-es5.min.js...
created ./dist/es5/node/applicationinsights-rollup-es5.min.js in 1s

./dist-es5/applicationinsights-rollup-es5.js ΓåÆ ./dist/es5/node/applicationinsights-rollup-es5.js...
created ./dist/es5/node/applicationinsights-rollup-es5.js in 233ms

./dist-es5/applicationinsights-rollup-es5.js ΓåÆ ./dist/es5/esm/applicationinsights-rollup-es5.min.js...
created ./dist/es5/esm/applicationinsights-rollup-es5.min.js in 185ms

./dist-es5/applicationinsights-rollup-es5.js ΓåÆ ./dist/es5/esm/applicationinsights-rollup-es5.js...
created ./dist/es5/esm/applicationinsights-rollup-es5.js in 162ms
"@microsoft/applicationinsights-rollup-es5" completed with warnings in 17.10 seconds.

==[ @microsoft/applicationinsights-shims ]========================[ 6 of 30 ]==

./dist-es5/applicationinsights-shims.js ΓåÆ ./browser/applicationinsights-shims.min.js...
created ./browser/applicationinsights-shims.min.js in 765ms

./dist-es5/applicationinsights-shims.js ΓåÆ ./browser/applicationinsights-shims.js...
created ./browser/applicationinsights-shims.js in 265ms

./dist-es5/applicationinsights-shims.js ΓåÆ ./dist/es5/esm/applicationinsights-shims.min.js...
created ./dist/es5/esm/applicationinsights-shims.min.js in 238ms

./dist-es5/applicationinsights-shims.js ΓåÆ ./dist/es5/esm/applicationinsights-shims.js...
created ./dist/es5/esm/applicationinsights-shims.js in 222ms

./dist-es5/applicationinsights-shims.js ΓåÆ ./dist/es5/umd/applicationinsights-shims.min.js...
created ./dist/es5/umd/applicationinsights-shims.min.js in 466ms

./dist-es5/applicationinsights-shims.js ΓåÆ ./dist/es5/umd/applicationinsights-shims.js...
created ./dist/es5/umd/applicationinsights-shims.js in 226ms
"@microsoft/applicationinsights-shims" completed with warnings in 22.50 seconds.

==[ @microsoft/applicationinsights-core-js ]======================[ 7 of 30 ]==

dist-es5/applicationinsights-core-js.js ΓåÆ dist/es5/applicationinsights-core-js.min.js...
created dist/es5/applicationinsights-core-js.min.js in 4.9s

dist-es5/applicationinsights-core-js.js ΓåÆ dist/es5/applicationinsights-core-js.js...
created dist/es5/applicationinsights-core-js.js in 1.2s

dist-es5/applicationinsights-core-js.js ΓåÆ browser/es5/applicationinsights-core-js.min.js...
created browser/es5/applicationinsights-core-js.min.js in 3.7s

dist-es5/applicationinsights-core-js.js ΓåÆ browser/es5/applicationinsights-core-js.js...
created browser/es5/applicationinsights-core-js.js in 1.6s

dist-es5/applicationinsights-core-js.js ΓåÆ browser/es5/applicationinsights-core-js.cjs.min.js...
created browser/es5/applicationinsights-core-js.cjs.min.js in 3.1s

dist-es5/applicationinsights-core-js.js ΓåÆ browser/es5/applicationinsights-core-js.cjs.js...
created browser/es5/applicationinsights-core-js.cjs.js in 1.2s

dist-es5/applicationinsights-core-js.js ΓåÆ browser/es5/applicationinsights-core-js.gbl.min.js...
created browser/es5/applicationinsights-core-js.gbl.min.js in 3s

dist-es5/applicationinsights-core-js.js ΓåÆ browser/es5/applicationinsights-core-js.gbl.js...
created browser/es5/applicationinsights-core-js.gbl.js in 1.2s
Warning: build/types/JavaScriptSDK.Enums/EnumHelperFuncs.d.ts:4:57 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK.Enums/EnumHelperFuncs.d.ts:4:77 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK.Enums/EnumHelperFuncs.d.ts:12:96 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK.Enums/EnumHelperFuncs.d.ts:12:118 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK.Interfaces/IConfiguration.d.ts:95:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: build/types/JavaScriptSDK.Interfaces/IConfiguration.d.ts:95:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: build/types/JavaScriptSDK.Interfaces/IConfiguration.d.ts:96:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: build/types/JavaScriptSDK.Interfaces/IConfiguration.d.ts:96:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: build/types/JavaScriptSDK.Interfaces/IDiagnosticLogger.d.ts:24:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK.Interfaces/IFeatureOptIn.d.ts:11:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK.Interfaces/IFeatureOptIn.d.ts:11:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/JavaScriptSDK.Interfaces/IFeatureOptIn.d.ts:20:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK.Interfaces/IFeatureOptIn.d.ts:20:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/JavaScriptSDK.Interfaces/ISenderPostManager.d.ts:67:63 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: build/types/JavaScriptSDK/AppInsightsCore.d.ts:162:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:23:11 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:28:26 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:29:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:34:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:39:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:44:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:53:26 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:54:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:73:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:74:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:80:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:86:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:87:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:30:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:32:24 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:52:32 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:54:24 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:62:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:63:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:65:21 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:65:13 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:70:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:72:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/HelperFuncs.d.ts:57:79 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK/HelperFuncs.d.ts:58:61 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:492:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:493:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:495:4 - (tsdoc-unsupported-tag) The TSDoc tag "@remarks" is not supported by this tool
@nevware21/ts-utils/dist/types/ts-utils.d.ts:883:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:884:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2373:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2902:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2903:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2903:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2938:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2939:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2939:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2991:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2992:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2992:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3088:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3089:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3089:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3122:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3123:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3123:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3372:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3373:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3373:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3390:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3391:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3391:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3453:1 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/applicationinsights-core-js" does not have an export "isStrictUndefined"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4107:1 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/applicationinsights-core-js" does not have an export "objDefine"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4107:1 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/applicationinsights-core-js" does not have an export "ObjDefinePropDescriptor"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4282:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4283:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:6203:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK.Enums/EnumHelperFuncs.d.ts:4:57 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK.Enums/EnumHelperFuncs.d.ts:4:77 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK.Enums/EnumHelperFuncs.d.ts:12:96 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK.Enums/EnumHelperFuncs.d.ts:12:118 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK.Interfaces/IConfiguration.d.ts:95:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: build/types/JavaScriptSDK.Interfaces/IConfiguration.d.ts:95:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: build/types/JavaScriptSDK.Interfaces/IConfiguration.d.ts:96:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: build/types/JavaScriptSDK.Interfaces/IConfiguration.d.ts:96:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: build/types/JavaScriptSDK.Interfaces/IDiagnosticLogger.d.ts:24:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK.Interfaces/IFeatureOptIn.d.ts:11:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK.Interfaces/IFeatureOptIn.d.ts:11:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/JavaScriptSDK.Interfaces/IFeatureOptIn.d.ts:20:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK.Interfaces/IFeatureOptIn.d.ts:20:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/JavaScriptSDK.Interfaces/ISenderPostManager.d.ts:67:63 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: build/types/JavaScriptSDK/AppInsightsCore.d.ts:162:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:23:11 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:28:26 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:29:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:34:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:39:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:44:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:53:26 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:54:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:73:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:74:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:80:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:86:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/DiagnosticLogger.d.ts:87:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:30:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:32:24 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:52:32 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:54:24 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:62:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:63:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:65:21 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:65:13 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:70:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:72:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/HelperFuncs.d.ts:57:79 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK/HelperFuncs.d.ts:58:61 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
"@microsoft/applicationinsights-core-js" completed with warnings in 1 minute 19.8 seconds.

==[ @microsoft/1ds-core-js ]======================================[ 8 of 30 ]==

dist-es5/Index.js ΓåÆ dist/es5/ms.core.min.js...
created dist/es5/ms.core.min.js in 11.1s

dist-es5/Index.js ΓåÆ dist/es5/ms.core.js...
created dist/es5/ms.core.js in 3.7s

dist-es5/Index.js ΓåÆ bundle/es5/ms.core.min.js...
created bundle/es5/ms.core.min.js in 11s

dist-es5/Index.js ΓåÆ bundle/es5/ms.core.js...
created bundle/es5/ms.core.js in 2.9s

dist-es5/Index.js ΓåÆ bundle/es5/ms.core-4.3.4.min.js...
created bundle/es5/ms.core-4.3.4.min.js in 9.9s

dist-es5/Index.js ΓåÆ bundle/es5/ms.core-4.3.4.js...
created bundle/es5/ms.core-4.3.4.js in 2.4s

dist-es5/Index.js ΓåÆ bundle/es5/ms.core.gbl.min.js...
created bundle/es5/ms.core.gbl.min.js in 7.1s

dist-es5/Index.js ΓåÆ bundle/es5/ms.core.gbl.js...
created bundle/es5/ms.core.gbl.js in 2.7s

dist-es5/Index.js ΓåÆ bundle/es5/ms.core-4.3.4.gbl.min.js...
created bundle/es5/ms.core-4.3.4.gbl.min.js in 6.7s

dist-es5/Index.js ΓåÆ bundle/es5/ms.core-4.3.4.gbl.js...
created bundle/es5/ms.core-4.3.4.gbl.js in 2.3s
Warning: build/types/Utils.d.ts:67:102 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/Utils.d.ts:67:65 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/Utils.d.ts:108:33 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Utils.d.ts:110:21 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:492:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:493:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:495:4 - (tsdoc-unsupported-tag) The TSDoc tag "@remarks" is not supported by this tool
@nevware21/ts-utils/dist/types/ts-utils.d.ts:825:22 - (ae-forgotten-export) The symbol "ArrMapCallbackFn" needs to be exported by the entry point Index.d.ts
@nevware21/ts-utils/dist/types/ts-utils.d.ts:883:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:884:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:915:22 - (ae-forgotten-export) The symbol "ArrReduceCallbackFn" needs to be exported by the entry point Index.d.ts
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2373:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2902:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2903:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2903:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2938:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2939:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2939:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2991:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2992:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2992:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3088:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3089:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3089:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3122:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3123:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3123:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3390:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3391:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3391:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3453:1 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/1ds-core-js" does not have an export "isStrictUndefined"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4107:1 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/1ds-core-js" does not have an export "objDefine"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4107:1 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/1ds-core-js" does not have an export "ObjDefinePropDescriptor"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4282:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4283:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:6203:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/AppInsightsCore.d.ts:20:5 - (ae-forgotten-export) The symbol "ITimerHandler" needs to be exported by the entry point Index.d.ts
Warning: build/types/Utils.d.ts:67:102 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/Utils.d.ts:67:65 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/Utils.d.ts:108:33 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Utils.d.ts:110:21 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:78:22 - (ae-forgotten-export) The symbol "EnumValue" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:84:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:85:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:87:21 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:87:13 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:286:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:398:5 - (ae-forgotten-export) The symbol "IProcessTelemetryUpdateContext" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:571:1 - (ae-internal-missing-underscore) The name "convertAllHeadersToMap" should be prefixed with an underscore because the declaration is marked as @internal
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:596:57 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:596:77 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:621:1 - (ae-forgotten-export) The symbol "ITraceParent" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:654:32 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:656:24 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:673:11 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:678:26 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:679:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:684:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:689:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:694:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:703:26 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:704:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:933:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:935:24 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:960:22 - (ae-forgotten-export) The symbol "eEventsDiscardedReason" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1067:1 - (ae-internal-missing-underscore) The name "getDynamicConfigHandler" should be prefixed with an underscore because the declaration is marked as @internal
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1227:5 - (ae-forgotten-export) The symbol "ILoadedPlugin" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1316:5 - (ae-forgotten-export) The symbol "IResponseError" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1661:5 - (ae-forgotten-export) The symbol "IFeatureOptIn" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1680:5 - (ae-forgotten-export) The symbol "IExceptionConfig" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2600:1 - (ae-forgotten-export) The symbol "IBaseProcessingContext" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2747:63 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2954:1 - (ae-forgotten-export) The symbol "ITelemetryProcessor" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3018:5 - (ae-forgotten-export) The symbol "TelemetryUpdateReason" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3188:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3189:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3526:79 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3527:61 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3569:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3571:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3651:1 - (ae-internal-missing-underscore) The name "SenderPostManager" should be prefixed with an underscore because the declaration is marked as @internal
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3847:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3848:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3898:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:492:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:493:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:495:4 - (tsdoc-unsupported-tag) The TSDoc tag "@remarks" is not supported by this tool
@nevware21/ts-utils/dist/types/ts-utils.d.ts:825:22 - (ae-forgotten-export) The symbol "ArrMapCallbackFn" needs to be exported by the entry point Index.d.ts
@nevware21/ts-utils/dist/types/ts-utils.d.ts:883:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:884:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:915:22 - (ae-forgotten-export) The symbol "ArrReduceCallbackFn" needs to be exported by the entry point Index.d.ts
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2373:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2902:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2903:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2903:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2938:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2939:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2939:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2991:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2992:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:2992:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3088:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3089:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3089:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3122:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3123:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3123:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3390:11 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3391:20 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3391:12 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3453:1 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/1ds-core-js" does not have an export "isStrictUndefined"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4107:1 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/1ds-core-js" does not have an export "objDefine"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4107:1 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/1ds-core-js" does not have an export "ObjDefinePropDescriptor"
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4282:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:4283:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:6203:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/AppInsightsCore.d.ts:20:5 - (ae-forgotten-export) The symbol "ITimerHandler" needs to be exported by the entry point Index.d.ts
Warning: build/types/Utils.d.ts:67:102 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/Utils.d.ts:67:65 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/Utils.d.ts:108:33 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Utils.d.ts:110:21 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:78:22 - (ae-forgotten-export) The symbol "EnumValue" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:84:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:85:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:87:21 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:87:13 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:286:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:398:5 - (ae-forgotten-export) The symbol "IProcessTelemetryUpdateContext" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:571:1 - (ae-internal-missing-underscore) The name "convertAllHeadersToMap" should be prefixed with an underscore because the declaration is marked as @internal
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:596:57 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:596:77 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:621:1 - (ae-forgotten-export) The symbol "ITraceParent" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:654:32 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:656:24 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:673:11 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:678:26 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:679:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:684:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:689:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:694:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:703:26 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:704:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:715:5 - (ae-forgotten-export) The symbol "IPromise" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:933:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:935:24 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:960:22 - (ae-forgotten-export) The symbol "eEventsDiscardedReason" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1067:1 - (ae-internal-missing-underscore) The name "getDynamicConfigHandler" should be prefixed with an underscore because the declaration is marked as @internal
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1227:5 - (ae-forgotten-export) The symbol "ILoadedPlugin" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1316:5 - (ae-forgotten-export) The symbol "IResponseError" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1661:5 - (ae-forgotten-export) The symbol "IFeatureOptIn" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1680:5 - (ae-forgotten-export) The symbol "IExceptionConfig" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2600:1 - (ae-forgotten-export) The symbol "IBaseProcessingContext" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2747:63 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2954:1 - (ae-forgotten-export) The symbol "ITelemetryProcessor" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3018:5 - (ae-forgotten-export) The symbol "TelemetryUpdateReason" needs to be exported by the entry point Index.d.ts
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3188:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3189:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3526:79 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3527:61 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3569:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3571:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3651:1 - (ae-internal-missing-underscore) The name "SenderPostManager" should be prefixed with an underscore because the declaration is marked as @internal
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3847:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3848:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3898:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
"@microsoft/1ds-core-js" completed with warnings in 2 minutes 49.6 seconds.

==[ @microsoft/applicationinsights-perfmarkmeasure-js ]===========[ 9 of 30 ]==

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ dist/es5/applicationinsights-perfmarkmeasure-js.min.js...
created dist/es5/applicationinsights-perfmarkmeasure-js.min.js in 4.2s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ dist/es5/applicationinsights-perfmarkmeasure-js.js...
created dist/es5/applicationinsights-perfmarkmeasure-js.js in 2s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.min.js...
created browser/es5/ai.prfmm-mgr.3.min.js in 4.2s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.js...
created browser/es5/ai.prfmm-mgr.3.js in 3.2s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.3.4.min.js...
created browser/es5/ai.prfmm-mgr.3.3.4.min.js in 3.2s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.3.4.js...
created browser/es5/ai.prfmm-mgr.3.3.4.js in 2.4s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.cjs.min.js...
created browser/es5/ai.prfmm-mgr.3.cjs.min.js in 3s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.cjs.js...
created browser/es5/ai.prfmm-mgr.3.cjs.js in 3.7s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.3.4.cjs.min.js...
created browser/es5/ai.prfmm-mgr.3.3.4.cjs.min.js in 5.6s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.3.4.cjs.js...
created browser/es5/ai.prfmm-mgr.3.3.4.cjs.js in 2.7s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.gbl.min.js...
created browser/es5/ai.prfmm-mgr.3.gbl.min.js in 3s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.gbl.js...
created browser/es5/ai.prfmm-mgr.3.gbl.js in 3.4s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.3.4.gbl.min.js...
created browser/es5/ai.prfmm-mgr.3.3.4.gbl.min.js in 3.4s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.3.4.gbl.js...
created browser/es5/ai.prfmm-mgr.3.3.4.gbl.js in 2.9s
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-perfmarkmeasure-js.namespaced.api.md
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-perfmarkmeasure-js.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
"@microsoft/applicationinsights-perfmarkmeasure-js" completed with warnings in 1 minute 49.4 seconds.

==[ @microsoft/applicationinsights-common ]======================[ 10 of 30 ]==

dist-es5/applicationinsights-common.js ΓåÆ dist/es5/applicationinsights-common.min.js...
created dist/es5/applicationinsights-common.min.js in 9.5s

dist-es5/applicationinsights-common.js ΓåÆ dist/es5/applicationinsights-common.js...
created dist/es5/applicationinsights-common.js in 3.3s

dist-es5/applicationinsights-common.js ΓåÆ browser/es5/applicationinsights-common.min.js...
created browser/es5/applicationinsights-common.min.js in 9.1s

dist-es5/applicationinsights-common.js ΓåÆ browser/es5/applicationinsights-common.js...
created browser/es5/applicationinsights-common.js in 4.5s

dist-es5/applicationinsights-common.js ΓåÆ browser/es5/applicationinsights-common.cjs.min.js...
created browser/es5/applicationinsights-common.cjs.min.js in 5.8s

dist-es5/applicationinsights-common.js ΓåÆ browser/es5/applicationinsights-common.cjs.js...
created browser/es5/applicationinsights-common.cjs.js in 4.2s

dist-es5/applicationinsights-common.js ΓåÆ browser/es5/applicationinsights-common.gbl.min.js...
created browser/es5/applicationinsights-common.gbl.min.js in 6.5s

dist-es5/applicationinsights-common.js ΓåÆ browser/es5/applicationinsights-common.gbl.js...
created browser/es5/applicationinsights-common.gbl.js in 3.3s
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-common.namespaced.api.md
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-common.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-common" completed with warnings in 1 minute 56.8 seconds.

==[ @microsoft/applicationinsights-offlinechannel-js ]===========[ 11 of 30 ]==

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ dist/es5/applicationinsights-offlinechannel-js.min.js...
created dist/es5/applicationinsights-offlinechannel-js.min.js in 20.1s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ dist/es5/applicationinsights-offlinechannel-js.js...
created dist/es5/applicationinsights-offlinechannel-js.js in 8.4s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.min.js...
created browser/es5/applicationinsights-offlinechannel-js.0.min.js in 14.3s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.js...
created browser/es5/applicationinsights-offlinechannel-js.0.js in 7.3s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.3.4.min.js...
created browser/es5/applicationinsights-offlinechannel-js.0.3.4.min.js in 15.1s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.3.4.js...
created browser/es5/applicationinsights-offlinechannel-js.0.3.4.js in 8.4s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.cjs.min.js...
created browser/es5/applicationinsights-offlinechannel-js.0.cjs.min.js in 12.7s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.cjs.js...
created browser/es5/applicationinsights-offlinechannel-js.0.cjs.js in 7.8s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.3.4.cjs.min.js...
created browser/es5/applicationinsights-offlinechannel-js.0.3.4.cjs.min.js in 11.7s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.3.4.cjs.js...
created browser/es5/applicationinsights-offlinechannel-js.0.3.4.cjs.js in 7s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.gbl.min.js...
created browser/es5/applicationinsights-offlinechannel-js.0.gbl.min.js in 15.2s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.gbl.js...
created browser/es5/applicationinsights-offlinechannel-js.0.gbl.js in 6.5s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.3.4.gbl.min.js...
created browser/es5/applicationinsights-offlinechannel-js.0.3.4.gbl.min.js in 12.3s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.3.4.gbl.js...
created browser/es5/applicationinsights-offlinechannel-js.0.3.4.gbl.js in 8.1s
Warning: build/types/InMemoryBatch.d.ts:11:48 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IInMemoryBatch.d.ts:20:48 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IOfflineProvider.d.ts:60:21 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IOfflineProvider.d.ts:77:58 - (tsdoc-malformed-html-name) Invalid HTML element: Expecting an HTML name
Warning: build/types/Interfaces/IOfflineProvider.d.ts:78:55 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Providers/WebStorageProvider.d.ts:16:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/Sender.d.ts:26:30 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/Sender.d.ts:31:5 - (ae-forgotten-export) The symbol "SenderFunction" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/InMemoryBatch.d.ts:4:5 - (ae-forgotten-export) The symbol "IDiagnosticLogger" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/InMemoryBatch.d.ts:11:48 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IInMemoryBatch.d.ts:10:5 - (ae-forgotten-export) The symbol "ITelemetryItem" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IInMemoryBatch.d.ts:20:48 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IOfflineBatch.d.ts:12:5 - (ae-forgotten-export) The symbol "IOfflineListener" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineBatch.d.ts:30:22 - (ae-forgotten-export) The symbol "EnumValue" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineBatch.d.ts:60:5 - (ae-forgotten-export) The symbol "IPayloadData" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineBatch.d.ts:61:5 - (ae-forgotten-export) The symbol "IXHROverride" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineBatch.d.ts:64:5 - (ae-forgotten-export) The symbol "IProcessTelemetryUnloadContext" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineBatch.d.ts:64:5 - (ae-forgotten-export) The symbol "ITelemetryUnloadState" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineProvider.d.ts:45:5 - (ae-forgotten-export) The symbol "EventPersistence" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineProvider.d.ts:60:21 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IOfflineProvider.d.ts:77:58 - (tsdoc-malformed-html-name) Invalid HTML element: Expecting an HTML name
Warning: build/types/Interfaces/IOfflineProvider.d.ts:78:55 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IOfflineProvider.d.ts:179:5 - (ae-forgotten-export) The symbol "IProcessTelemetryContext" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineProvider.d.ts:197:5 - (ae-forgotten-export) The symbol "INotificationManager" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:4:1 - (ae-forgotten-export) The symbol "BaseTelemetryPlugin" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:4:1 - (ae-forgotten-export) The symbol "IChannelControls" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:16:5 - (ae-forgotten-export) The symbol "IConfiguration" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:16:5 - (ae-forgotten-export) The symbol "IConfig" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:16:5 - (ae-forgotten-export) The symbol "IAppInsightsCore" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:16:5 - (ae-forgotten-export) The symbol "IPlugin" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:16:5 - (ae-forgotten-export) The symbol "ITelemetryPluginChain" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:43:5 - (ae-forgotten-export) The symbol "SendRequestReason" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Providers/IndexDbProvider.d.ts:32:5 - (ae-forgotten-export) The symbol "IUnloadHookContainer" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Providers/IndexDbProvider.d.ts:46:5 - (ae-forgotten-export) The symbol "IPromise" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Providers/WebStorageProvider.d.ts:16:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/Sender.d.ts:26:30 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/Sender.d.ts:31:5 - (ae-forgotten-export) The symbol "SenderFunction" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/InMemoryBatch.d.ts:4:5 - (ae-forgotten-export) The symbol "IDiagnosticLogger" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/InMemoryBatch.d.ts:11:48 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IInMemoryBatch.d.ts:10:5 - (ae-forgotten-export) The symbol "ITelemetryItem" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IInMemoryBatch.d.ts:20:48 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IOfflineBatch.d.ts:12:5 - (ae-forgotten-export) The symbol "IOfflineListener" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineBatch.d.ts:30:22 - (ae-forgotten-export) The symbol "EnumValue" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineBatch.d.ts:60:5 - (ae-forgotten-export) The symbol "IPayloadData" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineBatch.d.ts:61:5 - (ae-forgotten-export) The symbol "IXHROverride" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineBatch.d.ts:64:5 - (ae-forgotten-export) The symbol "IProcessTelemetryUnloadContext" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineBatch.d.ts:64:5 - (ae-forgotten-export) The symbol "ITelemetryUnloadState" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineProvider.d.ts:45:5 - (ae-forgotten-export) The symbol "EventPersistence" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineProvider.d.ts:60:21 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IOfflineProvider.d.ts:77:58 - (tsdoc-malformed-html-name) Invalid HTML element: Expecting an HTML name
Warning: build/types/Interfaces/IOfflineProvider.d.ts:78:55 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/Interfaces/IOfflineProvider.d.ts:179:5 - (ae-forgotten-export) The symbol "IProcessTelemetryContext" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Interfaces/IOfflineProvider.d.ts:197:5 - (ae-forgotten-export) The symbol "INotificationManager" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:4:1 - (ae-forgotten-export) The symbol "BaseTelemetryPlugin" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:4:1 - (ae-forgotten-export) The symbol "IChannelControls" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:16:5 - (ae-forgotten-export) The symbol "IConfiguration" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:16:5 - (ae-forgotten-export) The symbol "IConfig" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:16:5 - (ae-forgotten-export) The symbol "IAppInsightsCore" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:16:5 - (ae-forgotten-export) The symbol "IPlugin" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:16:5 - (ae-forgotten-export) The symbol "ITelemetryPluginChain" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/OfflineChannel.d.ts:43:5 - (ae-forgotten-export) The symbol "SendRequestReason" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Providers/IndexDbProvider.d.ts:32:5 - (ae-forgotten-export) The symbol "IUnloadHookContainer" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Providers/IndexDbProvider.d.ts:46:5 - (ae-forgotten-export) The symbol "IPromise" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
Warning: build/types/Providers/WebStorageProvider.d.ts:16:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/Sender.d.ts:26:30 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/Sender.d.ts:31:5 - (ae-forgotten-export) The symbol "SenderFunction" needs to be exported by the entry point applicationinsights-offlinechannel-js.d.ts
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-offlinechannel-js" completed with warnings in 4 minutes 48.4 seconds.

==[ @microsoft/applicationinsights-dependencies-js ]=============[ 12 of 30 ]==

dist-es5/applicationinsights-dependencies-js.js ΓåÆ dist/es5/applicationinsights-dependencies-js.min.js...
created dist/es5/applicationinsights-dependencies-js.min.js in 14.9s

dist-es5/applicationinsights-dependencies-js.js ΓåÆ dist/es5/applicationinsights-dependencies-js.js...
created dist/es5/applicationinsights-dependencies-js.js in 8.4s

dist-es5/applicationinsights-dependencies-js.js ΓåÆ browser/es5/applicationinsights-dependencies-js.min.js...
created browser/es5/applicationinsights-dependencies-js.min.js in 15.5s

dist-es5/applicationinsights-dependencies-js.js ΓåÆ browser/es5/applicationinsights-dependencies-js.js...
created browser/es5/applicationinsights-dependencies-js.js in 7.8s

dist-es5/applicationinsights-dependencies-js.js ΓåÆ browser/es5/applicationinsights-dependencies-js.cjs.min.js...
created browser/es5/applicationinsights-dependencies-js.cjs.min.js in 11s

dist-es5/applicationinsights-dependencies-js.js ΓåÆ browser/es5/applicationinsights-dependencies-js.cjs.js...
created browser/es5/applicationinsights-dependencies-js.cjs.js in 8.5s

dist-es5/applicationinsights-dependencies-js.js ΓåÆ browser/es5/applicationinsights-dependencies-js.gbl.min.js...
created browser/es5/applicationinsights-dependencies-js.gbl.min.js in 12.3s

dist-es5/applicationinsights-dependencies-js.js ΓåÆ browser/es5/applicationinsights-dependencies-js.gbl.js...
created browser/es5/applicationinsights-dependencies-js.gbl.js in 7.2s
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-dependencies-js.namespaced.api.md
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-dependencies-js.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

==[ @microsoft/applicationinsights-teechannel-js ]===============[ 13 of 30 ]==
"@microsoft/applicationinsights-dependencies-js" completed with warnings in 3 minutes 5.3 seconds.

dist-es5/applicationinsights-teechannel-js.js ΓåÆ dist/es5/applicationinsights-teechannel-js.min.js...
created dist/es5/applicationinsights-teechannel-js.min.js in 10.8s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ dist/es5/applicationinsights-teechannel-js.js...
created dist/es5/applicationinsights-teechannel-js.js in 5.2s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.min.js...
created browser/es5/applicationinsights-teechannel-js.3.min.js in 10.2s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.js...
created browser/es5/applicationinsights-teechannel-js.3.js in 5.7s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.3.4.min.js...
created browser/es5/applicationinsights-teechannel-js.3.3.4.min.js in 7.8s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.3.4.js...
created browser/es5/applicationinsights-teechannel-js.3.3.4.js in 5.8s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.cjs.min.js...
created browser/es5/applicationinsights-teechannel-js.3.cjs.min.js in 6.8s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.cjs.js...
created browser/es5/applicationinsights-teechannel-js.3.cjs.js in 4.5s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.3.4.cjs.min.js...
created browser/es5/applicationinsights-teechannel-js.3.3.4.cjs.min.js in 6.8s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.3.4.cjs.js...
created browser/es5/applicationinsights-teechannel-js.3.3.4.cjs.js in 5.3s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.gbl.min.js...
created browser/es5/applicationinsights-teechannel-js.3.gbl.min.js in 8.1s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.gbl.js...
created browser/es5/applicationinsights-teechannel-js.3.gbl.js in 4.5s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.3.4.gbl.min.js...
created browser/es5/applicationinsights-teechannel-js.3.3.4.gbl.min.js in 7.6s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.3.4.gbl.js...
created browser/es5/applicationinsights-teechannel-js.3.3.4.gbl.js in 4.5s
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-teechannel-js.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-teechannel-js.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-teechannel-js" completed with warnings in 3 minutes 17.6 seconds.

==[ @microsoft/applicationinsights-cfgsync-js ]==================[ 14 of 30 ]==

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ dist/es5/applicationinsights-cfgsync-js.min.js...
created dist/es5/applicationinsights-cfgsync-js.min.js in 12.1s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ dist/es5/applicationinsights-cfgsync-js.js...
created dist/es5/applicationinsights-cfgsync-js.js in 5.9s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.min.js...
created browser/es5/ai.cfgsync.3.min.js in 11.9s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.js...
created browser/es5/ai.cfgsync.3.js in 5.4s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.3.4.min.js...
created browser/es5/ai.cfgsync.3.3.4.min.js in 9.7s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.3.4.js...
created browser/es5/ai.cfgsync.3.3.4.js in 5.1s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.cjs.min.js...
created browser/es5/ai.cfgsync.3.cjs.min.js in 7.8s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.cjs.js...
created browser/es5/ai.cfgsync.3.cjs.js in 5.3s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.3.4.cjs.min.js...
created browser/es5/ai.cfgsync.3.3.4.cjs.min.js in 7.6s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.3.4.cjs.js...
created browser/es5/ai.cfgsync.3.3.4.cjs.js in 5s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.gbl.min.js...
created browser/es5/ai.cfgsync.3.gbl.min.js in 7.8s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.gbl.js...
created browser/es5/ai.cfgsync.3.gbl.js in 4.9s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.3.4.gbl.min.js...
created browser/es5/ai.cfgsync.3.3.4.gbl.min.js in 7.5s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.3.4.gbl.js...
created browser/es5/ai.cfgsync.3.3.4.gbl.js in 4.5s
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-cfgsync-js.namespaced.api.md
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-cfgsync-js.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-cfgsync-js" completed with warnings in 3 minutes 22.8 seconds.

==[ @microsoft/applicationinsights-properties-js ]===============[ 15 of 30 ]==

dist-es5/applicationinsights-properties-js.js ΓåÆ dist/es5/applicationinsights-properties-js.min.js...
created dist/es5/applicationinsights-properties-js.min.js in 14.1s

dist-es5/applicationinsights-properties-js.js ΓåÆ dist/es5/applicationinsights-properties-js.js...
created dist/es5/applicationinsights-properties-js.js in 9.5s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.min.js...
created browser/es5/ai.props.3.min.js in 13.2s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.js...
created browser/es5/ai.props.3.js in 7.7s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.3.4.min.js...
created browser/es5/ai.props.3.3.4.min.js in 11.5s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.3.4.js...
created browser/es5/ai.props.3.3.4.js in 7s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.cjs.min.js...
created browser/es5/ai.props.3.cjs.min.js in 10.3s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.cjs.js...
created browser/es5/ai.props.3.cjs.js in 6.5s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.3.4.cjs.min.js...
created browser/es5/ai.props.3.3.4.cjs.min.js in 9.4s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.3.4.cjs.js...
created browser/es5/ai.props.3.3.4.cjs.js in 7.3s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.gbl.min.js...
created browser/es5/ai.props.3.gbl.min.js in 9.4s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.gbl.js...
created browser/es5/ai.props.3.gbl.js in 6.6s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.3.4.gbl.min.js...
created browser/es5/ai.props.3.3.4.gbl.min.js in 10s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.3.4.gbl.js...
created browser/es5/ai.props.3.3.4.gbl.js in 6.8s
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-properties-js.namespaced.api.md
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-properties-js.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-properties-js" completed with warnings in 3 minutes 51.3 seconds.

dist-es5/applicationinsights-osplugin-js.js ΓåÆ dist/es5/applicationinsights-osplugin-js.min.js...

==[ @microsoft/applicationinsights-osplugin-js ]=================[ 16 of 30 ]==
created dist/es5/applicationinsights-osplugin-js.min.js in 12.6s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ dist/es5/applicationinsights-osplugin-js.js...
created dist/es5/applicationinsights-osplugin-js.js in 6.4s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.min.js...
created browser/es5/ai.osplugin.3.min.js in 10.3s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.js...
created browser/es5/ai.osplugin.3.js in 5.7s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.3.4.min.js...
created browser/es5/ai.osplugin.3.3.4.min.js in 9.7s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.3.4.js...
created browser/es5/ai.osplugin.3.3.4.js in 5.8s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.cjs.min.js...
created browser/es5/ai.osplugin.3.cjs.min.js in 7.1s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.cjs.js...
created browser/es5/ai.osplugin.3.cjs.js in 6.1s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.3.4.cjs.min.js...
created browser/es5/ai.osplugin.3.3.4.cjs.min.js in 9.1s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.3.4.cjs.js...
created browser/es5/ai.osplugin.3.3.4.cjs.js in 6.7s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.gbl.min.js...
created browser/es5/ai.osplugin.3.gbl.min.js in 8.8s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.gbl.js...
created browser/es5/ai.osplugin.3.gbl.js in 5.7s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.3.4.gbl.min.js...
created browser/es5/ai.osplugin.3.3.4.gbl.min.js in 7.8s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.3.4.gbl.js...
created browser/es5/ai.osplugin.3.3.4.gbl.js in 6.6s
Warning: build/types/DataModels.d.ts:9:4 - (tsdoc-characters-after-block-tag) The token "@maxTimeout" looks like a TSDoc tag but contains an invalid character ":"; if it is not a tag, use a backslash to escape the "@"
Warning: build/types/DataModels.d.ts:10:4 - (tsdoc-characters-after-block-tag) The token "@mergeOsNameVersion" looks like a TSDoc tag but contains an invalid character ":"; if it is not a tag, use a backslash to escape the "@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-osplugin-js.namespaced.api.md
Warning: build/types/DataModels.d.ts:9:4 - (tsdoc-characters-after-block-tag) The token "@maxTimeout" looks like a TSDoc tag but contains an invalid character ":"; if it is not a tag, use a backslash to escape the "@"
Warning: build/types/DataModels.d.ts:10:4 - (tsdoc-characters-after-block-tag) The token "@mergeOsNameVersion" looks like a TSDoc tag but contains an invalid character ":"; if it is not a tag, use a backslash to escape the "@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-osplugin-js.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: build/types/DataModels.d.ts:9:4 - (tsdoc-characters-after-block-tag) The token "@maxTimeout" looks like a TSDoc tag but contains an invalid character ":"; if it is not a tag, use a backslash to escape the "@"
Warning: build/types/DataModels.d.ts:10:4 - (tsdoc-characters-after-block-tag) The token "@mergeOsNameVersion" looks like a TSDoc tag but contains an invalid character ":"; if it is not a tag, use a backslash to escape the "@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-osplugin-js" completed with warnings in 3 minutes 49.3 seconds.

==[ @microsoft/applicationinsights-channel-js ]==================[ 17 of 30 ]==

dist-es5/applicationinsights-channel-js.js ΓåÆ dist/es5/applicationinsights-channel-js.min.js...
created dist/es5/applicationinsights-channel-js.min.js in 19.8s

dist-es5/applicationinsights-channel-js.js ΓåÆ dist/es5/applicationinsights-channel-js.js...
created dist/es5/applicationinsights-channel-js.js in 9.1s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.min.js...
created browser/es5/applicationinsights-channel-js.3.min.js in 14.8s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.js...
created browser/es5/applicationinsights-channel-js.3.js in 7.8s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.3.4.min.js...
created browser/es5/applicationinsights-channel-js.3.3.4.min.js in 14.8s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.3.4.js...
created browser/es5/applicationinsights-channel-js.3.3.4.js in 8.6s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.cjs.min.js...
created browser/es5/applicationinsights-channel-js.3.cjs.min.js in 11.8s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.cjs.js...
created browser/es5/applicationinsights-channel-js.3.cjs.js in 6.7s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.3.4.cjs.min.js...
created browser/es5/applicationinsights-channel-js.3.3.4.cjs.min.js in 11.7s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.3.4.cjs.js...
created browser/es5/applicationinsights-channel-js.3.3.4.cjs.js in 7s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.gbl.min.js...
created browser/es5/applicationinsights-channel-js.3.gbl.min.js in 13.4s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.gbl.js...
created browser/es5/applicationinsights-channel-js.3.gbl.js in 8.4s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.3.4.gbl.min.js...
created browser/es5/applicationinsights-channel-js.3.3.4.gbl.min.js in 12.9s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.3.4.gbl.js...
created browser/es5/applicationinsights-channel-js.3.3.4.gbl.js in 6.6s
Warning: build/types/Interfaces.d.ts:55:59 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: build/types/Sender.d.ts:76:30 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-channel-js.namespaced.api.md
Warning: build/types/Interfaces.d.ts:55:59 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: build/types/Sender.d.ts:76:30 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-channel-js.namespaced.api.md
Warning: build/types/Interfaces.d.ts:55:59 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: build/types/Sender.d.ts:76:30 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-channel-js" completed with warnings in 4 minutes 42.5 seconds.

==[ @microsoft/applicationinsights-debugplugin-js ]==============[ 18 of 30 ]==

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ dist/es5/applicationinsights-debugplugin-js.min.js...
created dist/es5/applicationinsights-debugplugin-js.min.js in 11.1s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ dist/es5/applicationinsights-debugplugin-js.js...
created dist/es5/applicationinsights-debugplugin-js.js in 3.8s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.min.js...
created browser/es5/ai.dbg.3.min.js in 4.4s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.js...
created browser/es5/ai.dbg.3.js in 2.8s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.3.4.min.js...
created browser/es5/ai.dbg.3.3.4.min.js in 4.9s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.3.4.js...
created browser/es5/ai.dbg.3.3.4.js in 2.2s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.cjs.min.js...
created browser/es5/ai.dbg.3.cjs.min.js in 3.9s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.cjs.js...
created browser/es5/ai.dbg.3.cjs.js in 3.8s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.3.4.cjs.min.js...
created browser/es5/ai.dbg.3.3.4.cjs.min.js in 5.1s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.3.4.cjs.js...
created browser/es5/ai.dbg.3.3.4.cjs.js in 3.7s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.gbl.min.js...
created browser/es5/ai.dbg.3.gbl.min.js in 8.2s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.gbl.js...
created browser/es5/ai.dbg.3.gbl.js in 2.9s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.3.4.gbl.min.js...
created browser/es5/ai.dbg.3.3.4.gbl.min.js in 5.6s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.3.4.gbl.js...
created browser/es5/ai.dbg.3.3.4.gbl.js in 3.1s
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-debugplugin-js.namespaced.api.md
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-debugplugin-js.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-debugplugin-js" completed with warnings in 2 minutes 20.9 seconds.

==[ @microsoft/applicationinsights-chrome-debug-extension ]======[ 19 of 30 ]==

dist-es5/background.js ΓåÆ browser/scripts/background.js...
created browser/scripts/background.js in 3.5s

dist-es5/popup.js ΓåÆ browser/scripts/popup.js...
created browser/scripts/popup.js in 7.7s

dist-es5/contentLoad.js ΓåÆ browser/scripts/contentLoad.min.js...
created browser/scripts/contentLoad.min.js in 230ms

dist-es5/pageHelper.js ΓåÆ browser/scripts/pageHelper.min.js...
created browser/scripts/pageHelper.min.js in 2.6s
"@microsoft/applicationinsights-chrome-debug-extension" completed with warnings in 1 minute 56.3 seconds.

==[ @microsoft/1ds-post-js ]=====================================[ 20 of 30 ]==

dist-es5/Index.js ΓåÆ dist/es5/ms.post.min.js...
created dist/es5/ms.post.min.js in 11.2s

dist-es5/Index.js ΓåÆ dist/es5/ms.post.js...
created dist/es5/ms.post.js in 3.6s

dist-es5/Index.js ΓåÆ bundle/es5/ms.post.min.js...
created bundle/es5/ms.post.min.js in 6.6s

dist-es5/Index.js ΓåÆ bundle/es5/ms.post.js...
created bundle/es5/ms.post.js in 2.9s

dist-es5/Index.js ΓåÆ bundle/es5/ms.post-4.3.4.min.js...
created bundle/es5/ms.post-4.3.4.min.js in 6.1s

dist-es5/Index.js ΓåÆ bundle/es5/ms.post-4.3.4.js...
created bundle/es5/ms.post-4.3.4.js in 2.6s

dist-es5/Index.js ΓåÆ bundle/es5/ms.post.gbl.min.js...
created bundle/es5/ms.post.gbl.min.js in 9.8s

dist-es5/Index.js ΓåÆ bundle/es5/ms.post.gbl.js...
created bundle/es5/ms.post.gbl.js in 5s

dist-es5/Index.js ΓåÆ bundle/es5/ms.post-4.3.4.gbl.min.js...
created bundle/es5/ms.post-4.3.4.gbl.min.js in 9.1s

dist-es5/Index.js ΓåÆ bundle/es5/ms.post-4.3.4.gbl.js...
created bundle/es5/ms.post-4.3.4.gbl.js in 4s
Warning: build/types/DataModels.d.ts:104:5 - (ae-forgotten-export) The symbol "IValueSanitizer" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:19:5 - (ae-forgotten-export) The symbol "IExtendedConfiguration" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:64:5 - (ae-forgotten-export) The symbol "IPromise" needs to be exported by the entry point Index.d.ts
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/DataModels.d.ts:104:5 - (ae-forgotten-export) The symbol "IValueSanitizer" needs to be exported by the entry point Index.d.ts
Warning: build/types/DataModels.d.ts:288:1 - (ae-forgotten-export) The symbol "ITelemetryPlugin" needs to be exported by the entry point Index.d.ts
Warning: build/types/DataModels.d.ts:292:5 - (ae-forgotten-export) The symbol "IProcessTelemetryContext" needs to be exported by the entry point Index.d.ts
Warning: build/types/DataModels.d.ts:292:5 - (ae-forgotten-export) The symbol "IDiagnosticLogger" needs to be exported by the entry point Index.d.ts
Warning: build/types/DataModels.d.ts:308:5 - (ae-forgotten-export) The symbol "IUnloadHook" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:10:1 - (ae-forgotten-export) The symbol "BaseTelemetryPlugin" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:10:1 - (ae-forgotten-export) The symbol "IChannelControls" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:19:5 - (ae-forgotten-export) The symbol "IExtendedConfiguration" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:19:5 - (ae-forgotten-export) The symbol "IAppInsightsCore" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:19:5 - (ae-forgotten-export) The symbol "IPlugin" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:27:5 - (ae-forgotten-export) The symbol "ITelemetryItem" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:64:5 - (ae-forgotten-export) The symbol "IPromise" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:123:5 - (ae-forgotten-export) The symbol "IInternalOfflineSupport" needs to be exported by the entry point Index.d.ts
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2450:5 - (ae-forgotten-export) The symbol "SendRequestReason" needs to be exported by the entry point Index.d.ts
Warning: build/types/DataModels.d.ts:104:5 - (ae-forgotten-export) The symbol "IValueSanitizer" needs to be exported by the entry point Index.d.ts
Warning: build/types/DataModels.d.ts:288:1 - (ae-forgotten-export) The symbol "ITelemetryPlugin" needs to be exported by the entry point Index.d.ts
Warning: build/types/DataModels.d.ts:292:5 - (ae-forgotten-export) The symbol "IProcessTelemetryContext" needs to be exported by the entry point Index.d.ts
Warning: build/types/DataModels.d.ts:292:5 - (ae-forgotten-export) The symbol "IDiagnosticLogger" needs to be exported by the entry point Index.d.ts
Warning: build/types/DataModels.d.ts:308:5 - (ae-forgotten-export) The symbol "IUnloadHook" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:10:1 - (ae-forgotten-export) The symbol "BaseTelemetryPlugin" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:10:1 - (ae-forgotten-export) The symbol "IChannelControls" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:19:5 - (ae-forgotten-export) The symbol "IExtendedConfiguration" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:19:5 - (ae-forgotten-export) The symbol "IAppInsightsCore" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:19:5 - (ae-forgotten-export) The symbol "IPlugin" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:27:5 - (ae-forgotten-export) The symbol "ITelemetryItem" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:64:5 - (ae-forgotten-export) The symbol "IPromise" needs to be exported by the entry point Index.d.ts
Warning: build/types/PostChannel.d.ts:123:5 - (ae-forgotten-export) The symbol "IInternalOfflineSupport" needs to be exported by the entry point Index.d.ts
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2450:5 - (ae-forgotten-export) The symbol "SendRequestReason" needs to be exported by the entry point Index.d.ts
"@microsoft/1ds-post-js" completed with warnings in 3 minutes 22.7 seconds.

==[ @microsoft/applicationinsights-clickanalytics-js ]===========[ 21 of 30 ]==

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ dist/es5/applicationinsights-clickanalytics-js.min.js...
created dist/es5/applicationinsights-clickanalytics-js.min.js in 9.5s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ dist/es5/applicationinsights-clickanalytics-js.js...
created dist/es5/applicationinsights-clickanalytics-js.js in 3.7s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.min.js...
created browser/es5/ai.clck.3.min.js in 7s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.js...
created browser/es5/ai.clck.3.js in 3.9s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.3.4.min.js...
created browser/es5/ai.clck.3.3.4.min.js in 7.2s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.3.4.js...
created browser/es5/ai.clck.3.3.4.js in 4.2s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.cjs.min.js...
created browser/es5/ai.clck.3.cjs.min.js in 5.5s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.cjs.js...
created browser/es5/ai.clck.3.cjs.js in 3.3s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.3.4.cjs.min.js...
created browser/es5/ai.clck.3.3.4.cjs.min.js in 5.5s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.3.4.cjs.js...
created browser/es5/ai.clck.3.3.4.cjs.js in 3.5s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.gbl.min.js...
created browser/es5/ai.clck.3.gbl.min.js in 5.9s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.gbl.js...
created browser/es5/ai.clck.3.gbl.js in 3.4s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.3.4.gbl.min.js...
created browser/es5/ai.clck.3.3.4.gbl.min.js in 4.8s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.3.4.gbl.js...
created browser/es5/ai.clck.3.3.4.gbl.js in 2.8s
Warning: build/types/ClickAnalyticsPlugin.d.ts:18:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-clickanalytics-js.namespaced.api.md
Warning: build/types/ClickAnalyticsPlugin.d.ts:18:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-clickanalytics-js.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: build/types/ClickAnalyticsPlugin.d.ts:18:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-clickanalytics-js" completed with warnings in 3 minutes 24.4 seconds.

==[ @microsoft/applicationinsights-analytics-js ]================[ 22 of 30 ]==

dist-es5/applicationinsights-analytics-js.js ΓåÆ dist/es5/applicationinsights-analytics-js.min.js...
created dist/es5/applicationinsights-analytics-js.min.js in 10.9s

dist-es5/applicationinsights-analytics-js.js ΓåÆ dist/es5/applicationinsights-analytics-js.js...
created dist/es5/applicationinsights-analytics-js.js in 3.5s

dist-es5/applicationinsights-analytics-js.js ΓåÆ browser/es5/applicationinsights-analytics-js.min.js...
created browser/es5/applicationinsights-analytics-js.min.js in 8.5s

dist-es5/applicationinsights-analytics-js.js ΓåÆ browser/es5/applicationinsights-analytics-js.js...
created browser/es5/applicationinsights-analytics-js.js in 3.5s

dist-es5/applicationinsights-analytics-js.js ΓåÆ browser/es5/applicationinsights-analytics-js.cjs.min.js...
created browser/es5/applicationinsights-analytics-js.cjs.min.js in 7.3s

dist-es5/applicationinsights-analytics-js.js ΓåÆ browser/es5/applicationinsights-analytics-js.cjs.js...
created browser/es5/applicationinsights-analytics-js.cjs.js in 3.8s

dist-es5/applicationinsights-analytics-js.js ΓåÆ browser/es5/applicationinsights-analytics-js.gbl.min.js...
created browser/es5/applicationinsights-analytics-js.gbl.min.js in 7.2s

dist-es5/applicationinsights-analytics-js.js ΓåÆ browser/es5/applicationinsights-analytics-js.gbl.js...
created browser/es5/applicationinsights-analytics-js.gbl.js in 3.7s
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:24:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:29:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:30:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:31:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:49:15 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:49:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:52:5 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/applicationinsights-analytics-js" does not have an export "IMetricTelemetry"
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:93:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:94:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:95:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:96:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:115:15 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:115:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-analytics-js.namespaced.api.md
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:24:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:29:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:30:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:31:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:49:15 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:49:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:52:5 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/applicationinsights-analytics-js" does not have an export "IMetricTelemetry"
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:93:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:94:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:95:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:96:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:115:15 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:115:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-analytics-js.namespaced.api.md
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:24:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:29:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:30:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:31:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:49:15 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:49:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:52:5 - (ae-unresolved-link) The @link reference could not be resolved: The package "@microsoft/applicationinsights-analytics-js" does not have an export "IMetricTelemetry"
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:93:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:94:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:95:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:96:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:115:15 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:115:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-analytics-js" completed with warnings in 2 minutes 13.1 seconds.

==[ @microsoft/applicationinsights-web-basic ]===================[ 23 of 30 ]==

dist-es5/index.js ΓåÆ dist/es5/applicationinsights-web-basic.min.js...
created dist/es5/applicationinsights-web-basic.min.js in 13.8s

dist-es5/index.js ΓåÆ dist/es5/applicationinsights-web-basic.js...
created dist/es5/applicationinsights-web-basic.js in 4.7s

dist-es5/index.js ΓåÆ browser/es5/aib.3.min.js...
created browser/es5/aib.3.min.js in 11s

dist-es5/index.js ΓåÆ browser/es5/aib.3.js...
created browser/es5/aib.3.js in 3.6s

dist-es5/index.js ΓåÆ browser/es5/aib.3.3.4.min.js...
created browser/es5/aib.3.3.4.min.js in 10.3s

dist-es5/index.js ΓåÆ browser/es5/aib.3.3.4.js...
created browser/es5/aib.3.3.4.js in 4.6s

dist-es5/index.js ΓåÆ browser/es5/aib.3.cjs.min.js...
created browser/es5/aib.3.cjs.min.js in 8.3s

dist-es5/index.js ΓåÆ browser/es5/aib.3.cjs.js...
created browser/es5/aib.3.cjs.js in 4.6s

dist-es5/index.js ΓåÆ browser/es5/aib.3.3.4.cjs.min.js...
created browser/es5/aib.3.3.4.cjs.min.js in 7.2s

dist-es5/index.js ΓåÆ browser/es5/aib.3.3.4.cjs.js...
created browser/es5/aib.3.3.4.cjs.js in 3.2s

dist-es5/index.js ΓåÆ browser/es5/aib.3.gbl.min.js...
created browser/es5/aib.3.gbl.min.js in 8s

dist-es5/index.js ΓåÆ browser/es5/aib.3.gbl.js...
created browser/es5/aib.3.gbl.js in 4s

dist-es5/index.js ΓåÆ browser/es5/aib.3.3.4.gbl.min.js...
created browser/es5/aib.3.3.4.gbl.min.js in 10s

dist-es5/index.js ΓåÆ browser/es5/aib.3.3.4.gbl.js...
created browser/es5/aib.3.3.4.gbl.js in 3.1s
Warning: build/types/index.d.ts:6:4 - (tsdoc-undefined-tag) The TSDoc tag "@class" is not defined in this configuration
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-web-basic.namespaced.api.md
Warning: build/types/index.d.ts:6:4 - (tsdoc-undefined-tag) The TSDoc tag "@class" is not defined in this configuration
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/channels/applicationinsights-channel-js/types/applicationinsights-channel-js.d.ts:155:59 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/channels/applicationinsights-channel-js/types/applicationinsights-channel-js.d.ts:316:30 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:286:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-web-basic.namespaced.api.md
Warning: build/types/index.d.ts:6:4 - (tsdoc-undefined-tag) The TSDoc tag "@class" is not defined in this configuration
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/channels/applicationinsights-channel-js/types/applicationinsights-channel-js.d.ts:155:59 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/channels/applicationinsights-channel-js/types/applicationinsights-channel-js.d.ts:316:30 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:492:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:493:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:495:4 - (tsdoc-unsupported-tag) The TSDoc tag "@remarks" is not supported by this tool
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
@nevware21/ts-utils/dist/types/ts-utils.d.ts:6203:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:286:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-web-basic" completed with warnings in 2 minutes 58.4 seconds.

==[ @microsoft/applicationinsights-web ]=========================[ 24 of 30 ]==

dist-es5/applicationinsights-web.js ΓåÆ dist/es5/applicationinsights-web.min.js...
created dist/es5/applicationinsights-web.min.js in 15.3s

dist-es5/applicationinsights-web.js ΓåÆ dist/es5/applicationinsights-web.js...
created dist/es5/applicationinsights-web.js in 3.2s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.min.js...
created browser/es5/ai.3.min.js in 6.5s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.js...
created browser/es5/ai.3.js in 2.6s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.3.4.min.js...
created browser/es5/ai.3.3.4.min.js in 6s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.3.4.js...
created browser/es5/ai.3.3.4.js in 2.9s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.cjs.min.js...
created browser/es5/ai.3.cjs.min.js in 5.8s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.cjs.js...
created browser/es5/ai.3.cjs.js in 2.3s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.3.4.cjs.min.js...
created browser/es5/ai.3.3.4.cjs.min.js in 5.2s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.3.4.cjs.js...
created browser/es5/ai.3.3.4.cjs.js in 2.4s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.gbl.min.js...
created browser/es5/ai.3.gbl.min.js in 6.2s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.gbl.js...
created browser/es5/ai.3.gbl.js in 3.1s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.3.4.gbl.min.js...
created browser/es5/ai.3.3.4.gbl.min.js in 7s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.3.4.gbl.js...
created browser/es5/ai.3.3.4.gbl.js in 2.2s
Warning: build/types/AISku.d.ts:14:4 - (tsdoc-undefined-tag) The TSDoc tag "@class" is not defined in this configuration
Warning: build/types/AISku.d.ts:15:37 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/AISku.d.ts:15:16 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/AISku.d.ts:78:5 - (ae-unresolved-link) The @link reference could not be resolved: This type of declaration is not supported yet by the resolver
Warning: build/types/AISku.d.ts:78:5 - (ae-unresolved-link) The @link reference could not be resolved: This type of declaration is not supported yet by the resolver
Warning: build/types/AISku.d.ts:144:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/AISku.d.ts:144:15 - (tsdoc-param-tag-with-invalid-optional-name) The @param should not include a JSDoc-style optional name; it must not be enclosed in '[ ]' brackets.
Warning: build/types/AISku.d.ts:149:38 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/AISku.d.ts:149:17 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/IApplicationInsights.d.ts:50:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-web.namespaced.api.md
Warning: build/types/AISku.d.ts:14:4 - (tsdoc-undefined-tag) The TSDoc tag "@class" is not defined in this configuration
Warning: build/types/AISku.d.ts:15:37 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/AISku.d.ts:15:16 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/AISku.d.ts:144:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/AISku.d.ts:144:15 - (tsdoc-param-tag-with-invalid-optional-name) The @param should not include a JSDoc-style optional name; it must not be enclosed in '[ ]' brackets.
Warning: build/types/AISku.d.ts:149:38 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/AISku.d.ts:149:17 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/IApplicationInsights.d.ts:50:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/channels/applicationinsights-channel-js/types/applicationinsights-channel-js.d.ts:155:59 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/channels/applicationinsights-channel-js/types/applicationinsights-channel-js.d.ts:316:30 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:53:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:58:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:59:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:60:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:78:15 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:78:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:122:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:123:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:124:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:125:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:144:15 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:144:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:286:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: You have changed the API signature for this project. Updating build/dts/applicationinsights-web.namespaced.api.md
Warning: build/types/AISku.d.ts:14:4 - (tsdoc-undefined-tag) The TSDoc tag "@class" is not defined in this configuration
Warning: build/types/AISku.d.ts:15:37 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/AISku.d.ts:15:16 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/AISku.d.ts:144:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: build/types/AISku.d.ts:144:15 - (tsdoc-param-tag-with-invalid-optional-name) The @param should not include a JSDoc-style optional name; it must not be enclosed in '[ ]' brackets.
Warning: build/types/AISku.d.ts:149:38 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/AISku.d.ts:149:17 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/IApplicationInsights.d.ts:50:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/channels/applicationinsights-channel-js/types/applicationinsights-channel-js.d.ts:155:59 - (tsdoc-malformed-html-name) Invalid HTML element: A space is not allowed here
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/channels/applicationinsights-channel-js/types/applicationinsights-channel-js.d.ts:316:30 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:53:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:58:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:59:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:60:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:78:15 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:78:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:122:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:123:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:124:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:125:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:144:15 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/extensions/applicationinsights-analytics-js/types/applicationinsights-analytics-js.d.ts:144:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:286:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
"@microsoft/applicationinsights-web" completed with warnings in 1 minute 52.6 seconds.

==[ @microsoft/applicationinsights-example-aisku ]===============[ 25 of 30 ]==

dist-es5/aisku-example-index.js ΓåÆ browser/es5/aisku-example-index.gbl.js...
created browser/es5/aisku-example-index.gbl.js in 8.4s
"@microsoft/applicationinsights-example-aisku" completed with warnings in 38.35 seconds.

==[ @microsoft/applicationinsights-test-module-type-check ]======[ 26 of 30 ]==
"@microsoft/applicationinsights-test-module-type-check" completed successfully in 10.80 seconds.

==[ @microsoft/applicationinsights-example-shared-worker ]=======[ 27 of 30 ]==

dist-es5/example-shared-worker.js ΓåÆ browser/example-shared-worker.gbl.js...
created browser/example-shared-worker.gbl.js in 1.1s

dist-es5/worker.js ΓåÆ browser/worker.js...
created browser/worker.js in 7.4s

dist-es5/worker2.js ΓåÆ browser/worker2.js...
created browser/worker2.js in 365ms
"@microsoft/applicationinsights-example-shared-worker" completed with warnings in 39.29 seconds.

==[ @microsoft/applicationinsights-example-dependencies ]========[ 28 of 30 ]==

dist-es5/dependencies-example-index.js ΓåÆ browser/dependencies-example-index.gbl.js...
created browser/dependencies-example-index.gbl.js in 8.6s
"@microsoft/applicationinsights-example-dependencies" completed with warnings in 38.37 seconds.

==[ @microsoft/applicationinsights-example-cfgsync ]=============[ 29 of 30 ]==

dist-es5/example-cfgsync-index.js ΓåÆ browser/es5/example-cfgsync-index.gbl.js...
created browser/es5/example-cfgsync-index.gbl.js in 8.4s
"@microsoft/applicationinsights-example-cfgsync" completed with warnings in 38.88 seconds.

==[ @microsoft/applicationinsights-web-snippet ]=================[ 30 of 30 ]==

build/output/snippet.js ΓåÆ browser/es5/../../build/output/snippet.min.js...
created browser/es5/../../build/output/snippet.min.js in 521ms

build/output/snippet.js ΓåÆ browser/es5/../../build/output/snippet.js...
created browser/es5/../../build/output/snippet.js in 164ms

build/output/oneDSSnippet.js ΓåÆ browser/es5/../../build/output/oneDSSnippet.min.js...
created browser/es5/../../build/output/oneDSSnippet.min.js in 572ms

build/output/oneDSSnippet.js ΓåÆ browser/es5/../../build/output/oneDSSnippet.js...
created browser/es5/../../build/output/oneDSSnippet.js in 163ms

./dist-es5/applicationinsights-web-snippet.js ΓåÆ ./dist/es5/node/applicationinsights-web-snippet.js...
created ./dist/es5/node/applicationinsights-web-snippet.js in 27ms

./dist-es5/applicationinsights-web-snippet.js ΓåÆ ./dist/es5/esm/applicationinsights-web-snippet.js...
created ./dist/es5/esm/applicationinsights-web-snippet.js in 11ms
"@microsoft/applicationinsights-web-snippet" completed with warnings in 1 minute 3.2 seconds.



==[ NO OP: 1 operation ]=======================================================

These operations did not define any work:
  applicationinsights-js-release-tools

==[ SUCCESS: 2 operations ]====================================================

These operations completed successfully:
  @microsoft/applicationinsights-test-module-type-check    10.80 seconds
  applicationinsights-web-config                           36.71 seconds

==[ SUCCESS WITH WARNINGS: 27 operations ]=====================================

--[ WARNING: @microsoft/1ds-core-js ]--------------[ 2 minutes 49.6 seconds ]--


dist-es5/Index.js ΓåÆ dist/es5/ms.core.min.js...
created dist/es5/ms.core.min.js in 11.1s

dist-es5/Index.js ΓåÆ dist/es5/ms.core.js...
created dist/es5/ms.core.js in 3.7s

dist-es5/Index.js ΓåÆ bundle/es5/ms.core.min.js...
created bundle/es5/ms.core.min.js in 11s

  ...205 lines omitted...
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3188:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3189:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3526:79 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3527:61 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3569:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3571:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3651:1 - (ae-internal-missing-underscore) The name "SenderPostManager" should be prefixed with an underscore because the declaration is marked as @internal
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3847:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3848:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:3898:21 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'

--[ WARNING: @microsoft/applicationinsights-shims ]---------[ 22.50 seconds ]--


./dist-es5/applicationinsights-shims.js ΓåÆ ./browser/applicationinsights-shims.min.js...
created ./browser/applicationinsights-shims.min.js in 765ms

./dist-es5/applicationinsights-shims.js ΓåÆ ./browser/applicationinsights-shims.js...
created ./browser/applicationinsights-shims.js in 265ms

./dist-es5/applicationinsights-shims.js ΓåÆ ./dist/es5/esm/applicationinsights-shims.min.js...
created ./dist/es5/esm/applicationinsights-shims.min.js in 238ms

./dist-es5/applicationinsights-shims.js ΓåÆ ./dist/es5/esm/applicationinsights-shims.js...
created ./dist/es5/esm/applicationinsights-shims.js in 222ms

./dist-es5/applicationinsights-shims.js ΓåÆ ./dist/es5/umd/applicationinsights-shims.min.js...
created ./dist/es5/umd/applicationinsights-shims.min.js in 466ms

./dist-es5/applicationinsights-shims.js ΓåÆ ./dist/es5/umd/applicationinsights-shims.js...
created ./dist/es5/umd/applicationinsights-shims.js in 226ms

--[ WARNING: @microsoft/ai-test-framework ]---------[ 1 minute 19.4 seconds ]--


dist-es5/ai-test-framework.js ΓåÆ dist/es5/ai-test-framework.js...
(!) Use of eval is strongly discouraged
https://rollupjs.org/troubleshooting/#avoiding-eval
../../temp/node_modules/sinon/pkg/sinon-esm.js
20144:         } else {
20145:             /* eslint no-eval: "off" */
20146:             eval(timer.func);
                   ^
20147:         }
20148:     }
...and 1 other occurrence
created dist/es5/ai-test-framework.js in 3.3s

--[ WARNING: @microsoft/applicationinsights-rollup-plugin-uglify3-js ][ 1 minute 21.1 seconds ]--


./dist-es5/uglify3-js.js ΓåÆ ./dist/es5/node/rollup-plugin-uglify3-js.js...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
uglify-js (imported by "dist-es5/uglify3-js.js")
(!) Missing global variable name
https://rollupjs.org/configuration-options/#output-globals
Use "output.globals" to specify browser global variable names corresponding to external modules:
uglify-js (guessing "UglifyJs")
created ./dist/es5/node/rollup-plugin-uglify3-js.js in 42ms

./dist-es5/uglify3-js.js ΓåÆ ./dist/es5/esm/rollup-plugin-uglify3-js.js...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
uglify-js (imported by "dist-es5/uglify3-js.js")
created ./dist/es5/esm/rollup-plugin-uglify3-js.js in 25ms

--[ WARNING: @microsoft/applicationinsights-rollup-es5 ]----[ 17.11 seconds ]--


./dist-es5/applicationinsights-rollup-es5.js ΓåÆ ./dist/es5/node/applicationinsights-rollup-es5.min.js...
created ./dist/es5/node/applicationinsights-rollup-es5.min.js in 1s

./dist-es5/applicationinsights-rollup-es5.js ΓåÆ ./dist/es5/node/applicationinsights-rollup-es5.js...
created ./dist/es5/node/applicationinsights-rollup-es5.js in 233ms

./dist-es5/applicationinsights-rollup-es5.js ΓåÆ ./dist/es5/esm/applicationinsights-rollup-es5.min.js...
created ./dist/es5/esm/applicationinsights-rollup-es5.min.js in 185ms

./dist-es5/applicationinsights-rollup-es5.js ΓåÆ ./dist/es5/esm/applicationinsights-rollup-es5.js...
created ./dist/es5/esm/applicationinsights-rollup-es5.js in 162ms

--[ WARNING: @microsoft/applicationinsights-core-js ][ 1 minute 19.8 seconds ]--


dist-es5/applicationinsights-core-js.js ΓåÆ dist/es5/applicationinsights-core-js.min.js...
created dist/es5/applicationinsights-core-js.min.js in 4.9s

dist-es5/applicationinsights-core-js.js ΓåÆ dist/es5/applicationinsights-core-js.js...
created dist/es5/applicationinsights-core-js.js in 1.2s

dist-es5/applicationinsights-core-js.js ΓåÆ browser/es5/applicationinsights-core-js.min.js...
created browser/es5/applicationinsights-core-js.min.js in 3.7s

  ...128 lines omitted...
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:52:32 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:54:24 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:62:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:63:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:65:21 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:65:13 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:70:23 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/EventHelpers.d.ts:72:22 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: build/types/JavaScriptSDK/HelperFuncs.d.ts:57:79 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
Warning: build/types/JavaScriptSDK/HelperFuncs.d.ts:58:61 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag

--[ WARNING: @microsoft/1ds-post-js ]--------------[ 3 minutes 22.7 seconds ]--


dist-es5/Index.js ΓåÆ dist/es5/ms.post.min.js...
created dist/es5/ms.post.min.js in 11.2s

dist-es5/Index.js ΓåÆ dist/es5/ms.post.js...
created dist/es5/ms.post.js in 3.6s

dist-es5/Index.js ΓåÆ bundle/es5/ms.post.min.js...
created bundle/es5/ms.post.min.js in 6.6s

  ...90 lines omitted...
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2450:5 - (ae-forgotten-export) The symbol "SendRequestReason" needs to be exported by the entry point Index.d.ts

--[ WARNING: @microsoft/applicationinsights-analytics-js ][ 2 minutes 13.1 seconds ]--


dist-es5/applicationinsights-analytics-js.js ΓåÆ dist/es5/applicationinsights-analytics-js.min.js...
created dist/es5/applicationinsights-analytics-js.min.js in 10.9s

dist-es5/applicationinsights-analytics-js.js ΓåÆ dist/es5/applicationinsights-analytics-js.js...
created dist/es5/applicationinsights-analytics-js.js in 3.5s

dist-es5/applicationinsights-analytics-js.js ΓåÆ browser/es5/applicationinsights-analytics-js.min.js...
created browser/es5/applicationinsights-analytics-js.min.js in 8.5s

  ...74 lines omitted...
Warning: build/types/JavaScriptSDK/AnalyticsPlugin.d.ts:115:8 - (tsdoc-param-tag-with-invalid-name) The @param block should be followed by a parameter name
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-common ][ 1 minute 56.8 seconds ]--


dist-es5/applicationinsights-common.js ΓåÆ dist/es5/applicationinsights-common.min.js...
created dist/es5/applicationinsights-common.min.js in 9.5s

dist-es5/applicationinsights-common.js ΓåÆ dist/es5/applicationinsights-common.js...
created dist/es5/applicationinsights-common.js in 3.3s

dist-es5/applicationinsights-common.js ΓåÆ browser/es5/applicationinsights-common.min.js...
created browser/es5/applicationinsights-common.min.js in 9.1s

  ...35 lines omitted...
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-properties-js ][ 3 minutes 51.3 seconds ]--


dist-es5/applicationinsights-properties-js.js ΓåÆ dist/es5/applicationinsights-properties-js.min.js...
created dist/es5/applicationinsights-properties-js.min.js in 14.1s

dist-es5/applicationinsights-properties-js.js ΓåÆ dist/es5/applicationinsights-properties-js.js...
created dist/es5/applicationinsights-properties-js.js in 9.5s

dist-es5/applicationinsights-properties-js.js ΓåÆ browser/es5/ai.props.3.min.js...
created browser/es5/ai.props.3.min.js in 13.2s

  ...53 lines omitted...
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-channel-js ][ 4 minutes 42.5 seconds ]--


dist-es5/applicationinsights-channel-js.js ΓåÆ dist/es5/applicationinsights-channel-js.min.js...
created dist/es5/applicationinsights-channel-js.min.js in 19.8s

dist-es5/applicationinsights-channel-js.js ΓåÆ dist/es5/applicationinsights-channel-js.js...
created dist/es5/applicationinsights-channel-js.js in 9.1s

dist-es5/applicationinsights-channel-js.js ΓåÆ browser/es5/applicationinsights-channel-js.3.min.js...
created browser/es5/applicationinsights-channel-js.3.min.js in 14.8s

  ...69 lines omitted...
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-cfgsync-js ][ 3 minutes 22.8 seconds ]--


dist-es5/applicationinsights-cfgsync-js.js ΓåÆ dist/es5/applicationinsights-cfgsync-js.min.js...
created dist/es5/applicationinsights-cfgsync-js.min.js in 12.1s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ dist/es5/applicationinsights-cfgsync-js.js...
created dist/es5/applicationinsights-cfgsync-js.js in 5.9s

dist-es5/applicationinsights-cfgsync-js.js ΓåÆ browser/es5/ai.cfgsync.3.min.js...
created browser/es5/ai.cfgsync.3.min.js in 11.9s

  ...53 lines omitted...
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-chrome-debug-extension ][ 1 minute 56.3 seconds ]--


dist-es5/background.js ΓåÆ browser/scripts/background.js...
created browser/scripts/background.js in 3.5s

dist-es5/popup.js ΓåÆ browser/scripts/popup.js...
created browser/scripts/popup.js in 7.7s

dist-es5/contentLoad.js ΓåÆ browser/scripts/contentLoad.min.js...
created browser/scripts/contentLoad.min.js in 230ms

dist-es5/pageHelper.js ΓåÆ browser/scripts/pageHelper.min.js...
created browser/scripts/pageHelper.min.js in 2.6s

--[ WARNING: @microsoft/applicationinsights-clickanalytics-js ][ 3 minutes 24.4 seconds ]--


dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ dist/es5/applicationinsights-clickanalytics-js.min.js...
created dist/es5/applicationinsights-clickanalytics-js.min.js in 9.5s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ dist/es5/applicationinsights-clickanalytics-js.js...
created dist/es5/applicationinsights-clickanalytics-js.js in 3.7s

dist-es5/applicationinsights-clickanalytics-js.js ΓåÆ browser/es5/ai.clck.3.min.js...
created browser/es5/ai.clck.3.min.js in 7s

  ...56 lines omitted...
Warning: build/types/ClickAnalyticsPlugin.d.ts:18:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-debugplugin-js ][ 2 minutes 20.9 seconds ]--


dist-es5/applicationinsights-debugplugin-js.js ΓåÆ dist/es5/applicationinsights-debugplugin-js.min.js...
created dist/es5/applicationinsights-debugplugin-js.min.js in 11.1s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ dist/es5/applicationinsights-debugplugin-js.js...
created dist/es5/applicationinsights-debugplugin-js.js in 3.8s

dist-es5/applicationinsights-debugplugin-js.js ΓåÆ browser/es5/ai.dbg.3.min.js...
created browser/es5/ai.dbg.3.min.js in 4.4s

  ...53 lines omitted...
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-dependencies-js ][ 3 minutes 5.3 seconds ]--


dist-es5/applicationinsights-dependencies-js.js ΓåÆ dist/es5/applicationinsights-dependencies-js.min.js...
created dist/es5/applicationinsights-dependencies-js.min.js in 14.9s

dist-es5/applicationinsights-dependencies-js.js ΓåÆ dist/es5/applicationinsights-dependencies-js.js...
created dist/es5/applicationinsights-dependencies-js.js in 8.4s

dist-es5/applicationinsights-dependencies-js.js ΓåÆ browser/es5/applicationinsights-dependencies-js.min.js...
created browser/es5/applicationinsights-dependencies-js.min.js in 15.5s

  ...35 lines omitted...
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-example-aisku ]-[ 38.35 seconds ]--


dist-es5/aisku-example-index.js ΓåÆ browser/es5/aisku-example-index.gbl.js...
created browser/es5/aisku-example-index.gbl.js in 8.4s

--[ WARNING: @microsoft/applicationinsights-web ]---[ 1 minute 52.6 seconds ]--


dist-es5/applicationinsights-web.js ΓåÆ dist/es5/applicationinsights-web.min.js...
created dist/es5/applicationinsights-web.min.js in 15.3s

dist-es5/applicationinsights-web.js ΓåÆ dist/es5/applicationinsights-web.js...
created dist/es5/applicationinsights-web.js in 3.2s

dist-es5/Init.js ΓåÆ browser/es5/ai.3.min.js...
created browser/es5/ai.3.min.js in 6.5s

  ...119 lines omitted...
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:286:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-offlinechannel-js ][ 4 minutes 48.4 seconds ]--


dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ dist/es5/applicationinsights-offlinechannel-js.min.js...
created dist/es5/applicationinsights-offlinechannel-js.min.js in 20.1s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ dist/es5/applicationinsights-offlinechannel-js.js...
created dist/es5/applicationinsights-offlinechannel-js.js in 8.4s

dist-es5/applicationinsights-offlinechannel-js.js ΓåÆ browser/es5/applicationinsights-offlinechannel-js.0.min.js...
created browser/es5/applicationinsights-offlinechannel-js.0.min.js in 14.3s

  ...127 lines omitted...
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-example-cfgsync ][ 38.88 seconds ]--


dist-es5/example-cfgsync-index.js ΓåÆ browser/es5/example-cfgsync-index.gbl.js...
created browser/es5/example-cfgsync-index.gbl.js in 8.4s

--[ WARNING: @microsoft/applicationinsights-example-dependencies ][ 38.37 seconds ]--


dist-es5/dependencies-example-index.js ΓåÆ browser/dependencies-example-index.gbl.js...
created browser/dependencies-example-index.gbl.js in 8.6s

--[ WARNING: @microsoft/applicationinsights-example-shared-worker ][ 39.29 seconds ]--


dist-es5/example-shared-worker.js ΓåÆ browser/example-shared-worker.gbl.js...
created browser/example-shared-worker.gbl.js in 1.1s

dist-es5/worker.js ΓåÆ browser/worker.js...
created browser/worker.js in 7.4s

dist-es5/worker2.js ΓåÆ browser/worker2.js...
created browser/worker2.js in 365ms

--[ WARNING: @microsoft/applicationinsights-osplugin-js ][ 3 minutes 49.3 seconds ]--


dist-es5/applicationinsights-osplugin-js.js ΓåÆ dist/es5/applicationinsights-osplugin-js.min.js...
created dist/es5/applicationinsights-osplugin-js.min.js in 12.6s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ dist/es5/applicationinsights-osplugin-js.js...
created dist/es5/applicationinsights-osplugin-js.js in 6.4s

dist-es5/applicationinsights-osplugin-js.js ΓåÆ browser/es5/ai.osplugin.3.min.js...
created browser/es5/ai.osplugin.3.min.js in 10.3s

  ...59 lines omitted...
Warning: build/types/DataModels.d.ts:10:4 - (tsdoc-characters-after-block-tag) The token "@mergeOsNameVersion" looks like a TSDoc tag but contains an invalid character ":"; if it is not a tag, use a backslash to escape the "@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-perfmarkmeasure-js ][ 1 minute 49.4 seconds ]--


dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ dist/es5/applicationinsights-perfmarkmeasure-js.min.js...
created dist/es5/applicationinsights-perfmarkmeasure-js.min.js in 4.2s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ dist/es5/applicationinsights-perfmarkmeasure-js.js...
created dist/es5/applicationinsights-perfmarkmeasure-js.js in 2s

dist-es5/applicationinsights-perfmarkmeasure-js.js ΓåÆ browser/es5/ai.prfmm-mgr.3.min.js...
created browser/es5/ai.prfmm-mgr.3.min.js in 4.2s

  ...34 lines omitted...
@nevware21/ts-async/dist/types/ts-async.d.ts:1325:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1326:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1343:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1344:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1361:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1362:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1379:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1396:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1413:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
@nevware21/ts-async/dist/types/ts-async.d.ts:1431:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen

--[ WARNING: @microsoft/applicationinsights-teechannel-js ][ 3 minutes 17.6 seconds ]--


dist-es5/applicationinsights-teechannel-js.js ΓåÆ dist/es5/applicationinsights-teechannel-js.min.js...
created dist/es5/applicationinsights-teechannel-js.min.js in 10.8s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ dist/es5/applicationinsights-teechannel-js.js...
created dist/es5/applicationinsights-teechannel-js.js in 5.2s

dist-es5/applicationinsights-teechannel-js.js ΓåÆ browser/es5/applicationinsights-teechannel-js.3.min.js...
created browser/es5/applicationinsights-teechannel-js.3.min.js in 10.2s

  ...63 lines omitted...
@nevware21/ts-utils/dist/types/ts-utils.d.ts:3591:29 - (tsdoc-code-span-missing-delimiter) The code span is missing its closing backtick
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-web-basic ][ 2 minutes 58.4 seconds ]--


dist-es5/index.js ΓåÆ dist/es5/applicationinsights-web-basic.min.js...
created dist/es5/applicationinsights-web-basic.min.js in 13.8s

dist-es5/index.js ΓåÆ dist/es5/applicationinsights-web-basic.js...
created dist/es5/applicationinsights-web-basic.js in 4.7s

dist-es5/index.js ΓåÆ browser/es5/aib.3.min.js...
created browser/es5/aib.3.min.js in 11s

  ...76 lines omitted...
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:286:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:113 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1593:129 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:108 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1594:123 - (tsdoc-code-fence-opening-indent) The opening backtick for a code fence must appear at the start of the line
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:1823:25 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2061:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:137 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
Warning: C:/Users/siyuniu/Desktop/ai-js-v3/ApplicationInsights-JS/shared/AppInsightsCore/types/applicationinsights-core-js.d.ts:2070:86 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"

--[ WARNING: @microsoft/applicationinsights-web-snippet ][ 1 minute 3.2 seconds ]--


build/output/snippet.js ΓåÆ browser/es5/../../build/output/snippet.min.js...
created browser/es5/../../build/output/snippet.min.js in 521ms

build/output/snippet.js ΓåÆ browser/es5/../../build/output/snippet.js...
created browser/es5/../../build/output/snippet.js in 164ms

build/output/oneDSSnippet.js ΓåÆ browser/es5/../../build/output/oneDSSnippet.min.js...
created browser/es5/../../build/output/oneDSSnippet.min.js in 572ms

build/output/oneDSSnippet.js ΓåÆ browser/es5/../../build/output/oneDSSnippet.js...
created browser/es5/../../build/output/oneDSSnippet.js in 163ms

./dist-es5/applicationinsights-web-snippet.js ΓåÆ ./dist/es5/node/applicationinsights-web-snippet.js...
created ./dist/es5/node/applicationinsights-web-snippet.js in 27ms

./dist-es5/applicationinsights-web-snippet.js ΓåÆ ./dist/es5/esm/applicationinsights-web-snippet.js...
created ./dist/es5/esm/applicationinsights-web-snippet.js in 11ms


rush rebuild (15 minutes 9.3 seconds)
