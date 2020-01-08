const express = require('express');
const bodyparser = require('body-parser');

const productsController = require('../controllers/products');

const router = express.Router();

router.use(bodyparser.urlencoded({ extended: false }));

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;
