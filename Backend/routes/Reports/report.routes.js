const express = require("express");
const router = express.Router();

const generateExcel = require("../../controller/Data/generateReport.controller");

router.get("/generateReport", generateExcel.generateReport);

module.exports = router;
