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
      'achievements',
      [
        {
          characterID: 3,
          title: 'Sleep an Extra Hour',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: 3,
          title: 'Treat Yourself to Coffee or Tea',
          type: 'Beginner',
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: 3,
          title: 'Think of Something Good That Happened Today',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: 4,
          title: 'Give Yourself a Meaningful Compliment',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: 4,
          title: 'Research an Interest for 20 Minutes',
          type: 'Beginner',
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: 4,
          title: 'Ask Yourself: "What If It All Works Out?"',
          type: 'Beginner',
          points: 3,
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
    await queryInterface.bulkDelete('achievements', null, {})
  }
}
