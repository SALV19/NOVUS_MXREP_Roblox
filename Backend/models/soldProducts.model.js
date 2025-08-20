const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SoldProductsSchema = new Schema({
  id: ObjectId,
  runId: { type: Number, default: 0 },
  price: Number,
  amount: Number,
  vehicleName: String,
  team: String,
  player: {
    userId: String,
    name: String,
  },
  time: Date,
});

SoldProductsSchema.statics.findById = function (id) {
  return this.find({ id }).lean;
};

SoldProductsSchema.statics.createSoldProducts = function (data) {
  return this.create(data);
};

module.exports = module.exports = mongoose.model(
  "SoldProducts",
  SoldProductsSchema,
  "SoldProducts"
);
