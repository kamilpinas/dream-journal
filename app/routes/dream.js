const express = require('express')
const router = express.Router()
require('../../config/passport')
const trimRequest = require('trim-request')

const {
  getDream,
  createDream,
  updateDream,
  deleteDream,
  getDreams
} = require('../controllers/dreams')

const {
  validateCreateDream,
  validateUpdateDream,
  validateDeleteDream
} = require('../controllers/dreams/validators')

router.get('/:id', trimRequest.all, getDream)

router.get('/', trimRequest.all, getDreams)

router.post('/', trimRequest.all, validateCreateDream, createDream)

router.patch('/:id', trimRequest.all, validateUpdateDream, updateDream)

router.delete('/:id', trimRequest.all, validateDeleteDream, deleteDream)

module.exports = router
