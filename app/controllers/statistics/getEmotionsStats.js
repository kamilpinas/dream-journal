const { matchedData } = require('express-validator')
const { Dream } = require('../../models/dream')
const { emotionsStats } = require('./helpers/emotionsStats')
const { handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request objects
 * @param {Object} res - response object
 */

const getEmotionsStats = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(200).json(await emotionsStats(Dream, req.userId))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getEmotionsStats }
