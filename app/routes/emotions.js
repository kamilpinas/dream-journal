const express = require('express')
const router = express.Router()
require('../../config/passport')
const trimRequest = require('trim-request')

const { getEmotions, createEmotion } = require('../controllers/emotions')

const { validateCreateEmotion } = require('../controllers/emotions/validators')

/*
 * Get items route
 */
router.get('/', trimRequest.all, getEmotions)

router.post('/', trimRequest.all, validateCreateEmotion, createEmotion)

module.exports = router
