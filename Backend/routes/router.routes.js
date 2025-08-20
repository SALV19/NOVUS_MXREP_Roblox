const express = require("express");
const router = express.Router();

const getDataRoutes = require("./Data/data.routes");
const getReportRoutes = require("./Reports/report.routes");
const simulationRoutes = require("./Simulation/simulation.routes");

router.use("/", getDataRoutes);
router.use("/report", getReportRoutes);
router.use("/simulation", simulationRoutes);

module.exports = router;
