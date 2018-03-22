// module.exports = function(sequelize, DataTypes){
    
//     var partyRoom = sequelize.define("partyRoom", {
//         partyName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//     });

//     return partyRoom;
// };


// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes) {
    // Creates a "Party room" model that matches up with DB
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
            allowNull: true,
            get: function() {
                return this.getDataValue('songCollection').split(',')
            },
            set: function(val) {
                this.setDataValue('songCollection', val.join(','));
            }
        },


        roomUsers: {
            type: DataTypes.STRING,
            allowNull: true,
            get: function() {
                return this.getDataValue('roomUsers').split(',')
            },
            set: function(val) {
                
                var convertedArray = [];
                var arguments = val;

                for(var i = 0; i < arguments.length; ++i)
                {
                convertedArray.push(arguments[i]);
                }

                this.setDataValue('roomUsers', convertedArray.join(','));
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
    }, {
        timestamps: true
    });
    return Room;
};

