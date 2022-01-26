const { itemNotFound } = require('../../../middleware/utils')

/**
 * Updates an item in database by id
 * @param {string} id - item id
 * @param {Object} req - request object
 */
const categoriesStats = (model = {}, userId = '') => {
  return new Promise((resolve, reject) => {
    model.aggregate(
      [
        { $match: { userId } },
        {
          $group: {
            _id: '$category.name',
            count: { $sum: 1 }
          }
        },
        { $sort: { count: -1 } }
      ],
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

module.exports = { categoriesStats }
