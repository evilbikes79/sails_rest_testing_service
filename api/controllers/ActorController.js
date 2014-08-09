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
     return_fixture["id"] = "EXT_ID";

    // Send a JSON responses
    return res.json(
        return_fixture
    );
  },

  show: function (req, res) {
    var reqPayload = req.body;

     utils.httpForward(reqPayload);

     var return_fixture = {}
     return_fixture["id"] = "EXT_ID";
     return_fixture["name"] = "Chapter 1 Quiz";
     return_fixture["type"] = "EXT_ID";
     return_fixture["origin"] = "EXT_ID";
     return_fixture["topics"] = ["Addition", "Subtraction"];
     return_fixture["instructionalMaterial"] = null;
     return_fixture["notes"] = null;
     return_fixture["id"] = "EXT_ID";

    // Send a JSON response
    return res.json(
        return_fixture
    );
  }
  
};
