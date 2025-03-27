const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('This is a test');
});

router.get("/test2", (req, res) => {
  res.send("Second test!!!");
});

module.exports = router;