'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('achievements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      characterID: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'characters',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      points: {
        type: Sequelize.INTEGER
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('achievements')
  }
}
