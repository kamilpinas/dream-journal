const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')
/**
 * Validates create new item request
 */
const validateCreateDream = [
  check('title')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  check('description')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  check('startDate')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  check('endDate')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  check('category').exists().withMessage('MISSING'),
  check('analysis').exists().withMessage('MISSING'),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreateDream }
