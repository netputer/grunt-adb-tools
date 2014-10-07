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

    grunt.registerMultiTask('adbInstall', 'Pushes an Android application to an emulator/device.', function () {

        var done = this.async();
        var completeCount = 0;
        var files = this.files;

        files.forEach(function (file) {
            run('adb install ' + file.src, function () {
                if (++completeCount === files.length) {
                    done();
                }
            });
        });

    });

    grunt.registerMultiTask('adbUninstall', 'Removes a package from the system.', function () {

        var done = this.async();
        var completeCount = 0;
        var packageNames = this.data.packageNames;

        packageNames.forEach(function (packageName) {
            run('adb uninstall ' + packageName, function () {
                if (++completeCount === packageNames.length) {
                    done();
                }
            });
        });

    });

    grunt.registerMultiTask('adbPush', 'Copies a specified file from your development computer to an emulator/device instance.', function () {

        var done = this.async();
        var completeCount = 0;
        var files = this.files;

        files.forEach(function (file) {
            run('adb push ' + file.src + ' ' + file.dest, function () {
                if (++completeCount === files.length) {
                    done();
                }
            });
        });

    });

    grunt.registerMultiTask('adbStart', 'Start an Activity specified by intent.', function () {

        var done = this.async();
        var completeCount = 0;
        var intents = this.data.intents;

        intents.forEach(function (intent) {
            run('adb shell am start ' + intent, function () {
                if (++completeCount === intents.length) {
                    done();
                }
            });
        });

    });

    grunt.registerMultiTask('adbForceStop', 'Force stop everything associated with package name.', function () {

        var done = this.async();
        var completeCount = 0;
        var packageNames = this.data.packageNames;

        packageNames.forEach(function (packageName) {
            run('adb shell am force-stop ' + packageName, function () {
                if (++completeCount === packageNames.length) {
                    done();
                }
            });
        });

    });

};
