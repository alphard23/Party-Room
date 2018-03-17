// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Party room" model that matches up with DB
var Partygoers = sequelize.define("partygoers", {
    name: {
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

// Syncs with DB
Partygoers.sync();

// Makes the Party Model available for other files (will also create a table)
module.exports = Partygoers;