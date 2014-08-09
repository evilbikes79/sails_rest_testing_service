/**
 * Created by rob_smith on 7/18/14.
 */
var validOutcome = {
    "@context": "http://purl.imsglobal.org/ctx/caliper/v1/OutcomeEvent",
    "@type": "OutcomeEvent",
    "agent": "uri:connect/student/23",
    "action": "receivedGradeFor",
    "object": "uri:connect/AssessmentEvent/23>128>1",
    "endedAtTime": "2014-03-14T09:02:41-04:00",
    "outcome": "91.5"
};
var validOutcomeArray =  {
    "OutcomeEvents": [
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/OutcomeEvent",
            "@type": "OutcomeEvent",
            "agent": "uri:connect/student/23",
            "action": "receivedGradeFor",
            "object": "uri:connect/AssessmentEvent/23>128>1",
            "endedAtTime": "2014-03-14T09:02:41-04:00",
            "outcome": "91.5"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/OutcomeEvent",
            "@type": "OutcomeEvent",
            "agent": "uri:connect/student/23",
            "action": "receivedGradeFor",
            "object": "uri:connect/AssessmentEvent/23>128>1",
            "endedAtTime": "2014-03-14T09:02:41-04:00",
            "outcome": "91.5"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/OutcomeEvent",
            "@type": "OutcomeEvent",
            "agent": "uri:connect/student/23",
            "action": "receivedGradeFor",
            "object": "uri:connect/AssessmentEvent/23>128>1",
            "endedAtTime": "2014-03-14T09:02:41-04:00",
            "outcome": "91.5"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/OutcomeEvent",
            "@type": "OutcomeEvent",
            "agent": "uri:connect/student/23",
            "action": "receivedGradeFor",
            "object": "uri:connect/AssessmentEvent/23>128>1",
            "endedAtTime": "2014-03-14T09:02:41-04:00",
            "outcome": "91.5"
        }
    ]

};
var badOutcome = {
    "@type": "OutcomeEvent",
    "agent": "uri:connect/student/23",
    "action": "receivedGradeFor",
    "object": "uri:connect/AssessmentEvent/23>128>1",
    "endedAtTime": "2014-03-14T09:02:41-04:00",
    "outcome": "91.5"
};
var badOutcomeArray = {
    "OutcomeEvents": [
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/OutcomeEvent",
            "@type": "OutcomeEvent",
            "agent": "uri:connect/student/23",
            "action": "receivedGradeFor",
            "object": "uri:connect/AssessmentEvent/23>128>1",
            "endedAtTime": "2014-03-14T09:02:41-04:00",
            "outcome": "91.5"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/OutcomeEvent",
            "@type": "OutcomeEvent",
            "agent": "uri:connect/student/23",
            "action": "receivedGradeFor",
            "object": "uri:connect/AssessmentEvent/23>128>1",
            "endedAtTime": "2014-03-14T09:02:41-04:00",
            "outcome": "91.5"
        },
        {

            "@type": "OutcomeEvent",
            "agent": "uri:connect/student/23",
            "action": "receivedGradeFor",
            "object": "uri:connect/AssessmentEvent/23>128>1",
            "endedAtTime": "2014-03-14T09:02:41-04:00",
            "outcome": "91.5"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/OutcomeEvent",
            "@type": "OutcomeEvent",
            "agent": "uri:connect/student/23",
            "action": "receivedGradeFor",
            "object": "uri:connect/AssessmentEvent/23>128>1",
            "endedAtTime": "2014-03-14T09:02:41-04:00",
            "outcome": "91.5"
        }
    ]

};

module.exports.validOutcome = validOutcome;
module.exports.validOutcomeArray = validOutcomeArray;
module.exports.badOutcome = badOutcome;
module.exports.badOutcomeArray = badOutcomeArray;