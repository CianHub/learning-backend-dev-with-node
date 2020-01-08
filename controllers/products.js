const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    title: 'Add Product',
    path: '/admin/add-product'
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    title: 'Shop ',
    prods: products,
    path: '/',
    passProducts: products.length > 0
  });
};
