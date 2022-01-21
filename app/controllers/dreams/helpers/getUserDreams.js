const { itemNotFound } = require('../../../middleware/utils')

/**
 * Gets item from database by id
 * @param {string} id - item id
 */
const getUserDreams = (userId = '', model = {}) => {
  return new Promise((resolve, reject) => {
    model.find({ userId: { $in: [userId] } }, async (err, item) => {
      try {
        await itemNotFound(err, item, 'NOT_FOUND')
        resolve(item)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { getUserDreams }
