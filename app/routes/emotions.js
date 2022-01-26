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
  getEmotions,
  createEmotion,
  deleteEmotion
} = require('../controllers/emotions')

const {
  validateCreateEmotion,
  validateDeleteEmotion
} = require('../controllers/emotions/validators')

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getEmotions
)

router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateEmotion,
  createEmotion
)

router.delete(
  '/:names',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteEmotion,
  deleteEmotion
)

module.exports = router
