const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      firstName,
      lastName,
      username,
      passwordDigest
    })
    res.send(user)
  } catch (e) {
    throw e
  }
}

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username
      },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(req.body.password, user.passwordDigest))
    ) {
      let payload = {
        id: user.id,
        username: user.username
      }
      let token = middleware.createToken(payload)
      return res.send({
        user: payload,
        token
      })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (e) {
    throw e
  }
}

module.exports = {
  Register,
  Login
}
