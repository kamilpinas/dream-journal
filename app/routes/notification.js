const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')
const {
  createNotification,
  getNotification
} = require('../controllers/notifications')

const {
  validateCreateNotification,

  validateGetNotification
} = require('../controllers/notifications/validators')

router.get(
  '/:userId',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateGetNotification,
  getNotification
)

router.patch(
  '/:userId',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateCreateNotification,
  createNotification
)

module.exports = router
