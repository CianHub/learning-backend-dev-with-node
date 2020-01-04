const express = require('express');

const app = express();

app.use('/egg', (req, res, next) => {
  console.log('Middleware 3');
  res.send('<h1>I am an egg</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use('/', (req, res, next) => {
  console.log('Middleware 2');
  res.send('Hello World');
});

app.listen(3000);
