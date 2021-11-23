const { Dream } = require('../../models/dream')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const {
  dreamExistsExcludingItself
} = require('./helpers/dreamExistsExcludingItself')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateDream = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesDreamExists = await dreamExistsExcludingItself(id, req.name)
    if (!doesDreamExists) {
      res.status(200).json(await updateItem(id, Dream, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateDream }
