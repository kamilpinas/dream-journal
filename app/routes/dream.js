const express = require('express')
const router = express.Router()
require('../../config/passport')
const trimRequest = require('trim-request')

const { getDream, createDream } = require('../controllers/dreams')

const {
  validateCreateDream
} = require('../controllers/dreams/validators/validateCreateDream')
/*
 * Get items route
 */
router.get('/:id', trimRequest.all, getDream)

router.post('/', trimRequest.all, validateCreateDream, createDream)

module.exports = router
