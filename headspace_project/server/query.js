const { User, Character, Achievement, sequelize } = require('./models')
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

const getUsers = async () => {
  let users = await User.findAll()
  stringify(users)
}

const getUser = async () => {
  let user = await User.findOne({
    where: {
      id: 84
    }
  })
  stringify(user)
}

const getCharacters = async () => {
  let characters = await Character.findAll()
  stringify(characters)
}

const getAchievements = async () => {
  let achievements = await Achievement.findAll()
  stringify(achievements)
}

const deleteUser = async () => {
  let user = await User.destroy({
    where: {
      firstName: 'Alissa'
    }
  })
  stringify(user)
}

const deleteChar = async () => {
  let user = await Character.destroy({
    where: {
      name: 'Alissa'
    }
  })
  stringify(user)
}

const deleteAchieve = async () => {
  let achieve = await Achievement.destroy({
    where: {
      characterID: 109
    }
  })
  stringify(achieve)
}

async function main() {
  try {
    // await getUser()
    await deleteUser()
    await deleteChar()
    await getUsers()
    // await getCharacters()
    // await deleteAchieve()
    await getAchievements()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
