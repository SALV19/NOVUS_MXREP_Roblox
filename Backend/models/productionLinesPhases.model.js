const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductionLinePhasesSchema = new Schema({
  id: ObjectId,
  runId: String,
  productionLineID: Number,
  fase: String,
  processingTime: Number,
  operatorsNeeded: Number,
})


ProductionLinePhasesSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

ProductionLinePhasesSchema.statics.createProductionLinePhase = function(data) {
  return this.create(data)
}

module.exports = module.exports = mongoose.model('ProductionLinePhase', ProductionLinePhasesSchema, 'ProductionLinePhase');