const express = require("express")
const router = express.Router()

const simulationController = require("../../controller/simulation/simulation.controller")

router.post("/start", simulationController.start)
router.post("/end", simulationController.end)

module.exports = router