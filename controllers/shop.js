const Product = require('../models/product');

exports.getProductList = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      title: 'Products ',
      prods: products,
      path: '/product-list',
      passProducts: products.length > 0
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      title: 'Home ',
      prods: products,
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/cart', {
      title: 'Your Cart',
      path: '/cart'
    });
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    title: 'Checkout',
    path: '/checkout'
  });
};
