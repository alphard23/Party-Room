module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable("Songs", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        song_name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        devoured: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
      .then(function() {
        Songs.bulkCreate([
          {
            name: "Climbing Up the Ladder",
            devoured: 0
          },
          {
            name: "Smooth ft. Rob Thomas",
            devoured: 0
          }
          {
            name: "Rhythm & Romance",
            devoured: 0
          }
           {
            name: "Electric Glide",
            devoured: 0
          }

        ]);
      });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("Songs");
  }
};
