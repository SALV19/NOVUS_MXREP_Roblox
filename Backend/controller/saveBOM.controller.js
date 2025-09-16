const BOMSchema = require("../models/bom.model");

function orderSold(data) {
  console.log(data)
  // const order = new BOMSchema(data);
  // BOMSchema.createSoldProducts(order);
}

module.exports = {
  orderSold,
};
