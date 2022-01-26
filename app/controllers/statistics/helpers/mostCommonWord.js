const { itemNotFound } = require('../../../middleware/utils')

/**
 * Updates an item in database by id
 * @param {string} id - item id
 * @param {Object} req - request object
 */
const getMostCommonWords = (model = {}, userId = '') => {
  return new Promise((resolve, reject) => {
    model.aggregate(
      [
        { $match: { userId } },
        {
          $project: {
            results: { $split: [{ $toLower: '$description' }, ' '] }
          }
        },
        {
          $unwind: '$results'
        },
        {
          $group: {
            _id: '$results',

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

module.exports = { getMostCommonWords }
