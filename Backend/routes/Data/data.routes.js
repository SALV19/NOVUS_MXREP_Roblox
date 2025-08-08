const express = require('express');
const router = express.Router()

const getDataController = require('../../controller/Data/getData.controller');
const sendDataController = require('../../controller/Data/sendData.controller');

router.post('/', getDataController.getData);
router.post('/sendData', sendDataController.sendData);
router.post('/getData', getDataController.getData);


module.exports = router;
