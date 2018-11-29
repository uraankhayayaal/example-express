'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    hash: DataTypes.STRING
  }, {});
  History.associate = function(models) {
    // associations can be defined here
    History.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    History.belongsTo(models.Game, {
      foreignKey: 'gameId',
      onDelete: 'CASCADE'
    });
    History.belongsTo(models.City, {
      foreignKey: 'cityId',
      onDelete: 'CASCADE'
    });
  };
  return History;
};