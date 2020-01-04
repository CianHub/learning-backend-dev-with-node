const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');

const app = express();

app.use('/admin', adminRoutes);
app.use(usersRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
