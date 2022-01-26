const { matchedData } = require('express-validator')
const { verifyUser } = require('./helpers')
const { User } = require('../../models/user')
const { handleError } = require('../../middleware/utils')

/**
 * Verify function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const verify = async (req, res) => {
  try {
    req = matchedData(req)

    res.status(200).json(await verifyUser(User, req.id))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { verify }
