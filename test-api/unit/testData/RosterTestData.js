/**
 * Created by rob_smith on 7/18/14.
 */

var validRoster = {
   "@context": "http://purl.imsglobal.org/ctx/caliper/v1/RosterEvent",
   "@type": "RosterEvent",
   "agent": "uri:engrade/student/23",
   "action": "added",
   "object": "uri:engrade/course/128",
   "startedAtTime": "2014-03-14T09:02:41-04:00",
   "auditing": "true"
 };

 var validRosterArray = {
 	"RosterEvents": [
	 	{
	 		"@context": "http://purl.imsglobal.org/ctx/caliper/v1/RosterEvent",
			"@type": "RosterEvent",
			"agent": "uri:engrade/student/23",
			"action": "added",
			"object": "uri:engrade/course/128",
			"startedAtTime": "2014-03-14T09:02:41-04:00",
			"auditing": "true"
	 	},
	 	{
	 		"@context": "http://purl.imsglobal.org/ctx/caliper/v1/RosterEvent",
			"@type": "RosterEvent",
			"agent": "uri:engrade/student/24",
			"action": "added",
			"object": "uri:engrade/course/128",
			"startedAtTime": "2014-03-14T09:02:41-04:00",
			"auditing": "true"
	 	},
	 	{
	 		"@context": "http://purl.imsglobal.org/ctx/caliper/v1/RosterEvent",
			"@type": "RosterEvent",
			"agent": "uri:engrade/student/25",
			"action": "added",
			"object": "uri:engrade/course/128",
			"startedAtTime": "2014-03-14T09:02:41-04:00",
			"auditing": "true"
	 	},
	 	{
	 		"@context": "http://purl.imsglobal.org/ctx/caliper/v1/RosterEvent",
			"@type": "RosterEvent",
			"agent": "uri:engrade/student/26",
			"action": "added",
			"object": "uri:engrade/course/128",
			"startedAtTime": "2014-03-14T09:02:41-04:00",
			"auditing": "true"
	 	}
 	]
 };

 var badRoster = {
			"@type": "RosterEvent",
			"agent": "uri:engrade/student/23",
			"action": "added",
			"object": "uri:engrade/course/128",
			"startedAtTime": "2014-03-14T09:02:41-04:00",
			"auditing": "true"
	 	};

var badRosterArray = {
 	"RosterEvents": [
	 	{
	 		"@context": "http://purl.imsglobal.org/ctx/caliper/v1/RosterEvent",
			"@type": "RosterEvent",
			"agent": "uri:engrade/student/23",
			"action": "added",
			"object": "uri:engrade/course/128",
			"startedAtTime": "2014-03-14T09:02:41-04:00",
			"auditing": "true"
	 	},
	 	{

			"@type": "RosterEvent",
			"agent": "uri:engrade/student/24",
			"action": "added",
			"object": "uri:engrade/course/128",
			"startedAtTime": "2014-03-14T09:02:41-04:00",
			"auditing": "true"
	 	},
	 	{
	 		"@context": "http://purl.imsglobal.org/ctx/caliper/v1/AssessmentEvent",
			"@type": "RosterEvent",
			"agent": "uri:engrade/student/25",
			"action": "added",
			"object": "uri:engrade/course/128",
			"startedAtTime": "2014-03-14T09:02:41-04:00",
			"auditing": "true"
	 	},
	 	{
	 		"@context": "http://purl.imsglobal.org/ctx/caliper/v1/RosterEvent",
			"@type": "RosterEvent",
			"agent": "uri:engrade/student/26",
			"action": "added",
			"object": "uri:engrade/course/128",
			"startedAtTime": "2014-03-14T09:02:41-04:00",
			"auditing": "true"
	 	}
 	]
 };

module.exports.validRoster = validRoster;
module.exports.validRosterArray = validRosterArray;
module.exports.badRoster = badRoster;
module.exports.badRosterArray = badRosterArray;


