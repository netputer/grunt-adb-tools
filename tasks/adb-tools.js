/*
 * grunt-adb-tools
 * https://github.com/netputer/grunt-adb-tools
 *
 * Copyright (c) 2014 NetPuter
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec;

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    var run = function (command, callback) {
        exec(command, function (err, stdout, stderr) {
            grunt.log.ok('Command:', command);

            if (err) {
                grunt.warn(err);
            }

            grunt.log.ok(stdout);
            grunt.log.error(stderr);
            grunt.log.writeln();

            callback(err, stdout, stderr);
        });
    };

    grunt.registerMultiTask('adbPush', 'Copies a specified file from your development computer to an emulator/device instance.', function () {

        var done = this.async();
        var completeFiles = 0;
        var files = this.files;

        // Iterate over all specified file groups.
        files.forEach(function (file) {
            run('adb push ' + file.src + ' ' + file.dest, function () {
                completeFiles++;

                if (completeFiles === files.length) {
                    done();
                }
            });
        });
    });

};
