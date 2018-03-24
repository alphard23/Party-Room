// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

   // POST route for saving a new post
   app.post("/api/rooms", function(req, res) {

    db.room.create({
      roomName: req.body.partyRoom,
      roomUsers: "1"
    })
    .then(function(dbPost) {
     console.log("saved")
     res.json({})
    });

  });
//------------------------------------------

app.get("/api/rooms/:term", function(req, res){
  
  console.log(req.params);
  db.room.findOne({
    where: {
      roomName: req.params.term,
      roomUsers: "1"
    }
  }).then(function(dbRoom) {
    //console.log(dbRoom);
    res.json({dbRoom});
  });

});

//------------------------------------------------
app.post("/api/songs", function(req, res) {
  db.song.create({
    name: req.body.songName     
  })
  .then(function(dbSong) { 
    res.json({dbSong});
  });
});
//-----------------------------------------------

app.get('/api/songs', function(req, res) {
  db.song.findAll({})
      .then(function(dbSongList) {
          res.json(dbSongList);
      });
});

//-----------------------------------------------

// route for updating the song likes
app.put('/api/songs/:id', function(req, res) {
  db.song.update({ likes: req.body.likes }, {
          where: {
              id: req.params.id
          }
      })
      .then(function(data) {
          res.json(data);
      });
});
//-----------------------------------------------

};







  

  // // Get route for returning posts of a specific category
  // app.get("/api/posts/category/:category", function(req, res) {
  //   db.Post.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //   .then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // Get rotue for retrieving a single post
  // app.get("/api/posts/:id", function(req, res) {
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // POST route for saving a new post
  // app.post("/api/rooms", function(req, res) {
  //   console.log(req.body);
  //   db.Post.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   })
  //   .then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //   .then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });
