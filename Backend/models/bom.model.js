const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BOMSchema = new Schema({
  id: ObjectId,
  runId: String,
  pieceId: Number,
  description: String,
  amount: Number,
  price: Number,
  scrap: Number
})

BOMSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

BOMSchema.statics.createBOM = function(data) {
  return this.create(data)
}

module.exports = mongoose.model('BOM', BOMSchema, 'BOM');
