var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

      app.get("/home", function(req, res){
        res.render("home");
      });
      
      app.get("/allRooms", function(req, res){
        res.render("allRooms");
      });
      
      app.get("/songs", function(req, res){
        res.render("songs");
      });
  
  };
  