const { matchedData } = require('express-validator')
const { Dream } = require('../../models/dream')
const { getMostCommonWords } = require('./helpers/mostCommonWord')
const { handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const getCommonWords = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(200).json(await getMostCommonWords(Dream, req.userId))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getCommonWords }
