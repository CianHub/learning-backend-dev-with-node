const ObjectId = require('mongodb').ObjectId;
const getDB = require('../util/database').getDB;

class Product {
  constructor(title, price, imageURL, description) {
    this.title = title;
    this.price = price;
    this.imageURL = imageURL;
    this.description = description;
  }

  save() {
    const db = getDB();
    return db
      .collection('products')
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDB();
    return db
      .collection('products')
      .find()
      .toArray()
      .then((result) => {
        return result;
      })
      .catch((err) => console.log(err));
  }

  static fetchByID(id) {
    const db = getDB();
    return db
      .collection('products')
      .findOne({ _id: ObjectId(id) })
      .then((result) => result)
      .catch((err) => console.log(err));
  }
}

module.exports = Product;
