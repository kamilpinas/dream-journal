const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const { createItemInDb } = require('./helpers/createItemInDb')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createSharedDream = async (req, res) => {
  try {
    req = matchedData(req)
    const item = await createItemInDb(req)
    res.status(201).json(item)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createSharedDream }
