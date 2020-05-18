const Product = require('../models/product');

exports.getAddProduct = (req, res, next) =>
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    imageURL: imageURL,
    price: price,
    description: description,
  })
    .save()
    .then((result) => {
      console.log(result);
      return res.redirect('/');
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) =>
  new Product(
    req.body.title,
    req.body.price,
    req.body.imageURL,
    req.body.description,
    req.body.productId
  )
    .save()
    .then(() => {
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));

exports.getProducts = (req, res, next) =>
  Product.find()
    .then((products) => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    })
    .catch((err) => console.log(err));

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteByID(prodId)
    .then(() => res.redirect('/admin/products'))
    .catch((err) => console.log(err));
};
