const express = require('express');

const router = express.Router();

router.use('/add-user', (req, res, next) => {
  res.send(
    '<form method="POST" action="/users"><input type="text" name="title"/><button type="submit">Add User </button>'
  );
});

router.post('/users', (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
});

module.exports = router;
