const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates create new item request
 */
const validateCreateAnalysis = [
  check('sleepLevel')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  check('rating')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  check('isNightmare')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  check('isMoodAffecting')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  check('consciousness').exists().withMessage('MISSING'),
  check('emotions').exists().withMessage('MISSING'),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreateAnalysis }
