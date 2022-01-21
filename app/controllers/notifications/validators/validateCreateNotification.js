const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates create new item request
 */
const validateCreateNotification = [
  check('userId').exists().withMessage('MISSING'),
  check('realityTest').exists().withMessage('MISSING'),
  check('realityTestInterval').exists().withMessage('MISSING'),
  check('dailyReminder').exists().withMessage('MISSING'),
  check('dailyReminderInterval').exists().withMessage('MISSING'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreateNotification }
