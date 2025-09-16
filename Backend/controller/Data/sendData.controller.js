const { orderSold } = require("../orderSold.controller");
const {clientOrders} = require("../clientOrders.controller")
const {employeesHired} = require("../employeesHired.controller")
const {productionLine} = require("../productionLine.controller")

function sendData(request, response) {
  try {
    const dataFromRoblox = request.body;
    handleEvent(dataFromRoblox);
    response.status(201).send("Data created");
  } catch (error) {
    console.log(error);
    console.error("Error desde controller:", error);
    response.status(500).json({ error: error.message });
  }
}

function handleEvent(dataFromRoblox) {
  // console.log(dataFromRoblox);
  const event = dataFromRoblox.event;
  let saveFunction;
  if (event == "order_sold") saveFunction = orderSold;
  else if (event == "employees_hired") saveFunction = employeesHired;
  else if (event == "cos") saveFunction = clientOrders;
  else if (event == "bom") saveFunction = saveBOM;
  else if (event == "productionLine") saveFunction = productionLine;


  return saveFunction(dataFromRoblox);
}

module.exports = {
  sendData,
};
