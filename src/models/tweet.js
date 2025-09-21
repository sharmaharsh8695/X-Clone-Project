'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey:"userId",
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE',
      });

      this.hasMany(models.Like,{
        foreignKey : 'tweetId',
      });
      this.hasMany(models.Retweet,{
        foreignKey : 'tweetId',
      });
      
    }
  }
  Tweet.init({
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    content: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[10,300]
      }
    },
    likesCount: {
      type:DataTypes.INTEGER,
      defaultValue : 0,

    },
    retweetCount: {
      type:DataTypes.INTEGER,
      defaultValue : 0,
    },  
  }, {
    sequelize,
    modelName: 'Tweet',
  });
  return Tweet;
};