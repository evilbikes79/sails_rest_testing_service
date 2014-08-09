'use strict';

var outcomeEventController = require('../../api/controllers/OutcomeController');
var    sinon = require('sinon');
var    assert = require('assert');
var    outcomeData = require('../unit/testData/OutcomeTestData');


describe('The outcomeEventController', function () {

    describe('post (/create) method', function () {



        it( 'should work with batched events' , function() {
            var reqBody =  outcomeData.validOutcomeArray;

            var resJson = sinon.spy();

            outcomeEventController.create({
                body: reqBody
            }, {
                json: resJson
            });

            assert(resJson.calledWith(reqBody));


        });
        it('should work with events' , function() {
            var reqBody = outcomeData.validOutcome;
            var resJson = sinon.spy();

            outcomeEventController.create({
                body: reqBody
            }, {
                json: resJson
            });

            assert(resJson.calledWith(reqBody));

        });

    });

});
