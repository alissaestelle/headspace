const { Achievement, sequelize } = require('./models')
// const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findCharAchievements = async () => {
  let achievements = await Achievement.findAll({
    where: {
      characterID: 3
    }
  })
  stringify(achievements)
}

async function main() {
  try {
    await findCharAchievements()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
