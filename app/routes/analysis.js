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
  getAnalysis,
  createAnalysis,
  updateAnalysis
} = require('../controllers/analysis')

const {
  validateCreateAnalysis,
  validateUpdateAnalysis
} = require('../controllers/analysis/validators')

/*
 * Get analysis by id route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getAnalysis
)
/*
 * Add analysis route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateCreateAnalysis,
  createAnalysis
)

router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateUpdateAnalysis,
  updateAnalysis
)

module.exports = router
