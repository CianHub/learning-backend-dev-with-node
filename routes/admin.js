const express = require('express');
const bodyparser = require('body-parser');

const productsController = require('../controllers/products');

const router = express.Router();

router.use(bodyparser.urlencoded({ extended: false }));

router.get('/admin/add-product', productsController.getAddProduct);

router.post('/admin/add-product', productsController.postAddProduct);

router.get('/admin/product-list', productsController.getProducts);

module.exports = router;
