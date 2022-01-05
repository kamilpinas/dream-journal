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
  getConsciousness,
  createConsciousness
} = require('../controllers/consciousnesses')

/*
 * Get items route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getConsciousness
)

router.post(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  createConsciousness
)

module.exports = router
