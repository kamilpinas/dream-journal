const { Category } = require('../../../models/category')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a category already exists in database
 * @param {string} name - name of item
 */
const categoryExists = (name = '') => {
  return new Promise((resolve, reject) => {
    Category.findOne(
      {
        name
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'CATEGORY_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { categoryExists }
