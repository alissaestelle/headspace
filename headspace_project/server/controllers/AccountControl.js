const { User, Character } = require('../models')
const middleware = require('../middleware')

const CreateCharacter = async (req, res) => {
  try {
    await User.findOne({
      where: {
        id: req.body.userID
      }
    })
    let character = await Character.create({ ...req.body })
    res.send(character)
  } catch (e) {
    throw e
  }
}

const GetCharacter = async (req, res) => {
  try {
    let character = await Character.findOne({
      where: {
        userID: req.params.userID
      }
    })
    res.send(character)
  } catch (e) {
    throw e
  }
}

const UpdatePassword = async (req, res) => {
  try {
    let user = await User.findByPk(req.params.pk)
    if (
      user &&
      (await middleware.comparePassword(
        req.body.oldPassword,
        user.dataValues.passwordDigest
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Success', msg: 'Password Updated' })
    }
    res.status(401).send({ status: 'Error', msg: 'Invalid Credentials' })
  } catch (e) {
    throw e
  }
}

const DeleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.pk
      }
    })
    res.send({ msg: 'User Successfully Deleted', status: 'OK' })
  } catch (e) {
    throw e
  }
}

module.exports = {
  CreateCharacter,
  GetCharacter,
  UpdatePassword,
  DeleteUser
}
