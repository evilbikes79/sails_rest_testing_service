'use strict';

var assementEventController = require('../../api/controllers/AssessmentController');
var    sinon = require('sinon');
var    assert = require('assert');
var    assessmentData = require('../unit/testData/AssessmentTestData');


describe('The AssessmentEventController', function () {

    describe('post (/create) method', function () {

        it( 'should work with batched events' , function() {
            var reqBody =  assessmentData.validAssementArray;

            var resJson = sinon.spy();

            assementEventController.create({
                body: reqBody
            }, {
                json: resJson
            });

            assert(resJson.calledWith(reqBody));


        });
        it('should work with events' , function() {
            var reqBody = assessmentData.validAssement;
            var resJson = sinon.spy();

            assementEventController.create({
                body: reqBody
            }, {
                json: resJson
            });

            assert(resJson.calledWith(reqBody));

        });

    });

});
