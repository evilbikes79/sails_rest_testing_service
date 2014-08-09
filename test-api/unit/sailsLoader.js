'use strict';

var Sails = require('sails');
var fs = require('fs');
var config = require('./testConfig');
var app;
var testLog = config.testLog;

// Global before hook

before(function (done) {
	this.timeout(0);

    // Lift Sails and start the server
    Sails.lift({

        log: config.logConfig

    }, function (err, sails) {
        app = sails;
        done(err, sails);
    });
});

// Global after hook
after(function (done){
    app.lower(done);
    fs.unlink(testLog);
});

module.exports.app = app;
