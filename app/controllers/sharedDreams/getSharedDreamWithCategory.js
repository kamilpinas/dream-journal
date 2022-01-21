const { matchedData } = require('express-validator')
const { SharedDream } = require('../../models/sharedDream')
const { getDreamWithCategory } = require('./helpers/getDreamWithCategory')
const { handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const getSharedDreamWithCategory = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(200).json(await getDreamWithCategory(SharedDream, req.name))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getSharedDreamWithCategory }
