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
          characterID: null,
          title: 'Sleep an Extra Hour',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Treat Yourself to Coffee or Tea',
          type: 'Beginner',
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Think of Something Good That Happened Today',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Give Yourself a Meaningful Compliment',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Research Something That Inspires You for 20 Minutes',
          type: 'Beginner',
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Ask Yourself: "What If It All Works Out?"',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title:
            'Elevate Shower Time with Fresh Eucaplyptus, Music, Shower Steamers, etc.',
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
  }
}
