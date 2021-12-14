const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')
    /**
     * Validates create new item request
     */
const validateCreateSharedDream = [
    check('sharedOn')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
    check('votes').exists().withMessage('MISSING'),
    check('user').exists().withMessage('MISSING'),
    check('dreams').exists().withMessage('MISSING'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreateSharedDream }