'use strict';

module.exports = {
    
  index: function (req, res) {
    var reqPayload = req.body;

     var return_fixture = {}
     return_fixture["assessment"] = {id:"EXT_ID",name:"Chapter 4 Quiz",type:"quiz",origin: "Math Online",topics: ["Multiplication", "Division"],dueDate: "",maxOutcomePossible:100,createdBy: {id:"EXT_ID",name:"Mrs. Jean Doe",type:"instructor"},weight:15.0,maxSubmissionsAllowed:1,maxTimeAllowed:3600};
     return_fixture["outcome"] = "Chapter 1 Quiz";
     return_fixture["startedDate"] = "EXT_ID";
     return_fixture["submittedDate"] = "EXT_ID";
     return_fixture["gradedDate"] = ["Addition", "Subtraction"];
     return_fixture["timeTaken"] = null;

    // Send a JSON responses
    return res.json(
        return_fixture
    );
  },

  show: function (req, res) {
    var reqPayload = req.body;

     utils.httpForward(reqPayload);

     var return_fixture = {}
     return_fixture["assessment"] = {id:"EXT_ID",name:"Chapter 4 Quiz",type:"quiz",origin: "Math Online",topics: ["Multiplication", "Division"],dueDate: "",maxOutcomePossible:100,createdBy: {id:"EXT_ID",name:"Mrs. Jean Doe",type:"instructor"},weight:15.0,maxSubmissionsAllowed:1,maxTimeAllowed:3600};
     return_fixture["outcome"] = "Chapter 1 Quiz";
     return_fixture["startedDate"] = "EXT_ID";
     return_fixture["submittedDate"] = "EXT_ID";
     return_fixture["gradedDate"] = ["Addition", "Subtraction"];
     return_fixture["timeTaken"] = null;

    // Send a JSON response
    return res.json(
        return_fixture
    );
  }
  
};