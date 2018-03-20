var db = require("../models");

module.exports = function(app) {
    app.get("/api/room", function(req, res) {
        console.log("heerererer")
            // We set the value to an array of the models we want to include in a left outer join
            // In this case, just db.Post
            // db.Room.findAll({
            //     include: [db.Room]
            // }).then(function(dbRoom) {
            //     res.json(dbRoom);
            // });
        return res.json({ hello: "hello" })
    });

    app.get("/api/room/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Room.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Room]
        }).then(function(dbRoom) {
            res.json(dbRoom);
        });
    });

    app.post("/api/room", function(req, res) {
        console.log(data);
        db.Room.create(req.body).then(function(dbRoom) {
            res.render(dbRoom);
        });
    });

};