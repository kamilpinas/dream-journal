const { itemNotFound } = require('../../middleware/utils')

/**
 * Updates an item in database by id
 * @param {string} id - item id
 * @param {Object} req - request object
 */
const getRandomItem = (model = {}) => {
  return new Promise((resolve, reject) => {
    model.aggregate([{ $sample: { size: 1 } }], async (err, item) => {
      try {
        await itemNotFound(err, item, 'NOT_FOUND')
        resolve(item)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { getRandomItem }
