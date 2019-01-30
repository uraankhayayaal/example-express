'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    photo: DataTypes.STRING,
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN,
    status: DataTypes.INTEGER
  }, {});
  Portfolio.associate = function(models) {
    // associations can be defined here
    Portfolio.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Portfolio;
};