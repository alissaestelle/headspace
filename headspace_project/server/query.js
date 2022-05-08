const { Achievement, User, sequelize } = require('./models')
const user = require('./models/user')
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

const deleteUser = async () => {
  let user = await User.destroy({
    where: {
      password: null
    }
  })
  stringify(user)
}

async function main() {
  try {
    await deleteUser()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
