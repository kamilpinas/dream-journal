const express = require('express')
const router = express.Router()
require('../../config/passport')
const trimRequest = require('trim-request')

const {
  getSharedDream,
  createSharedDream,
  deleteSharedDream,
  getSharedDreams,
  incrementVotes
} = require('../controllers/sharedDreams')

const {
  validateCreateSharedDream,
  validateDeleteSharedDream
} = require('../controllers/sharedDreams/validators')

router.get('/:id', trimRequest.all, getSharedDream)

router.get('/', trimRequest.all, getSharedDreams)

router.patch('/:id', trimRequest.all, incrementVotes)

router.post('/', trimRequest.all, validateCreateSharedDream, createSharedDream)

router.delete(
  '/:id',
  trimRequest.all,
  validateDeleteSharedDream,
  deleteSharedDream
)

module.exports = router
