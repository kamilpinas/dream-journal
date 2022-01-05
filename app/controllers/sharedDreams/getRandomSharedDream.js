const { matchedData } = require('express-validator')
const { SharedDream } = require('../../models/sharedDream')
const { getRandomItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getRandomSharedDream = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(200).json(await getRandomItem(SharedDream))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getRandomSharedDream }
