const { CategorySchema } = require('../models/category')

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const SharedDreamSchema = new mongoose.Schema(
  {
    sharedOn: {
      type: Date
    },
    votes: {
      type: Number
    },
    username: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    category: {
      type: CategorySchema
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
SharedDreamSchema.plugin(mongoosePaginate)
exports.SharedDream = mongoose.model('SharedDream', SharedDreamSchema)
exports.SharedDreamSchema = SharedDreamSchema
