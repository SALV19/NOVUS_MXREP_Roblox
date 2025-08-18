const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductionSchema = new Schema({
  id: ObjectId,
  runId: String,
  year: Number,
  quality: Number,
  secondsXUnit: Number,
  hourShift: Number,
  shifts: Number,
  productionLines: Number,
  workingDays: Number,
  workingWeeks: Number,
  yearWorkingMonths: Number,
})

ProductionSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

ProductionSchema.statics.createProduction = function(data) {
  return this.create(data)
}

module.exports = module.exports = mongoose.model('Production', ProductionSchema, 'Productions');