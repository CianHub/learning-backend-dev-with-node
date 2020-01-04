const express = require('express');
const bodyparser = require('body-parser');

const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(usersRoutes);

app.listen(3000);
