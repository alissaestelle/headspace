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
          points: 2,
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
          title: 'Hang Fresh Eucalyptus From Your Shower Head',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: "Mindfully Choose Today's Outfit",
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title:
            'Reflect on the Last Experience You Emotionally Connected With',
          type: 'Beginner',
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Recall Something That Made You Laugh Recently',
          type: 'Beginner',
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Apply a Hot Wash Cloth to the Back of Your Neck Before Bed',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Wake Up Early on Saturday and Create Your Ideal Morning',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Enjoy Some Sunlight',
          type: 'Beginner',
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: "Tell Yourself It's Okay to Feel _____",
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Cherish a Recent Accomplishment',
          type: 'Beginner',
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Hydrate With Mineral Water',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Empathize With Your Current Situation',
          type: 'Beginner',
          points: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Only Focus on One Task at a Time',
          type: 'Beginner',
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Explore a New Podcast, Album, Recipe, etc.',
          type: 'Beginner',
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          characterID: null,
          title: 'Think About Someone Who Inspires You and Why',
          type: 'Beginner',
          points: 2,
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
