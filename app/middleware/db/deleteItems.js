const { buildSuccObject, itemNotFound } = require('../../middleware/utils')

/**
 * Deletes an item from database by id
 * @param {string} id - id of item
 */
const deleteItems = (names = [], model = {}) => {
  return new Promise((resolve, reject) => {
    model.deleteMany({ name: { $in: names } }, async (err, item) => {
      try {
        await itemNotFound(err, item, 'NOT_FOUND')
        resolve(buildSuccObject('DELETED'))
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { deleteItems }
