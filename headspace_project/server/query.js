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
      firstName: 'Eight'
    }
  })
  stringify(user)
}

const deleteChar = async () => {
  let user = await Character.destroy({
    where: {
      name: 'Harmony'
    }
  })
  stringify(user)
}

async function main() {
  try {
    await deleteUser()
    // await deleteChar()
    await getUsers()
    await getCharacters()
    // await getAchievements()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
