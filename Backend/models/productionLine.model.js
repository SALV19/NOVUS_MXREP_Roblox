const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductionLinesSchema = new Schema({
  id: ObjectId,
  vehicle: String
})

ProductionLinesSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

ProductionLinesSchema.statics.createProductionLines = function(data) {
  return this.create(data)
}

module.exports = module.exports = mongoose.model('ProductionLines', ProductionLinesSchema, 'ProductionLines');