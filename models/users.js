// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// Creates a "Party room" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        created_at: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false
    });
    // Associating Room with users
    // User.associate = function(models) {
    //     User.hasMany(models.Room, {});
    // };
    return User;

}