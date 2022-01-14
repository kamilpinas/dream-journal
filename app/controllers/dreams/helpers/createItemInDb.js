const { Dream } = require('../../../models/dream')
const { buildErrObject } = require('../../../middleware/utils')
/**
 * Creates a new item in database
 * @param {Object} req - request object
 */

const createItemInDb = ({
  userId = '',
  title = '',
  description = '',
  startDate = new Date(),
  endDate = new Date(),
  category = {},
  analysis = {}
}) => {
  return new Promise((resolve, reject) => {
    const dream = new Dream({
      userId,
      title,
      description,
      startDate,
      endDate,
      category,
      analysis
    })
    dream.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      item = JSON.parse(JSON.stringify(item))

      resolve(item)
    })
  })
}

module.exports = { createItemInDb }
