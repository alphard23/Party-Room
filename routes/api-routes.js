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
                res.json({});
            });
    });

    app.post('/api/songs', function(req, res) {
        db.song.create({
                name: req.body.songName
            })
            .then(function(dbSong) {
                res.json(dbSong);
            });
    });

    app.get('/api/songs', function(req, res) {
        db.song.findAll({})
            .then(function(dbSongList) {
                res.json(dbSongList);
            });
    });


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
};