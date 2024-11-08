const express = require('express');
const path = require('path');
const router = express.Router();
const signupController = require('../controller/login.controller.js'); 

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../html_files/login.html')); 
});

router.post('/login', signupController.handleSignup);

module.exports = router;