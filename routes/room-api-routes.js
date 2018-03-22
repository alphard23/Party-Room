var db = require('../models');

// Routes
module.exports = function(app) {

    // GET route for retrieving all of the rooms
    app.get('/api/rooms', function(req, res) {
        db.Room.findAll({}).then(function(dbRoom) {
            res.json(dbRoom);
        });
    });


    // GET route for finding a single room
    app.get('/api/rooms:id', function(req, res) {
        db.Room.findOne({
            where: {
                name: req.params.name
            }
        }).then(function(dbRoom) {
            console.log(dbRoom);
            res.json(dbRoom);
        });
    });
}