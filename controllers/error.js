exports.get404 = (req, res, next) => {
  res.render('404', { title: 'Page Not Found' });
};
