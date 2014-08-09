/**
 * Created by rob_smith on 7/18/14.
 */

var validAssessmentArray =  {
    "assessmentEvents": [
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AssessmentEvent",
            "@type": "AssessmentEvent",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "agent": "uri:engrade/instructor/3",
            "action": "created",
            "object": {
                "@id": "uri:engrade/assessment/128",
                "@type": "assessment",
                "class": "uri:engrade/class/32",
                "category": "Homework",
                "startDate": "2014-03-14T09:02:41-04:00",
                "dueDate": "2014-03-14T09:02:41-04:00",
                "maxScorePossible": "89.99"
            }
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AssessmentEvent",
            "@type": "AssessmentEvent",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "agent": "uri:engrade/instructor/3",
            "action": "created",
            "object": {
                "@id": "uri:engrade/assessment/129",
                "@type": "assessment",
                "class": "uri:engrade/class/32",
                "category": "Homework",
                "startDate": "2014-03-14T09:02:41-04:00",
                "dueDate": "2014-03-14T09:02:41-04:00",
                "maxScorePossible": "89.99"
            }
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AssessmentEvent",
            "@type": "AssessmentEvent",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "agent": "uri:engrade/instructor/3",
            "action": "created",
            "object": {
                "@id": "uri:engrade/assessment/130",
                "@type": "assessment",
                "class": "uri:engrade/class/32",
                "category": "Homework",
                "startDate": "2014-03-14T09:02:41-04:00",
                "dueDate": "2014-03-14T09:02:41-04:00",
                "maxScorePossible": "89.99"
            }
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AssessmentEvent",
            "@type": "AssessmentEvent",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "agent": "uri:engrade/instructor/3",
            "action": "created",
            "object": {
                "@id": "uri:engrade/assessment/131",
                "@type": "assessment",
                "class": "uri:engrade/class/32",
                "category": "Homework",
                "startDate": "2014-03-14T09:02:41-04:00",
                "dueDate": "2014-03-14T09:02:41-04:00",
                "maxScorePossible": "89.99"
            }
        }
    ]

};
var validAssessment =  {
    "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AssessmentEvent",
    "@type": "AssessmentEvent",
    "startedAtTime": "2014-03-14T09:02:41-04:00",
    "agent": "uri:connect/instructor/3",
    "action": "created",
    "object": {
        "@id": "uri:connect/assessment/128",
        "@type": "assessment",
        "course": "uri:connect/course/32",
        "section": "uri:connect/section/12",
        "category": "Homework",
        "startDate": "2014-03-14T09:02:41-04:00",
        "dueDate": "2014-03-14T09:02:41-04:00",
        "maxScorePossible": "89.99",
        "topics": ["uri:connect/topic/matrix_addition", "uri:connect/topic/matrix_multiplication"]
    }
};
var badAssessment =  {
    "@type": "AssessmentEvent",
    "startedAtTime": "2014-03-14T09:02:41-04:00",
    "agent": "uri:connect/instructor/3",
    "action": "created",
    "object": {
        "@id": "uri:connect/assessment/128",
        "@type": "assessment",
        "course": "uri:connect/course/32",
        "section": "uri:connect/section/12",
        "category": "Homework",
        "startDate": "2014-03-14T09:02:41-04:00",
        "dueDate": "2014-03-14T09:02:41-04:00",
        "maxScorePossible": "89.99",
        "topics": ["uri:connect/topic/matrix_addition", "uri:connect/topic/matrix_multiplication"]
    }
};
var badAssessmentArray =  {
    "assessmentEvents": [
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AssessmentEvent",
            "@type": "AssessmentEvent",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "agent": "uri:engrade/instructor/3",
            "action": "created",
            "object": {
                "@id": "uri:engrade/assessment/128",
                "@type": "assessment",
                "class": "uri:engrade/class/32",
                "category": "Homework",
                "startDate": "2014-03-14T09:02:41-04:00",
                "dueDate": "2014-03-14T09:02:41-04:00",
                "maxScorePossible": "89.99"
            }
        },
        {
            "@type": "AssessmentEvent",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "agent": "uri:engrade/instructor/3",
            "action": "created",
            "object": {
                "@id": "uri:engrade/assessment/129",
                "@type": "assessment",
                "class": "uri:engrade/class/32",
                "category": "Homework",
                "startDate": "2014-03-14T09:02:41-04:00",
                "dueDate": "2014-03-14T09:02:41-04:00",
                "maxScorePossible": "89.99"
            }
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AssessmentEvent",
            "@type": "AssessmentEvent",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "agent": "uri:engrade/instructor/3",
            "action": "created",
            "object": {
                "@id": "uri:engrade/assessment/130",
                "@type": "assessment",
                "class": "uri:engrade/class/32",
                "category": "Homework",
                "startDate": "2014-03-14T09:02:41-04:00",
                "dueDate": "2014-03-14T09:02:41-04:00",
                "maxScorePossible": "89.99"
            }
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AssessmentEvent",
            "@type": "AssessmentEvent",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "agent": "uri:engrade/instructor/3",
            "action": "created",
            "object": {
                "@id": "uri:engrade/assessment/131",
                "@type": "assessment",
                "class": "uri:engrade/class/32",
                "category": "Homework",
                "startDate": "2014-03-14T09:02:41-04:00",
                "dueDate": "2014-03-14T09:02:41-04:00",
                "maxScorePossible": "89.99"
            }
        }
    ]

};

module.exports.validAssement = validAssessment;
module.exports.validAssementArray = validAssessmentArray;
module.exports.badAssessment = badAssessment;
module.exports.badAssessmentArray = badAssessmentArray;