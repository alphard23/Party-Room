// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// Creates a "Party room" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
    var Song = sequelize.define("song", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },

        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },


    }, {
        timestamps: true,
    });
    return Song;

}