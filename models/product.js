const fs = require('fs');
const path = require('path');
const pathUtil = require('../util/path');
const products = [];
const p = path.join(pathUtil, 'data', 'products');

const getProductsFromFile = callback => {
  fs.readFile(p, (err, data) => {
    if (err) {
      return callback([]);
    }
    return callback(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
    fs.readFile(p, (err, data) => {
      if (!err) {
        products = JSON.parse(data);
      }
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
