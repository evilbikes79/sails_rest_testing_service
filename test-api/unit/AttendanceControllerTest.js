'use strict';

var attendanceEventController = require('../../api/controllers/AttendanceController');
var    sinon = require('sinon');
var    assert = require('assert');
var    attendanceData = require('../unit/testData/AttendanceTestData');


describe('The attendanceEventController', function () {

    describe('post (/create) method', function () {



        it( 'should work with batched events' , function() {
            var reqBody =  attendanceData.validAttendanceArray;

            var resJson = sinon.spy();

            attendanceEventController.create({
                body: reqBody
            }, {
                json: resJson
            });

            assert(resJson.calledWith(reqBody));


        });
        it('should work with events' , function() {
            var reqBody = attendanceData.validAttendance;
            var resJson = sinon.spy();

            attendanceEventController.create({
                body: reqBody
            }, {
                json: resJson
            });

            assert(resJson.calledWith(reqBody));

        });

    });

});
