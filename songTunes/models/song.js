module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define("Song", {
    song_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Song.associate = function(models) {
    // associations can be defined here
    models.Song.hasOne(models.Customer);
  };

  return Song;
};
