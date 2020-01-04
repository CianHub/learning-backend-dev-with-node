const express = require('express');

const router = express.Router();

router.use('/', (req, res, next) => {
  next();
});

router.use('/', (req, res, next) => {
  res.send('Hello World');
});

module.exports = router;
