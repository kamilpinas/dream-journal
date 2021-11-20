const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
CategorySchema.plugin(mongoosePaginate)
exports.Category = mongoose.model('Category', CategorySchema)
exports.CategorySchema = CategorySchema
