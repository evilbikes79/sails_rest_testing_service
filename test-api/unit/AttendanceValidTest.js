'use strict';

var isAttendanceValid = require('../../api/policies/isAttendanceValid');
var  assert = require('assert');
var httpMocks = require('node-mocks-http');
var attendanceData = require('../unit/testData/AttendanceTestData');


describe('Test isAttendanceValid policy', function (){
    describe('invalid json-ld missing context', function () {

        var req = {};

        it('should return error with bad events' , function() {

            req.body =  attendanceData.badAttendance;
            var resp = httpMocks.createResponse();


            isAttendanceValid( req, resp);

            assert.equal(resp._getStatusCode(),400);

        });

        it('should return error with batched bad events' , function() {

            req.body =  attendanceData.badAttendanceArray;
            var resp = httpMocks.createResponse();


            isAttendanceValid( req, resp);

            assert.equal(resp._getStatusCode(),400);

        });
    });
});