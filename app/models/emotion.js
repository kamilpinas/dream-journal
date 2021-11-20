const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const EmotionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
EmotionSchema.plugin(mongoosePaginate)
exports.EmotionSchema = EmotionSchema
exports.Emotion = mongoose.model('Emotion', EmotionSchema)
