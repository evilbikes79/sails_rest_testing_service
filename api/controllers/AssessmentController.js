/**
 * EventController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
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
