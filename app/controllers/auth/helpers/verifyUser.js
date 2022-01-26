const { itemNotFound } = require('../../../middleware/utils')

/**
 * Verifies an user
 * @param {Object} user - user object
 */
const verifyUser = (model = {}, id = '') => {
  return new Promise((resolve, reject) => {
    model.updateOne(
      { verification: id },
      { $set: { verified: true } },
      async (err, item) => {
        try {
          await itemNotFound(err, item, 'NOT_FOUND')
          resolve('Pomyślnie aktywowano konto')
        } catch (error) {
          reject(error)
        }
      }
    )
  })
}

module.exports = { verifyUser }
