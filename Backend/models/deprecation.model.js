const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DeprecationSchema = new Schema({
  id: ObjectId,
  runId: String,
  year: Number,
  type: String,
  percentage: Number,
})

DeprecationSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

DeprecationSchema.statics.createDeprecation = function(data) {
  return this.create(data)
}

module.exports = module.exports = mongoose.model('Deprecation', DeprecationSchema, 'Deprecation');