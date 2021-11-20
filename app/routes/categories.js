const express = require('express')
const router = express.Router()
require('../../config/passport')

const trimRequest = require('trim-request')

const { getCategories, createCategory } = require('../controllers/categories')

const {
  validateCreateCategory
} = require('../controllers/categories/validators')

/*
 * Get items route
 */
router.get('/', trimRequest.all, getCategories)

router.post('/', trimRequest.all, validateCreateCategory, createCategory)

module.exports = router
