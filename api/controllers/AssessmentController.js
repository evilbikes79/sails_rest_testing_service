'use strict';

module.exports = {
    
  index: function (req, res) {

    var reqPayload = req.body;

     var return_fixture = {}
     return_fixture["id"] = "EXT_ID";
     return_fixture["name"] = "Chapter 1 Quiz";
     return_fixture["type"] = "EXT_ID";
     return_fixture["origin"] = "EXT_ID";
     return_fixture["topics"] = ["Addition", "Subtraction"];
     return_fixture["instructionalMaterial"] = null;
     return_fixture["notes"] = null;
     return_fixture["dueDate"] = null;
     return_fixture["maxOutcomePossible"] = 100;
     return_fixture["createdBy"] = {id:"EXT_ID",name:"Mrs. Jean Doe",type:"instructor"};
     return_fixture["learningObjectives"] = ["uri:1", "uri:2", "url:3"];
     return_fixture["weight"] = 15.0;
     return_fixture["maxSubmissionsAllowed"] = 15.0;
     return_fixture["maxTimeAllowed"] = 3600;

    // Send a JSON responses
    return res.json(
        return_fixture
    );

  },

  show: function (req, res) {

     var reqPayload = req.body;

     var return_fixture = {}
     return_fixture["id"] = "EXT_ID";
     return_fixture["name"] = "Chapter 1 Quiz";
     return_fixture["type"] = "EXT_ID";
     return_fixture["origin"] = "EXT_ID";
     return_fixture["topics"] = ["Addition", "Subtraction"];
     return_fixture["instructionalMaterial"] = null;
     return_fixture["notes"] = null;
     return_fixture["dueDate"] = null;
     return_fixture["maxOutcomePossible"] = 100;
     return_fixture["createdBy"] = {id:"EXT_ID",name:"Mrs. Jean Doe",type:"instructor"};
     return_fixture["learningObjectives"] = ["uri:1", "uri:2", "url:3"];
     return_fixture["weight"] = 15.0;
     return_fixture["maxSubmissionsAllowed"] = 15.0;
     return_fixture["maxTimeAllowed"] = 3600;

    // Send a JSON response
    return res.json(
        return_fixture
    );
  }
  
};
