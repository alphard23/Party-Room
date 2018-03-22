// var db = require('../models');
// // Route #1 is the GET route to establish GET ROOT '/', router.GET and root, function that returns nothing
// module.exports = function(app) {
//     app.get('/', function(request, response) {
//         console.log('root')
//     });

//     // Route #2 is a POST route when user clicks on create new room,updates the DB, and re-directs to the room page
//     app.post('/newroom', function(request, response) {
//         room.create(request.body.roomName, function(result) {
//             res.render('nameofroom', result);
//         });
//     });

//     // Route #3 is a GET route for the room page, render the response/index, res.render, when page renders it needs to pull from DB the room info
//     app.get('/:roomID', function(request, response) {
//         console.log('root')
//         db.room.findAll({
//             where: {
//                 id: request.params.roomID
//             }
//         }).then(function(data) {
//             response.json(data)
//         })
//     });
// }

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

    app.get("/", function(req, res) {
        res.render("../public/html/home.html");
    });

    app.get("/partyrooms", function(req, res) {
        res.render(path.join(__dirname, "../public/html/partyrooms.html"));
    });

    app.get("/yourparty", function(req, res) {
        res.render(path.join(__dirname, "../public/html/yourparty.html"));
    });
};