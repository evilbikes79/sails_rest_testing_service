# Analytics REST Test service

A REST service for transmitting JSON-LD based learning object FIXTURES.

## The Tech

The "glue code" libraries being used:

* [Node JS](http://nodejs.org/) for HTTP serving and server JS moduling.
* [Node Package Manager](https://npmjs.org/) for server JS package managing.
* [Git](http://git-scm.com/) for source controlling.
* [Sails JS](http://sailsjs.org/) for javascript web application structuring and API supporting.
* [Grunt](http://www.gruntjs.com/) for server and client JS building and tasking.
* [YUIDoc](http://yui.github.io/yuidoc/) for JS documenting.
* [Mocha](http://mochajs.org/) for JS unit testing.
* [Chai](http://chaijs.com/) for unit test asserting.
* [When JS](https://github.com/cujojs/when) A solid, fast Promises/A+ implementation and other asyncing.
* [Waterline](https://github.com/balderdashy/waterline) for validation, casting and object persisting.

### Project Requirements

1) Install [Node JS](http://nodejs.org/) and [NPM](https://npmjs.org/) (NPM comes with node).

2) Install [Git](http://git-scm.com/).

3) Clone the repository

### Project Setup

From the project directory , run the following from the command line:

1) Install [Grunt CLI](https://github.com/gruntjs/grunt-cli/) and the [Sails CLI](http://sailsjs.org/#!documentation/) global dependencies:

	npm install grunt-cli sails node-inspector -g

2) Install all of the local server side JavaScript dependencies:

	npm install

Note: Linux/Unix/Mac OS users will have prefix all `npm install` commands with `sudo`, like so:

    sudo npm install grunt-cli sails node-inspector -g
    sudo npm install

### Available Build, Test and Deploy Grunt Commands

There are a number of [Grunt](http://www.gruntjs.com/) based targets that are used for running different build tasks:

* `grunt build`: Build accessible stand alone version.
* `grunt test`: Run all js [Mocha](http://mochajs.org/) unit tests headless in [PhantomJS](http://phantomjs.org/).
* `grunt yuidoc`: Generate code documentation.

To get a list of all available grunt targets run

    'grunt --help`

### Environmental Settings

There are two environments are provided `development`, and `production.

* `development` Any client side code optimizations will be switched off. All code watchers are turned on.
* `production` All code is optimized for fast loading and performance. All development and debug hooks are disabled.

To run with a different environment, just specify `NODE_ENV` as you call grunt:

    $ NODE_ENV=production grunt

If you are using node directly instead of grunt, it is very similar:

    $ NODE_ENV=test node app

### Running The Project

There are a couple of ways to start the project.

1) Using sails run the command:

    sails lift

2) Using Node's command line:

    node app
