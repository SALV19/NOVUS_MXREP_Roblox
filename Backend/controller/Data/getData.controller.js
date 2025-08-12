async function getData(request, response) {
  try {
    const dataFromRoblox = request.body.dataFromRoblox
    console.log(dataFromRoblox)
    response.status(201).send("received");
  } catch (error) {
    console.log(error);
    console.error("Error desde controller:", error);
    response.status(500).json({ error: error.message });
  }
}

module.exports = {
    getData
 };
