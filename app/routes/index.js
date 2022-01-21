const express = require('express')
const router = express.Router()

// Load Auth route
router.use('/auth', require('./auth'))
router.use('/analysis', require('./analysis'))
router.use('/categories', require('./categories'))
router.use('/consciousness', require('./consciousness'))
router.use('/dream', require('./dream'))
router.use('/emotions', require('./emotions'))
router.use('/profile', require('./profile'))
router.use('/users', require('./users'))
router.use('/shared-dreams', require('./sharedDreams'))
router.use('/notifications', require('./notification'))

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
