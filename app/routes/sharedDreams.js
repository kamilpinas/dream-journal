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
  getSharedDream,
  createSharedDream,
  deleteSharedDream,
  getSharedDreams,
  getRandomSharedDream,
  incrementVotes,
  decrementVotes
} = require('../controllers/sharedDreams')

const {
  validateCreateSharedDream,
  validateDeleteSharedDream,
  validateUpdateVoteSharedDream
} = require('../controllers/sharedDreams/validators')

router.get(
  '/random/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getRandomSharedDream
)

router.get(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getSharedDreams
)

router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getSharedDream
)

router.post(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateCreateSharedDream,
  createSharedDream
)

router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateDeleteSharedDream,
  deleteSharedDream
)

router.patch(
  '/vote-up/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateUpdateVoteSharedDream,
  incrementVotes
)

router.patch(
  '/vote-down/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateUpdateVoteSharedDream,
  decrementVotes
)

module.exports = router
