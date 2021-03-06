'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('characters', 'userID', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    })
    await queryInterface.changeColumn('achievements', 'characterID', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'characters',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('characters', 'userID', {
      userID: Sequelize.INTEGER
    })
    await queryInterface.changeColumn('achievements', 'characterID', {
      characterID: Sequelize.INTEGER
    })
  }
}
