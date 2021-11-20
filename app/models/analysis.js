const { ConsciousnessSchema } = require('../models/consciousness')
const { EmotionSchema } = require('../models/emotion')

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const AnalysisSchema = new mongoose.Schema(
  {
    sleepLevel: {
      type: Number
    },
    rating: {
      type: Number
    },
    isNightmare: {
      type: Boolean
    },
    isMoodAffecting: {
      type: Boolean
    },
    consciousness: {
      type: ConsciousnessSchema
    },
    emotions: {
      type: [EmotionSchema]
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
AnalysisSchema.plugin(mongoosePaginate)
exports.Analysis = mongoose.model('Analysis', AnalysisSchema)
exports.AnalysisSchema = AnalysisSchema
