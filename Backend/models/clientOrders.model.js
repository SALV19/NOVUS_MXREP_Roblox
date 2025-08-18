const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const COYearSchema = new Schema({
  id: ObjectId,
  runId: String,
  year: Number,
  orders: Number,
})

const COMonthSchema = new Schema({
  id: ObjectId,
  runId: String,
  year: Number,
  month: Number,
  percentage: Number
})

COYearSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

COYearSchema.statics.createCOYear = function(data) {
  return this.create(data)
}

COMonthSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

COMonthSchema.statics.createCOMonth = function(data) {
  return this.create(data)
}

coYearModel = mongoose.model('COYear', COYearSchema, 'COYear')
coMonthModel = mongoose.model('COMonth', COMonthSchema, 'COMonth')

module.exports = {
  coYearModel,
  coMonthModel
};