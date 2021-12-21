const { itemNotFound } = require('../../../middleware/utils/itemNotFound')
const { SharedDream } = require('../../../models/sharedDream')
/**
 * Updates an item in database by id
 * @param {string} id - item id
 * @param {Object} req - request object
 */
const incrementVote = (id = '') => {
  return new Promise((resolve, reject) => {
    SharedDream.findByIdAndUpdate(
      id,
      { $inc: { votes: 1 } },
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

module.exports = { incrementVote }
