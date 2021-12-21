const { DreamSchema } = require('../models/dream')
const { UserSchema } = require('../models/user')

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
    user: {
      type: UserSchema
    },
    dream: {
      type: DreamSchema
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
