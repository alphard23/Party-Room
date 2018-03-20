var customers = require("../models")["customer"];

module.exports = {
  up: function(queryInterface, Sequelize) {
    return (
      queryInterface
        // .createTable("customer", {
        //   id: {
        //     allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true,
        //     type: Sequelize.INTEGER
        //   },
        //   name: {
        //     allowNull: false,
        //     type: Sequelize.STRING
        //   },
        //   createdAt: {
        //     allowNull: false,
        //     type: Sequelize.DATE
        //   },
        //   updatedAt: {
        //     allowNull: false,
        //     type: Sequelize.DATE
        //   }
        // })
        .then(function() {
          customers.bulkCreate([
            {
              name: "Jennifer"
            },

            {
              name: "Joe"
            },

            {
              name: "George"
            },

            {
              name: "Kim"
            }
          ]);
        })
    );
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable("customers");
  }
};
