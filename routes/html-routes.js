var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

      app.get("/", function(req, res){
        res.render("home");
      });
      
      app.get("/allRooms", function(req, res){
        res.render("allRooms");
      });
      
      app.get("/songs", function(req, res){
        res.render("songs");
      });

      app.get("/youtube", function(req, res){
        res.sendFile(path.join(__dirname, "../public/youtube.html"));
      });

  };
  