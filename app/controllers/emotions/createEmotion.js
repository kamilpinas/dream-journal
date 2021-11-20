const { Emotion } = require('../../models/emotion')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { emotionExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createEmotion = async (req, res) => {
  try {
    req = matchedData(req)
    const doesEmotionExists = await emotionExists(req.name)
    if (!doesEmotionExists) {
      res.status(201).json(await createItem(req, Emotion))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createEmotion }
