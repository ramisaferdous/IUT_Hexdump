const express = require('express');
const router = express.Router();
const promptController = require('../controller/prompt.controller.js'); 


router.get('/prompt', promptController.handleAPI);

module.exports = router;