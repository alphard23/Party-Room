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
            allowNull: true,
            defaultValue: 0
        },
    }, {
        timestamps: true,
    });
    return Song;
}