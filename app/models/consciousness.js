const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ConsciousnessSchema = new mongoose.Schema(
  {
    isConsciousness: {
      type: Boolean
    },
    isControled: {
      type: Boolean
    },
    lucidityLevel: {
      type: Number
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
ConsciousnessSchema.plugin(mongoosePaginate)
exports.Consciousness = mongoose.model('Consciousness', ConsciousnessSchema)
exports.ConsciousnessSchema = ConsciousnessSchema
