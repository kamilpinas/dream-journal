const express = require('express')
const router = express.Router()

// Load Auth route
router.use('/', require('./auth'))
router.use('/analysis', require('./analysis'))
router.use('/', require('./categories'))
router.use('/analysis', require('./consciousness'))
router.use('/analysis', require('./dream'))
router.use('/analysis', require('./emotions'))
router.use('/analysis', require('./profile'))
router.use('/analysis', require('./users'))
router.use('/analysis', require('./'))

/*
 * Setup routes for index
 */
router.get('/', (req, res) => {
  res.render('index')
})

/*
 * Handle 404 error
 */
router.use('*', (req, res) => {
  res.status(404).json({
    errors: {
      msg: 'URL_NOT_FOUND'
    }
  })
})

module.exports = router
