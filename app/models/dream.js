const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const { CategorySchema } = require('../models/category')
const { AnalysisSchema } = require('../models/analysis')

const DreamSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    startDate: {
      type: Date,
      required: true
    },

    endDate: {
      type: Date,
      required: true
    },

    category: {
      type: CategorySchema,
      required: true
    },

    analysis: {
      type: AnalysisSchema,
      required: true
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
