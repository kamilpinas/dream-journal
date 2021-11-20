const { Analysis } = require('../../../models/analysis')
const { buildErrObject } = require('../../../middleware/utils')
/**
 * Creates a new item in database
 * @param {Object} req - request object
 */

const createItemInDb = ({
  sleepLevel = 0,
  rating = 0,
  isNightmare = false,
  isMoodAffecting = false,
  consciousness = {},
  emotions = []
}) => {
  return new Promise((resolve, reject) => {
    const analysis = new Analysis({
      sleepLevel,
      rating,
      isNightmare,
      isMoodAffecting,
      consciousness,
      emotions
    })
    analysis.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      item = JSON.parse(JSON.stringify(item))

      resolve(item)
    })
  })
}

module.exports = { createItemInDb }
