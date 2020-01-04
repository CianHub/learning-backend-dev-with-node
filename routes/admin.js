const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const bodyparser = require('body-parser');

const router = express.Router();

router.use(bodyparser.urlencoded({ extended: false }));

router.get('/add-user', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
});

module.exports = router;
