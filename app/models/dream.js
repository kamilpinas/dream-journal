const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const { CategorySchema } = require('../models/category')
const { AnalysisSchema } = require('../models/analysis')

const DreamSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },

    description: {
      type: String
    },

    startDate: {
      type: Date
    },

    endDate: {
      type: Date
    },

    category: {
      type: CategorySchema
    },

    analysis: {
      type: AnalysisSchema
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
DreamSchema.plugin(mongoosePaginate)
exports.Dream = mongoose.model('Dream', DreamSchema)
exports.DreamSchema = DreamSchema
