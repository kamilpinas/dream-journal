const { itemNotFound } = require('../../../middleware/utils/itemNotFound')
const { Dream } = require('../../../models/dream')
/**
 * Updates an item in database by id
 * @param {string} id - item id
 * @param {Object} req - request object
 */
const updateIsSharedFlag = (id = '') => {
  return new Promise((resolve, reject) => {
    Dream.findOneAndUpdate(
      { _id: id },
      { $set: { isShared: true } },
      async (err, item) => {
        try {
          await itemNotFound(err, item, 'NOT_FOUND')
          resolve(item)
        } catch (error) {
          reject(error)
        }
      }
    )
  })
}

module.exports = { updateIsSharedFlag }
