const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const router = express.Router();

router.use(bodyparser.urlencoded({ extended: false }));

router.get('/add-user', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'));
});

router.use('/users', (req, res, next) => {
  console.log(req.body.title);
  res.sendFile(path.join(__dirname, '../', 'views', 'users.html'));
});

module.exports = router;
