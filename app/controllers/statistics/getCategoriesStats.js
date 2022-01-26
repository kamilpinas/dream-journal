const { matchedData } = require('express-validator')
const { Dream } = require('../../models/dream')
const { categoriesStats } = require('./helpers/categoriesStats')
const { handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request objects
 * @param {Object} res - response object
 */

const getCategoriesStats = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(200).json(await categoriesStats(Dream, req.userId))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getCategoriesStats }
