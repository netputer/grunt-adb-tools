/*
 * grunt-adb-tools
 * https://github.com/netputer/grunt-adb-tools
 *
 * Copyright (c) 2014 NetPuter
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // load all npm grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },

        // Configuration to be run.
        adbInstall: {
            someApps: {
                files: [{
                    expand: true,
                    cwd: 'tmp',
                    src: ['*.apk']
                }]
            }
        },

        adbUninstall: {
            someApps: {
                packageNames: ['com.candl.athena']
            }
        },

        adbPush: {
            someTexts: {
                files: [{
                    expand: true,
                    cwd: 'tmp',
                    src: ['*.txt'],
                    dest: '/sdcard/netputer'
                }]
            }
        },

        adbStart: {
            someApps: {
                intents: [
                    'com.candl.athena',
                    'http://www.baidu.com/'
                ]
            }
        },

        adbForceStop: {
            someApps: {
                packageNames: ['com.candl.athena']
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint this plugin's task(s).
    grunt.registerTask('default', ['jshint']);

    grunt.registerTask('install', ['adbInstall']);
    grunt.registerTask('uninstall', ['adbUninstall']);
    grunt.registerTask('push', ['adbPush']);
    grunt.registerTask('start', ['adbStart']);
    grunt.registerTask('force-stop', ['adbForceStop']);

};
