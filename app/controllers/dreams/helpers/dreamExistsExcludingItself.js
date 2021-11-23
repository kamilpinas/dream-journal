const { Dream } = require('../../../models/dream')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a city already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */
const dreamExistsExcludingItself = (id = '', title = '') => {
  return new Promise((resolve, reject) => {
    Dream.findOne(
      {
        title,
        _id: {
          $ne: id
        }
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'DREAM_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}

module.exports = { dreamExistsExcludingItself }
