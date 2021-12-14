const { Analysis } = require('../../../models/analysis')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a city already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */
const analysisExistsExcludingItself = (id = '') => {
    return new Promise((resolve, reject) => {
        Analysis.findOne({
                _id: {
                    $ne: id
                }
            },
            (err, item) => {
                if (err) {
                    return reject(buildErrObject(422, err.message))
                }

                if (item) {
                    return reject(buildErrObject(422, 'ANALYSIS_ALREADY_EXISTS'))
                }

                resolve(false)
            }
        )
    })
}

module.exports = { analysisExistsExcludingItself }