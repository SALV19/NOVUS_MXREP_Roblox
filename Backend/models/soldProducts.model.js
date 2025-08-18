const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SoldProductsSchema = new Schema({
  id: ObjectId,
  runId: String,
  orderId: Number,
  price: Number,
  amount: Number,
  team: String,
  player: {
    userId: String,
    name: String
  },
  budgetBefore: Number,
  budgetAfter: Number,
});

SoldProductsSchema.statics.findById = function(id) {
  return this.find({id}).lean
}

SoldProductsSchema.statics.createSoldProducts = function(data) {
  return this.create(data)
}

module.exports = module.exports = mongoose.model('SoldProducts', SoldProductsSchema, 'SoldProducts');