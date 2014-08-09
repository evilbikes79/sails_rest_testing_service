'use strict';

var rosterEventController = require('../../api/controllers/RosterController');
var    sinon = require('sinon');
var    assert = require('assert');
var    rosterData = require('../unit/testData/RosterTestData');


describe('The RosterEventController', function () {

    describe('post (/create) method', function () {



        it( 'should work with batched events' , function() {
            var reqBody =  rosterData.validRosterArray;

            var resJson = sinon.spy();

            rosterEventController.create({
                body: reqBody
            }, {
                json: resJson
            });

            assert(resJson.calledWith(reqBody));


        });
        it('should work with events' , function() {
            var reqBody = rosterData.validRoster;
            var resJson = sinon.spy();

            rosterEventController.create({
                body: reqBody
            }, {
                json: resJson
            });

            assert(resJson.calledWith(reqBody));

        });

    });

});
