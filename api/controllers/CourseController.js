'use strict';

module.exports = {
    
  index: function (req, res) {
    var reqPayload = req.body;

     var return_fixture = {}
     return_fixture["id"] = "EXT_ID";
     return_fixture["name"] = "Chemistry";
     return_fixture["school"] = "Some State High";
     return_fixture["gradeLevel"] = "11";
     return_fixture["instructor"] = {id:"EXT_ID", name:"Mrs. Jean Doe", type:"instructor"};
     return_fixture["enrollmentStartDate"] = null;
     return_fixture["enrollmentEndDate"] = null;
}

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
     return_fixture["name"] = "Chemistry";
     return_fixture["school"] = "Some State High";
     return_fixture["gradeLevel"] = "11";
     return_fixture["instructor"] = {id:"EXT_ID", name:"Mrs. Jean Doe", type:"instructor"};
     return_fixture["enrollmentStartDate"] = null;
     return_fixture["enrollmentEndDate"] = null;

    // Send a JSON response
    return res.json(
        return_fixture
    );
  }
  
};
