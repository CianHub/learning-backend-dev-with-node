const express = require('express');

const router = express.Router();

router.get('/add-user', (req, res, next) => {
  res.send(
    '<form method="POST" action="/admin/users"><input type="text" name="title"/><button type="submit">Add User </button>'
  );
});

router.post('/users', (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
});

module.exports = router;
