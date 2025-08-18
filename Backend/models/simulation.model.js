const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SimulationsSchema = new Schema({
  id: ObjectId,
  professor: String,
  // Simulations data
})

SimulationsSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

SimulationsSchema.statics.createSimulations = function(data) {
  return this.create(data)
}

module.exports = module.exports = mongoose.model('Simulations', SimulationsSchema, 'Simulations');