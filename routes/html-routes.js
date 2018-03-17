// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
  });

  // add route loads the partyRooms.html page, where users can enter new books to the db
  app.get("/partyRooms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/allRooms.html"));
  });

};