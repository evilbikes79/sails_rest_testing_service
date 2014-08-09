'use strict';

var isRosterValid = require('../../api/policies/isRosterValid');
var assert = require('assert');
var httpMocks = require('node-mocks-http');
var rosterData = require('../unit/testData/RosterTestData');


describe('Test isRosterValid policy', function (){
    describe('invalid json-ld missing context', function () {

        var req = {};

        it('should return error with bad events' , function() {

            req.body =  rosterData.badRoster;
            var resp = httpMocks.createResponse();


            isRosterValid(req, resp);

            assert.equal(resp._getStatusCode(),400);

        });

        it('should return error with bad batched events' , function() {

            req.body =  rosterData.badRosterArray;
            var resp = httpMocks.createResponse();


            isRosterValid(req, resp);

            assert.equal(resp._getStatusCode(),400);

        });
    });
});