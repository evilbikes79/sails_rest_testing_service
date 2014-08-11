'use strict';

module.exports = {
    
  index: function (req, res) {
    var reqPayload = req.body;

     var return_fixture = {}
     return_fixture["id"] = "EXT_ID";
     return_fixture["name"] = "Identify Divisor";

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
     return_fixture["name"] = "Identify Divisor";

    // Send a JSON response
    return res.json(
        return_fixture
    );
  }
  
};