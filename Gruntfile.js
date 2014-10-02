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

        // Configuration to be run (and then tested).
        adb_tools: {
            default_options: {
                options: {
                },
                files: {
                }
            },
            custom_options: {
                options: {
                },
                files: {
                }
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint and run this plugin's task(s).
    grunt.registerTask('default', ['jshint', 'adb_tools']);

};
