const path = require('path');
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const User = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findOne()
    .then((user) => {
      req.user = new User({
        email: user.email,
        name: user.name,
        cart: user.cart,
      });
      next();
    })
    .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@cluster0-vatrd.mongodb.net/shop?retryWrites=true&w=majority`
  )
  .then((result) => {
    User.findOne().then((result) => {
      if (!result) {
        const user = new User({
          name: 'Cian',
          email: 'cian@test.com',
          cart: { items: [] },
        });
        user.save();
      }
    });
    console.log('Connection to DB successful!');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
