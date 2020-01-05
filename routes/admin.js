const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const bodyparser = require('body-parser');

const router = express.Router();

const products = [];

router.use(bodyparser.urlencoded({ extended: false }));

router.get('/add-product', (req, res, next) => {
  res.render('add-product', { title: 'Add Product' });
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
