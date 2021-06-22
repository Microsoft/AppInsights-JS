module.exports = function (grunt) {
    grunt.initConfig({
        tslint: {
            options: {
                rulesDirectory: 'node_modules/tslint-microsoft-contrib',
            },
            files: {
                src: [
                    './shared/AppInsightsCommon/**/*.ts',
                    './extensions/**/*.ts',
                    './AISKU/**/*.ts',
                    '!./**/node_modules/**',
                    '!./**/Tests/**',
                    '!./**/dist-esm/**',
                    '!./**/Generated/**',
                    './legacy/JavaScript/**/*.ts',
                    '!./legacy/JavaScript/JavaScriptSDK.Tests/**'
                ],
            }
        },
        ts: {
            options: {
                comments: true,
                debug: true
            },
            default: {
                tsconfig: './tsconfig.json',
            },
            core: {
                tsconfig: './shared/AppInsightsCore/tsconfig.json'
            },
            coretest: {
                tsconfig: './shared/AppInsightsCore/Tests/tsconfig.json',
                src: [
                    './shared/AppInsightsCore/Tests/Selenium/ApplicationInsightsCore.Tests.ts',
                    './shared/AppInsightsCore/Tests/Selenium/aitests.ts'
                ],
                out: 'shared/AppInsightsCore/Tests/Selenium/aicore.tests.js'
            },
            common: {
                tsconfig: './shared/AppInsightsCommon/tsconfig.json'
            },
            commontest: {
                tsconfig: './shared/AppInsightsCommon/Tests/tsconfig.json',
                src: [
                    './shared/AppInsightsCommon/Tests/Selenium/appinsights-common.tests.ts',
                ],
                out: 'shared/AppInsightsCommon/Tests/Selenium/aicommon.tests.js'
            },
            appinsights: {
                tsconfig: './extensions/applicationinsights-analytics-js/tsconfig.json',
            },
            appinsightstests: {
                tsconfig: './extensions/applicationinsights-analytics-js/Tests/tsconfig.json',
                src: [
                    './extensions/applicationinsights-analytics-js/Tests/Selenium/*.ts',
                    './extensions/applicationinsights-analytics-js/Tests/*.ts'
                ],
                out: 'extensions/applicationinsights-analytics-js/Tests/Selenium/appinsights-analytics.tests.js'
            },
            aisku: {
                tsconfig: './AISKU/tsconfig.json',
                src: [
                    'AISKU/src/*.ts'
                ]
            },
            aiskulite: {
                tsconfig: './AISKULight/tsconfig.json',
                src: [
                    'AISKULight/*.ts'
                ]
            },
            aiskutests: {
                tsconfig: './AISKU/Tests/tsconfig.json',
                src: [
                    'AISKU/Tests/Selenium/*.ts',
                    'AISKU/Tests/*.ts'
                ],
                out: 'AISKU/Tests/Selenium/appinsights-sdk.tests.js'
            },
            properties: {
                tsconfig: './extensions/applicationinsights-properties-js/tsconfig.json',
                src: [
                    './extensions/applicationinsights-properties-js/*.ts',
                    './extensions/applicationinsights-properties-js/Context/*.ts',
                    './extensions/applicationinsights-properties-js/Interfaces/Context/*.ts',
                    './extensions/applicationinsights-properties-js/Interfaces/*.ts'
                ]
            },
            clickanalytics: {
                tsconfig: './extensions/applicationinsights-clickanalytics-js/tsconfig.json',
                src: [
                    './extensions/applicationinsights-clickanalytics-js/*.ts',
                    './extensions/applicationinsights-clickanalytics-js/Interfaces/*.ts'
                ]
            },
            clickanalyticstests: {
                tsconfig: './extensions/applicationinsights-clickanalytics-js/Tests/tsconfig.json',
                src: [
                    './extensions/applicationinsights-clickanalytics-js/Tests/Selenium/*.ts',
                    './extensions/applicationinsights-clickanalytics-js/Tests/*.ts'
                ],
                out: 'extensions/applicationinsights-clickanalytics-js/Tests/Selenium/appinsights-clickanalytics.tests.js'
            },
            propertiestests: {
                tsconfig: './extensions/applicationinsights-properties-js/Tests/tsconfig.json',
                src: [ './extensions/applicationinsights-properties-js/Tests/**/*.ts' ],
                out: './extensions/applicationinsights-properties-js/Tests/Selenium/prop.tests.js'
            },
            reactnative: {
                tsconfig: './extensions/applicationinsights-react-native/tsconfig.json',
                src: [
                    './extensions/applicationinsights-react-native/src/index.ts'
                ]
            },
            reactnativetests: {
                tsconfig: './extensions/applicationinsights-react-native/Tests/tsconfig.json',
                src: [ './extensions/applicationinsights-react-native/Tests/**/*.ts' ],
                out: './extensions/applicationinsights-react-native/Tests/Selenium/reactnativeplugin.tests.js'
            },
            deps: {
                tsconfig: './extensions/applicationinsights-dependencies-js/tsconfig.json'
            },
            depstest: {
                tsconfig: './extensions/applicationinsights-dependencies-js/Tests/tsconfig.json',
                src: [
                    './extensions/applicationinsights-dependencies-js/Tests/Selenium/*.ts',
                    './extensions/applicationinsights-dependencies-js/Tests/TestsFramework/*.ts'
                ],
                out: './extensions/applicationinsights-dependencies-js/Tests/Selenium/dependencies.tests.js'
            },
            debugplugin: {
                tsconfig: './extensions/applicationinsights-debugplugin-js/tsconfig.json',
                src: [
                    './extensions/applicationinsights-debugplugin-js/*.ts',
                    './extensions/applicationinsights-debugplugin-js/components/*.ts',
                ]
            },
            aichannel: {
                tsconfig: './channels/applicationinsights-channel-js/tsconfig.json'
            },
            aichanneltest: {
                tsconfig: './channels/applicationinsights-channel-js/Tests/tsconfig.json',
                src: [
                    './channels/applicationinsights-channel-js/Tests/Selenium/*.ts',
                    './channels/applicationinsights-channel-js/Tests/*.ts',
                ],
                out: './channels/applicationinsights-channel-js/Tests/Selenium/aichannel.tests.js'
            },
            rollupuglify: {
                tsconfig: './tools/rollup-plugin-uglify3-js/tsconfig.json',
                src: [
                    './tools/rollup-plugin-uglify3-js/src/*.ts',
                    '!node_modules/**'
                ],
                out: './tools/rollup-plugin-uglify3-js/out/src/uglify3-js.js'
            },
            rollupes3: {
                tsconfig: './tools/rollup-es3/tsconfig.json'
            },
            rollupes3test: {
                tsconfig: './tools/rollup-es3/Tests/tsconfig.json',
                src: [
                    './tools/rollup-es3/Tests/Selenium/Es3RollupTests.ts'
                ],
                out: './tools/rollup-es3/Tests/Selenium/es3rolluptests.js'
            },
            shims: {
                tsconfig: './tools/shims/tsconfig.json',
                src: [
                    './tools/shims/src/*.ts'
                ]
            },
            shimstest: {
                tsconfig: './tools/shims/Tests/tsconfig.json',
                src: [
                    './tools/shims/src/*.ts',
                    './tools/shims/Tests/**/*.ts'
                ],
                out: './tools/shims/Tests/Selenium/shimstests.js'
            },
            "tst-framework": {
                tsconfig: './common/Tests/Framework/tsconfig.json',
                src: [
                    './common/Tests/Framework/src/*.ts'
                ]
            },
        },
        uglify: {
            snippetvNext: {
                files: {
                    'AISKU/snippet/snippet.min.js': ['AISKU/snippet/snippet.js']
                },
                options: {
                    sourceMap: false,
                    ie8: true,
                    compress: {
                      passes:3,
                      unsafe: true,
                    },
                    output: {
                      webkit:true
                    }
                }
            }
        },
        qunit: {
            all: {
                options: {
                }
            },
            core: {
                options: {
                    urls: [
                        'http://localhost:9001/shared/AppInsightsCore/Tests/Selenium/Tests.html'
                    ],
                    timeout: 300 * 1000, // 5 min
                    console: true,
                    summaryOnly: false,
                    '--web-security': 'false' // we need this to allow CORS requests in PhantomJS
                }
            },
            common: {
                options: {
                    urls: [
                        'http://localhost:9001/shared/AppInsightsCommon/Tests/Selenium/Tests.html'
                    ],
                    timeout: 300 * 1000, // 5 min
                    console: true,
                    summaryOnly: false,
                    '--web-security': 'false' // we need this to allow CORS requests in PhantomJS
                }
            },
            aitests: {
                options: {
                    urls: [
                        'http://localhost:9001/extensions/applicationinsights-analytics-js/Tests/Selenium/Tests.html'
                    ],
                    timeout: 300 * 1000, // 5 min
                    console: true,
                    summaryOnly: false,
                    '--web-security': 'false' // we need this to allow CORS requests in PhantomJS
                }
            },
            deps: {
                options: {
                    urls: [
                        'http://localhost:9001/extensions/applicationinsights-dependencies-js/Tests/Selenium/Tests.html'
                    ],
                    timeout: 300 * 1000, // 5 min
                    console: true,
                    summaryOnly: false,
                    '--web-security': 'false'
                }
            },
            properties: {
                options: {
                    urls: [
                        'http://localhost:9001/extensions/applicationinsights-properties-js/Tests/Selenium/Tests.html'
                    ],
                    timeout: 5 * 60 * 1000, // 5 min
                    console: false,
                    summaryOnly: true,
                    '--web-security': 'false'
                }
            },
            reactnative: {
                options: {
                    urls: [
                        'http://localhost:9001/extensions/applicationinsights-react-native/Tests/Selenium/Tests.html'
                    ],
                    timeout: 5 * 60 * 1000, // 5 min
                    console: true,
                    summaryOnly: true,
                    '--web-security': 'false'
                }
            },
            aisku: {
                options: {
                    urls: [
                        'http://localhost:9001/AISKU/Tests/Selenium/Tests.html'
                    ],
                    timeout: 5 * 60 * 1000, // 5 min
                    console: true,
                    summaryOnly: false,
                    '--web-security': 'false'
                }
            },
            aichannel: {
                options: {
                    urls: [
                        'http://localhost:9001/channels/applicationinsights-channel-js/Tests/Selenium/Tests.html'
                    ],
                    timeout: 300 * 1000, // 5 min
                    console: false,
                    summaryOnly: true,
                    '--web-security': 'false'
                }
            },
            rollupes3: {
                options: {
                    urls: [
                        './tools/rollup-es3/Tests/Selenium/Tests.html'
                    ],
                    timeout: 300 * 1000, // 5 min
                    console: false,
                    summaryOnly: true,
                    '--web-security': 'false' // we need this to allow CORS requests in PhantomJS
                }
            },
            shims: {
                options: {
                    urls: [
                        './tools/shims/Tests/Selenium/Tests.html'
                    ],
                    timeout: 300 * 1000, // 5 min
                    console: false,
                    summaryOnly: true,
                    '--web-security': 'false' // we need this to allow CORS requests in PhantomJS
                }
            },
            clickanalytics: {
                options: {
                    urls: [
                        'http://localhost:9001/extensions/applicationinsights-clickanalytics-js/Tests/Selenium/Tests.html'
                    ],
                    timeout: 300 * 1000, // 5 min
                    console: true,
                    summaryOnly: false,
                    '--web-security': 'false' // we need this to allow CORS requests in PhantomJS
                }
            },
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.'
                }
            }        
        }
    });

    grunt.event.on('qunit.testStart', function (name) {
        grunt.log.ok('Running test: ' + name);
    });

    grunt.loadNpmTasks("@nevware21/grunt-ts-plugin");
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask("default", ["ts:rollupuglify", "ts:rollupes3", "ts:rollupes3test", "qunit:rollupes3", "ts:shims", "ts:shimstest", "qunit:shims", "ts:default", "uglify:ai", "uglify:snippet"]);
    grunt.registerTask("core", ["ts:core"]);
    grunt.registerTask("common", ["ts:common"]);
    grunt.registerTask("module", ["ts:module"]);
    grunt.registerTask("ai", ["ts:appinsights"]);
    grunt.registerTask("aitests", ["connect", "ts:appinsightstests", "qunit:aitests"]);
    grunt.registerTask("aisku", ["ts:aisku"]);
    grunt.registerTask("aiskulite", ["ts:aiskulite"]);
    grunt.registerTask("snippetvnext", ["uglify:snippetvNext"]);
    grunt.registerTask("aiskutests", ["connect", "ts:aiskutests", "qunit:aisku"]);
    grunt.registerTask("test", ["connect", "ts:default", "ts:test", "ts:testSchema", "ts:testE2E", "qunit:all"]);
    grunt.registerTask("test1ds", ["coretest", "common", "propertiestests", "depstest", "aitests", "aiskutests", "reactnativetests", "reacttests"]);
    grunt.registerTask("coretest", ["connect", "ts:coretest", "qunit:core"]);
    grunt.registerTask("commontest", ["connect", "ts:common", "ts:commontest", "qunit:common"]);
    grunt.registerTask("properties", ["ts:properties"]);
    grunt.registerTask("propertiestests", ["connect", "ts:propertiestests", "qunit:properties"]);
    grunt.registerTask("reactnative", ["ts:reactnative"]);
    grunt.registerTask("reactnativetests", ["connect", "qunit:reactnative"]);
    grunt.registerTask("deps", ["ts:deps"]);
    grunt.registerTask("depstest", [ "connect", "ts:depstest","qunit:deps"]);
    grunt.registerTask("debugplugin", ["ts:debugplugin"]);
    grunt.registerTask("aichannel", ["ts:aichannel"]);
    grunt.registerTask("aichanneltest", ["connect", "ts:aichanneltest", "qunit:aichannel"]);
    grunt.registerTask("rollupuglify", ["ts:rollupuglify"]);
    grunt.registerTask("rollupes3", ["ts:rollupes3", "ts:rollupes3test", "qunit:rollupes3"]);
    grunt.registerTask("rollupes3test", ["ts:rollupes3test", "qunit:rollupes3"]);
    grunt.registerTask("shims", ["ts:shims", "ts:shimstest", "qunit:shims"]);
    grunt.registerTask("shimstest", ["ts:shimstest", "qunit:shims"]);
    grunt.registerTask("clickanalytics", ["ts:clickanalytics"]);
    grunt.registerTask("clickanalyticstests", ["connect", "ts:clickanalyticstests", "qunit:clickanalytics"]);
    grunt.registerTask("tst-framework", ["ts:tst-framework"]);
    grunt.registerTask("serve", ["connect:server:keepalive"]);
};
