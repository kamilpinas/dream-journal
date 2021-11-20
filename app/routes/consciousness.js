const express = require('express')
const router = express.Router()
require('../../config/passport')
const trimRequest = require('trim-request')

const {
  getConsciousness,
  createConsciousness
} = require('../controllers/consciousnesses')

/*
 * Get items route
 */
router.get('/:id', trimRequest.all, getConsciousness)

router.post('/', trimRequest.all, createConsciousness)

module.exports = router
