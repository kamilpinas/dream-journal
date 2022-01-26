const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')

const { getCommonWords } = require('../controllers/statistics/getCommonWords')
const {
  getCategoriesStats
} = require('../controllers/statistics/getCategoriesStats')
const {
  getEmotionsStats
} = require('../controllers/statistics/getEmotionsStats')

const {
  validateGetCommonWords
} = require('../controllers/statistics/validators/validateGetCommonWords')
/*
 * Get analysis by id route
 */
router.get(
  '/:userId',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateGetCommonWords,
  getCommonWords
)

router.get(
  '/categories/:userId',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateGetCommonWords,
  getCategoriesStats
)

router.get(
  '/emotions/:userId',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateGetCommonWords,
  getEmotionsStats
)

module.exports = router
