const express = require('express');
const bodyparser = require('body-parser');

const adminController = require('../controllers/admin');

const router = express.Router();

router.use(bodyparser.urlencoded({ extended: false }));

router.get('/admin/add-product', adminController.getAddProduct);

router.post('/admin/add-product', adminController.postAddProduct);

router.get('/admin/products', adminController.getProducts);

module.exports = router;
