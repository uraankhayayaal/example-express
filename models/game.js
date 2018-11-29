'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    long: DataTypes.INTEGER
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    Game.hasMany(models.History,{
      foreignKey: 'gameId',
      as: 'histories'
    })
  };
  return Game;
};