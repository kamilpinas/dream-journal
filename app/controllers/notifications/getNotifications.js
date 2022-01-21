const { matchedData } = require('express-validator')
const { Notification } = require('../../models/notification')
const { getUserNotifications } = require('./helpers/getUserNotification')
const { isIDGood, handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getNotification = async (req, res) => {
  try {
    req = matchedData(req)
    const userId = await isIDGood(req.userId)
    res.status(200).json(await getUserNotifications(userId, Notification))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getNotification }
