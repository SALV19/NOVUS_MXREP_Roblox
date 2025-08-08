async function sendData(request, response) {
  try {
    const dataFromRoblox = request.body.dataFromRoblox
    console.log(request)
    response.status(201);
  } catch (error) {
    console.log(error);
    console.error("Error desde controller:", error);
    response.status(500).json({ error: error.message });
  }
}

module.exports = {
    sendData
 };
