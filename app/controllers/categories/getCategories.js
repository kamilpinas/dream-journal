const { Category } = require('../../models/category')
const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getCategories = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, Category, query))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getCategories }
