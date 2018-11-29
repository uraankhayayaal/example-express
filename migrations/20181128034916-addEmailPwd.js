'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'email',
      {
        allowNull: false,
        type: Sequelize.STRING
      }
    ).then(()=>{
      return queryInterface.addColumn(
        'Users',
        'password',
        {
          allowNull: false,
          type: Sequelize.STRING,
        }
      );
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'email'
    ).then(() => {
      return queryInterface.removeColumn(
        'Users',
        'password'
      );
    });
  }
};
