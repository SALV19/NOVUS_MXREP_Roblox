const express = require("express");
const router = express.Router();

const getDataRoutes = require("./Data/data.routes");
const getReportRoutes = require("./Reports/report.routes");

router.use("/", getDataRoutes);
router.use("/", getReportRoutes);

module.exports = router;
