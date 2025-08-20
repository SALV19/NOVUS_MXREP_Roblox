const { orderSold } = require("../orderSold.controller");

function sendData(request, response) {
  try {
    const dataFromRoblox = request.body.dataFromRoblox;
    handleEvent(dataFromRoblox);
    response.status(201).send("Data created");
  } catch (error) {
    console.log(error);
    console.error("Error desde controller:", error);
    response.status(500).json({ error: error.message });
  }
}

function handleEvent(dataFromRoblox) {
  const event = dataFromRoblox.event;
  let saveFunction;
  if (event == "order_sold") saveFunction = orderSold(dataFromRoblox);

  return saveFunction;
}

module.exports = {
  sendData,
};
