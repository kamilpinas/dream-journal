const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')

const {
    getCategories,
    createCategory,
    deleteCategory
} = require('../controllers/categories')

const {
    validateCreateCategory,
    validateDeleteCategory
} = require('../controllers/categories/validators')

/*
 * Get items route
 */
router.get(
    '/',
    requireAuth,
    roleAuthorization(['user', 'admin']),
    trimRequest.all,
    getCategories
)

router.post(
    '/',
    requireAuth,
    roleAuthorization(['admin', 'user']),
    trimRequest.all,
    validateCreateCategory,
    createCategory
)

router.delete(
    '/:id',
    requireAuth,
    roleAuthorization(['admin', 'user']),
    trimRequest.all,
    validateDeleteCategory,
    deleteCategory
)

module.exports = router