const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')
/**
 * Validates create new item request
 */
const validateCreateSharedDream = [
  check('sharedOn').exists().withMessage('MISSING'),
  check('votes').exists().withMessage('MISSING'),
  check('username').exists().withMessage('MISSING'),
  check('title').exists().withMessage('MISSING'),
  check('description').exists().withMessage('MISSING'),
  check('category').exists().withMessage('MISSING'),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreateSharedDream }
