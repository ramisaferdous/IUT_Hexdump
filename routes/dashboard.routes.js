const express = require('express');
const path = require('path');
const router = express.Router();
const dashboardController = require('../controller/dashboard.controller.js'); 

router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../html_files/dashboard.html')); 
});

router.get('/dashboard/profile',(req,res) =>{
    res.sendFile(path.join(__dirname, '../html_files/userProfile.html')); 
});

router.get('/dashboard/profile/data', dashboardController.viewProfile);

module.exports = router;