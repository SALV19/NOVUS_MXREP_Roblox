const SoldProductsSchema = require("../models/soldProducts.model");

function orderSold(data) {
  const order = new SoldProductsSchema(data);
  SoldProductsSchema.createSoldProducts(order);
}

module.exports = {
  orderSold,
};
