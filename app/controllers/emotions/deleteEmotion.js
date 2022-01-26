const { Emotion } = require('../../models/emotion')
const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const { deleteItems } = require('../../middleware/db')

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const deleteEmotion = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(200).json(await deleteItems(req.names, Emotion))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { deleteEmotion }
