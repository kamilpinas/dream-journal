const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates create new item request
 */
const validateCreateConsciousness = [
  check('isConsciousness').exists().withMessage('MISSING'),
  check('isControled').exists().withMessage('MISSING'),
  check('lucidityLevel').exists().withMessage('MISSING'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreateConsciousness }
