/**
 * Created by rob_smith on 7/18/14.
 */
var validAttendance = {
    "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AttendanceEvent",
    "@type": "AttendanceEvent",
    "agent": "uri:engrade/student/23",
    "action": "present",
    "object": "uri:engrade/class/128",
    "startedAtTime": "2014-03-14T09:02:41-04:00",
    "_attendance": "P"
};
var validAttendanceArray =  {
    "AttendanceEvents": [
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AttendanceEvent",
            "@type": "AttendanceEvent",
            "agent": "uri:engrade/student/23",
            "action": "present",
            "object": "uri:engrade/class/128",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "_attendance": "P"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AttendanceEvent",
            "@type": "AttendanceEvent",
            "agent": "uri:engrade/student/23",
            "action": "present",
            "object": "uri:engrade/class/128",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "_attendance": "P"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AttendanceEvent",
            "@type": "AttendanceEvent",
            "agent": "uri:engrade/student/23",
            "action": "present",
            "object": "uri:engrade/class/128",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "_attendance": "P"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AttendanceEvent",
            "@type": "AttendanceEvent",
            "agent": "uri:engrade/student/23",
            "action": "present",
            "object": "uri:engrade/class/128",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "_attendance": "P"
        }
    ]

};
var badAttendance = {
    "@type": "AttendanceEvent",
    "agent": "uri:engrade/student/23",
    "action": "present",
    "object": "uri:engrade/class/128",
    "startedAtTime": "2014-03-14T09:02:41-04:00",
    "_attendance": "P"
};

var badAttendanceArray =  {
    "AttendanceEvents": [
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AttendanceEvent",
            "@type": "AttendanceEvent",
            "agent": "uri:engrade/student/23",
            "action": "present",
            "object": "uri:engrade/class/128",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "_attendance": "P"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AttendanceEvent",
            "@type": "AttendanceEvent",
            "agent": "uri:engrade/student/23",
            "action": "present",
            "object": "uri:engrade/class/128",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "_attendance": "P"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AttendanceEvent",
            "@type": "AttendanceEvent",
            "agent": "uri:engrade/student/23",
            "action": "present",
            "object": "uri:engrade/class/128",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "_attendance": "P"
        },
        {
            "@context": "http://purl.imsglobal.org/ctx/caliper/v1/AssessmentEvent",
            "@type": "AttendanceEvent",
            "agent": "uri:engrade/student/23",
            "action": "present",
            "object": "uri:engrade/class/128",
            "startedAtTime": "2014-03-14T09:02:41-04:00",
            "_attendance": "P"
        }
    ]

};

module.exports.validAttendance = validAttendance;
module.exports.validAttendanceArray = validAttendanceArray;
module.exports.badAttendance = badAttendance;
module.exports.badAttendanceArray = badAttendanceArray;