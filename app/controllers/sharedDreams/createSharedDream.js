const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const { createItem } = require('../../middleware/db')
const { SharedDream } = require('../../models/sharedDream')
/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createSharedDream = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(201).json(await createItem(req, SharedDream))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createSharedDream }
