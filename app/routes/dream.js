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
  getDream,
  createDream,
  updateDream,
  deleteDream,
  getDreams,
  updateIsShared
} = require('../controllers/dreams')

const {
  validateCreateDream,
  validateUpdateDream,
  validateDeleteDream,
  validateIsShared
} = require('../controllers/dreams/validators')

router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getDream
)

router.get(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getDreams
)

router.post(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateCreateDream,
  createDream
)

router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateUpdateDream,
  updateDream
)

router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateDeleteDream,
  deleteDream
)

router.patch(
  '/isShared/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateIsShared,
  updateIsShared
)

module.exports = router
