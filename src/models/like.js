'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey : 'userId',
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE',
      });
      this.belongsTo(models.Tweet,{
        foreignKey : 'tweetId',
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE',
      });
    }
  }
  Like.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    tweetId: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};