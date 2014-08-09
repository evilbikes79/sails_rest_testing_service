/**
 * Created by rob_smith on 7/17/14.
 */
'use strict';

var isAssessmentValid = require('../../api/policies/isAssessmentValid');
var  assert = require('assert');
var httpMocks = require('node-mocks-http');
var assessmentData = require('../unit/testData/AssessmentTestData');


describe('Test isAssessmentValid policy', function (){
    describe('invalid json-ld missing context', function () {

        var req = {};

        it('should return error with bad events' , function() {

            req.body =  assessmentData.badAssessment;
            var resp = httpMocks.createResponse();


            isAssessmentValid( req, resp);

            assert.equal(resp._getStatusCode(),400);

        });
        it('should return error with bad batched events' , function() {

            req.body =  assessmentData.badAssessmentArray;
            var resp = httpMocks.createResponse();


            isAssessmentValid( req, resp);

            assert.equal(resp._getStatusCode(),400);

        });
    });

});