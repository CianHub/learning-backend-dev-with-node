const mongodb = require('../util/database');
const MongoClient = mongodb.MongoClient;

class Product {
  constructor(title, price, imageURL, description) {
    this.title = title;
    this.price = price;
    this.imageURL = imageURL;
    this.description = description;
  }

  save() {}
}

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
