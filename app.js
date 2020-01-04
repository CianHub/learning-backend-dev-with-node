const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/add-user', (req, res, next) => {
  res.send(
    '<form method="POST" action="/users"><input type="text" name="title"/><button type="submit">Add User </button>'
  );
});

app.use('/users', (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  next();
});

app.use('/', (req, res, next) => {
  res.send('Hello World');
});

app.listen(3000);
