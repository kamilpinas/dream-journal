const { matchedData } = require('express-validator')
const { Dream } = require('../../models/dream')
const { isIDGood, handleError } = require('../../middleware/utils')
const { getUserDreams } = require('./helpers/getUserDreams')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getDreams = async (req, res) => {
  try {
    req = matchedData(req)
    const userId = await isIDGood(req.userId)
    res.status(200).json(await getUserDreams(userId, Dream))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getDreams }
