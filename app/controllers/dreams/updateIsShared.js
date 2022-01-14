const { Dream } = require('../../models/dream')
const { updateIsSharedFlag } = require('./helpers/updateIsSharedFlag')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateIsShared = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await updateIsSharedFlag(id, Dream))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateIsShared }
