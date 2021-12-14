const { SharedDream } = require('../../../models/sharedDream')
const { buildErrObject } = require('../../../middleware/utils')
/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const createItemInDb = ({
  sharedOn = new Date(),
  votes = 0,
  user = {},
  dreams = []
}) => {
  return new Promise((resolve, reject) => {
    const sharedDream = new SharedDream({
      sharedOn,
      votes,
      user,
      dreams
    })
    sharedDream.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      item = JSON.parse(JSON.stringify(item))

      resolve(item)
    })
  })
}

module.exports = { createItemInDb }
