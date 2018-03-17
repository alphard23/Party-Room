// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Party room" model that matches up with DB
var Room = sequelize.define("room", {
    roomName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 30]
        }
    },

    songName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 30]
        }
    },

    songArtist: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 30]
        }
    },

    roomMembers: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 30]
        }
    },
    created_at: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

// Associating Room with users
Room.associate = function(models) {
    Author.hasMany(models.Post, {
        onDelete: 'cascade'
    });
};
return Room;

// Syncs with DB
Room.sync();

// Makes the Party Model available for other files (will also create a table)
module.exports = Room;