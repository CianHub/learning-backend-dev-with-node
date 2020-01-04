const express = require('express');
const bodyparser = require('body-parser');

const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(usersRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(3000);
