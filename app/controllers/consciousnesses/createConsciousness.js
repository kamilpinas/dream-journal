const { Consciousness } = require('../../models/consciousness')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createConsciousness = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(201).json(await createItem(req, Consciousness))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createConsciousness }
