const { buildErrObject } = require('../../../middleware/utils')

/**
 * Creates a new item in database
 * @param {Object} req - request object
 */

const options = { upsert: true, new: true, setDefaultsOnInsert: true }

const createOrUpdateNotification = (req = {}, userId = '', model = {}) => {
  return new Promise((resolve, reject) => {
    model.findOneAndUpdate(userId, req, options, (err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      resolve(item)
    })
  })
}

module.exports = { createOrUpdateNotification }
