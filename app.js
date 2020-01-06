const express = require('express');
const path = require('path');
//const expressHandleBars = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//app.engine('handlebars', expressHandleBars());
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render('404', { title: 'Page Not Found' });
});

app.listen(3000);
