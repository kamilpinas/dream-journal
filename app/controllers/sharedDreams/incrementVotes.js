const { SharedDream } = require('../../models/sharedDream')
const { incrementVote } = require('./helpers/incrementVote')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const incrementVotes = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await incrementVote(id, SharedDream))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { incrementVotes }
