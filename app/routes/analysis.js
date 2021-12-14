const express = require('express')
const router = express.Router()
require('../../config/passport')

const trimRequest = require('trim-request')

const { getAnalysis, createAnalysis } = require('../controllers/analysis')

const {
  validateCreateAnalysis
} = require('../controllers/analysis/validators/validateCreateAnalysis')
/*
 * Analysis routes
 */

/*
 * Get analysis by id route
 */
router.get('/:id', trimRequest.all, getAnalysis)
/*
 * Add analysis route
 */
router.post('/', trimRequest.all, validateCreateAnalysis, createAnalysis)

module.exports = router
