const { Emotion } = require('../../../models/emotion')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a emotion already exists in database
 * @param {string} name - name of item
 */
const emotionExists = (name = '') => {
  return new Promise((resolve, reject) => {
    Emotion.findOne(
      {
        name
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'EMOTION_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { emotionExists }
