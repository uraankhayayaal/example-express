'use strict';
module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    photo: DataTypes.STRING,
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN,
    status: DataTypes.INTEGER
  }, {});
  Section.associate = function(models) {
    // associations can be defined here
    Section.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Section;
};