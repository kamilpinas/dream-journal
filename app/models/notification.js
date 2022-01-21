const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const NotificationSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    realityTest: {
      type: Boolean
    },
    realityTestInterval: {
      type: Number
    },
    dailyReminder: {
      type: Boolean
    },
    dailyReminderInterval: {
      type: Date
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
NotificationSchema.plugin(mongoosePaginate)
exports.Notification = mongoose.model('Notification', NotificationSchema)
exports.NotificationSchema = NotificationSchema
