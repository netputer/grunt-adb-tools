# grunt-adb-tools

> Better way to run ADB command in grunt.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-adb-tools --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-adb-tools');
```

## The "adbInstall" task

### Overview

> Pushes an Android application to an emulator/device.

In your project's Gruntfile, add a section named `adbInstall` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  adbInstall: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

No options provided.

### Usage Examples

```js
grunt.initConfig({
  adbInstall: {
    someApps: {
      files: [{
        expand: true,
        cwd: 'tmp',
        src: ['*.apk']
      }]
    }
  },
})
```

## The "adbUninstall" task

### Overview

> Removes a package from the system.

```js
grunt.initConfig({
  adbUninstall: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

No options provided.

### Usage Examples

```js
grunt.initConfig({
  adbUninstall: {
    someApps: {
      packageNames: ['com.candl.athena']
    }
  },
})
```

## The "adbPush" task

### Overview

> Copies a specified file from your development computer to an emulator/device instance.

```js
grunt.initConfig({
  adbPush: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

No options provided.

### Usage Examples

```js
grunt.initConfig({
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
})
```

## The "adbStart" task

### Overview

> Start an Activity specified by intent.

```js
grunt.initConfig({
  adbStart: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

No options provided.

### Usage Examples

```js
grunt.initConfig({
  adbStart: {
    someApps: {
      intents: [
        'com.candl.athena',
        'http://www.baidu.com/'
      ]
    }
  },
})
```

## The "adbForceStop" task

### Overview

> Force stop everything associated with package name.

```js
grunt.initConfig({
  adbForceStop: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

No options provided.

### Usage Examples

```js
grunt.initConfig({
  adbForceStop: {
    someApps: {
      packageNames: ['com.candl.athena']
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
See [CHANGELOG.md](CHANGELOG.md).

## License
Copyright (c) 2014 NetPuter. Licensed under the MIT license.
