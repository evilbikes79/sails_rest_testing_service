'use strict';

var testLog = './collectionServiceTest.log';
var logConfig= {
            level: 'info',
            filePath: testLog,
            timestamp: true,
            colorize: false
        };

module.exports.testLog = testLog;
module.exports.logConfig = logConfig;