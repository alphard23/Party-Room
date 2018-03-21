// THESE ARE ALL MY ROUTES
var express = require('express');
var router = express.Router();
var room = require('../models/room.js')
    // Route #1 is the GET route to establish GET ROOT '/', router.GET and root, function that returns nothing
router.get('/', function(request, response) {
    room.all(function(data) {
        var roomObject = {
            rooms: data
        };
        console.log('This is all the data!' + roomObject);
        res.render('home', roomObject)
    });
});

// Route #2 is a POST route when user clicks on create new room,updates the DB, and re-directs to the room page


// Route #3 is a GET route for the room page, render the response/index, res.render, when page renders it needs to pupp from DB the room info