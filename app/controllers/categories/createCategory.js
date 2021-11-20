const { Category } = require('../../models/category')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { categoryExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createCategory = async (req, res) => {
  try {
    req = matchedData(req)
    const doesCategoryExists = await categoryExists(req.name)
    if (!doesCategoryExists) {
      res.status(201).json(await createItem(req, Category))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createCategory }
