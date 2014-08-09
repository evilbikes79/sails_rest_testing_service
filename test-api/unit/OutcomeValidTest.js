'use strict';

var isOutcomeValid = require('../../api/policies/isOutcomeValid');
var assert = require('assert');
var httpMocks = require('node-mocks-http');
var outcomeData = require('../unit/testData/OutcomeTestData');


describe('Test isOutcomeValid policy', function (){
    describe('invalid json-ld missing context', function () {

        var req = {};

        it('should return error with events' , function() {

            req.body =  outcomeData.badOutcome;
            var resp = httpMocks.createResponse();


            isOutcomeValid(req, resp);

            assert.equal(resp._getStatusCode(),400);

        });

        it('should return error with bad batched events' , function() {

            req.body =  outcomeData.badOutcomeArray;
            var resp = httpMocks.createResponse();


            isOutcomeValid(req, resp);

            assert.equal(resp._getStatusCode(),400);

        });
    });
});