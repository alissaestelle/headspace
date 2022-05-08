'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'characters',
      [
        {
          userID: 1,
          name: 'JB',
          avatar: null,
          level: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userID: 2,
          name: 'DJ',
          avatar: null,
          level: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('characters', null, {})
  }
}
