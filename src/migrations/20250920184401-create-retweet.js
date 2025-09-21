'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Retweets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
          model:"Users",
          key:"id",
        }
      },
      tweetId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
          model:"Tweets",
          key:"id",
        }
      },
      content: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
         len:[10,300]
      }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Retweets');
  }
};