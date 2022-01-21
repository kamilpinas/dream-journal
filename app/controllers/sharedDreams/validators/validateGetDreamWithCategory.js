const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates delete item request
 */
const validateGetDreamWithCategory = [
  check('name').exists().withMessage('MISSING'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateGetDreamWithCategory }
