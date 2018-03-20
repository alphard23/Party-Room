var express = require("express");
var router = express.Router();

var Song = require("../models/")["Song"];
var Customer = require("../models/")["Customer"];
console.log(Song);
router.get("/", function(req, res) {
	res.redirect("/songs");
});

// get route, edited to match sequelize
router.get("/songs", function(req, res) {
	Song.findAll({ include: { model: Customer } }).then(function(song_data) {
		console.log(song_data);
		// into the main index, updating the page
		return res.render("index", { song_data });
	});
});

// post route to create songs
router.post("/songs/create", function(req, res) {
	Song.create({ song_name: req.body.song_name }).then(function(newSong) {
		console.log(newSong);
		res.redirect("/");
	});
});

// put route to devour a song
router.put("/songs/update", function(req, res) {
	// update one of the songs
	Customer.create({ customer: req.body.customer }).then(function(
		theCustomer
	) {
		return Song.findOne({ where: { id: req.body.song_id } }).then(function(
			theSong
		) {
			return theSong.setCustomer(theCustomer).then(function() {
				return theSong
					.updateAttributes({
						devoured: true
					})
					.then(function() {
						return res.redirect("/");
					});
			});
		});
	});
});

module.exports = router;
