const express = require('express');
const router = express.Router();
const path = require('path');




router.get('/exercise/bfs-exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../exercise_html_files/bfs-exercise.html'));
});

router.get('/exercise/bfs-exercise2', (req, res) => {
    res.sendFile(path.join(__dirname, '../exercise_html_files/bfs-exercise2.html'));
});

router.get('/exercise/bfs-exercise3', (req, res) => {
    res.sendFile(path.join(__dirname, '../exercise_html_files/bfs-exercise3.html'));
});

router.get('/exercise/dfs-exercise1', (req, res) => {
    res.sendFile(path.join(__dirname, '../exercise_html_files/dfs-exercise1.html'));
});

router.get('/exercise/dfs-exercise2', (req, res) => {
    res.sendFile(path.join(__dirname, '../exercise_html_files/dfs-exercise2.html'));
});







module.exports = router;