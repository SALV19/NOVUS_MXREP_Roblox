const express = require("express");
const router = express.Router();

const generateExcel = require("../../controller/Data/generateReport.controller");

router.get("/getReport", generateExcel.generateReport);

module.exports = router;
