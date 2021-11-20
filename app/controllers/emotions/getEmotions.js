const { Emotion } = require('../../models/emotion')
const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getEmotions = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, Emotion, query))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getEmotions }
