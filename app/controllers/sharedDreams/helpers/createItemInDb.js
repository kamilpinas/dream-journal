const { SharedDream } = require('../../../models/sharedDream')
const { Dream } = require('../../../models/dream')
const { User } = require('../../../models/user')
const { buildErrObject } = require('../../../middleware/utils')
/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const createItemInDb = ({
  sharedOn = new Date(),
  votes = 0,
  user = new User(),
  dream = new Dream()
}) => {
  return new Promise((resolve, reject) => {
    const sharedDream = new SharedDream({
      sharedOn,
      votes,
      user,
      dream
    })
    sharedDream.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      item = JSON.parse(item)

      resolve(item)
    })
  })
}

module.exports = { createItemInDb }
