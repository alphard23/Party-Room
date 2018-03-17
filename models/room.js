// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes) {
    // Creates a "Party room" model that matches up with DB
    var Room = sequelize.define(
        "room", {
            roomName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: [1, 30]
                }
            },

            adminID: {
                type: Sequelize.INTEGER
            },

            songCollection: {
                type: Sequelize.ARRAY
            },


            roomUsers: {
                type: Sequelize.ARRAY

            },

            created_at: {
                type: Sequelize.DATE
            }
        }, {
            timestamps: false
        }
    );
    // Associating Room with users
    Room.associate = function(models) {
        Room.belongsTo(models.User, {});
    };
    return Room;
};
// Syncs with DB
db.sync();