const { Notification } = require('../../models/notification')
const { createOrUpdateNotification } = require('./helpers/createNotification')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createNotification = async (req, res) => {
  try {
    req = matchedData(req)
    const userId = await isIDGood(req.userId)
    res
      .status(201)
      .json(await createOrUpdateNotification(req, userId, Notification))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createNotification }
