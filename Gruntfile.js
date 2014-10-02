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

        adbPush: {
            someTexts: {
                files: [{
                    expand: true,
                    cwd: 'tmp',
                    src: ['*.txt'],
                    dest: '/sdcard/netputer'
                }]
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint and run this plugin's task(s).
    grunt.registerTask('install', ['jshint', 'adbInstall']);
    grunt.registerTask('push', ['jshint', 'adbPush']);

};
