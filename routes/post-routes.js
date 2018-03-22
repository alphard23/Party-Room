var db = require('../models');

// Routes
module.exports = function(app) {

    // GET route for retrieving all of the rooms
    app.get('/api/rooms', function(req, res) {
        var query = {};
        if (req.query.room_id) {
            query.Room = req.query.room_id;
        }
        db.Post.findAll({
            where: query
        }).then(function(dbRoom) {
            res.json(dbRoom);
        })
    })
}

// GET route for finding a single room
app.get('/api/rooms:id', function(req, res) {
    db.Room.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(dbRoom) {
        console.log(dbRoom);
        res.json(dbRoom);
    });
});