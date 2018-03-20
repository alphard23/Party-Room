// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes) {
    // Creates a "Party room" model that matches up with DB
    console.log('this is the sequelize!!!! in room!!!!', DataTypes);
    var Room = sequelize.define("room", {
        roomName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        adminID: {
            type: DataTypes.INTEGER
        },

        songCollection: {
            type: DataTypes.STRING,
            allowNull: false,
            get: function() {
                return this.getDataValue('songCollection').split(',')
            },
            set: function(val) {
                this.setDataValue('songCollection', val.join(','));
            }
        },


        roomUsers: {
            type: DataTypes.STRING,
            allowNull: false,
            get: function() {
                return this.getDataValue('roomUsers').split(',')
            },
            set: function(val) {
                this.setDataValue('roomUsers', val.join(','));
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'beginTime',
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'beginTime',
            defaultValue: sequelize.literal('NOW()')
        }
        // created_at: {
        //     type: DataTypes.DATE
        // }
    }, {
        timestamps: true
    });
    // Associating Room with users
    // Room.associate = function(models) {
    //     Room.belongsTo(models.User, {});
    // };
    console.log('this is rooom!!! right before we export', Room);
    return Room;
};
// Syncs with DB
// db.sync();clear