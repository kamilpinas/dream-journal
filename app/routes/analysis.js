const express = require('express')
const router = express.Router()
require('../../config/passport')

const trimRequest = require('trim-request')

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
 * Get items route
 */
router.get('/:id', trimRequest.all, getAnalysis)

/*
 * Get analysis by id route
 */
router.get('/:id', trimRequest.all, getAnalysis)
/*
 * Add analysis route
 */
router.post('/', trimRequest.all, validateCreateAnalysis, createAnalysis)

router.patch('/:id', trimRequest.all, validateUpdateAnalysis, updateAnalysis)

module.exports = router
