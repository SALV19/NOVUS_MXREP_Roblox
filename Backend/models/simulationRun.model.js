const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SimulationRunSchema = new Schema({
  id: ObjectId,
  simulationId: Number,
  date: Date
})

SimulationRunSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

SimulationRunSchema.statics.createSimulationRun = function(data) {
  return this.create(data)
}

module.exports = module.exports = mongoose.model('SimulationRun', SimulationRunSchema, 'SimulationRun');