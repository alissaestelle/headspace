const router = require('express').Router()
const controller = require('../controllers/AccountControl')
const middleware = require('../middleware')

router.post(
  '/character',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCharacter
)

router.put(
  '/password/:pk',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)

router.delete('/deactivate/:pk', controller.DeleteUser)

module.exports = router
