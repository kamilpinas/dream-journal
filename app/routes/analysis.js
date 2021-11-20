const express = require('express')
const router = express.Router()
require('../../config/passport')

const trimRequest = require('trim-request')

const { getAnalysis, createAnalysis } = require('../controllers/analysis')

const {
  validateCreateAnalysis
} = require('../controllers/analysis/validators/validateCreateAnalysis')
/*
 * Get items route
 */
router.get('/:id', trimRequest.all, getAnalysis)

router.post('/', trimRequest.all, validateCreateAnalysis, createAnalysis)

module.exports = router
