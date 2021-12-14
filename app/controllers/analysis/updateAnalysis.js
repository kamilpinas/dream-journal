const { Analysis } = require('../../models/analysis')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const {
  analysisExistsExcludingItself
} = require('./helpers/analysisExistsExcludingItself')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateAnalysis = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesDreamExists = await analysisExistsExcludingItself(id, req.name)
    if (!doesDreamExists) {
      res.status(200).json(await updateItem(id, Analysis, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateAnalysis }
