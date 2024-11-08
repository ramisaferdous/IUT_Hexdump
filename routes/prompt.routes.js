const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/prompt', (req,res)=>{
    res.sendFile(path.join(__dirname, '../index.js')); 
});

module.exports = router;