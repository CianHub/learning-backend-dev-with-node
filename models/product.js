/*const ObjectId = require('mongodb').ObjectId;
const getDB = require('../util/database').getDB;

class Product {
  constructor(title, price, imageURL, description, userId, id) {
    this.title = title;
    this.price = price;
    this.imageURL = imageURL;
    this.description = description;
    this._id = id;
    this.userId = userId;
  }

  save() {
    const db = getDB();
    let dbOp;
    if (this._id) {
      dbOp = db.collection('products').updateOne(
        { _id: ObjectId(this._id) },
        {
          $set: {
            title: this.title,
            description: this.description,
            price: this.price,
            imageURL: this.imageURL,
          },
        }
      );
    } else {
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
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

  static deleteByID(id) {
    const db = getDB();
    return db
      .collection('products')
      .deleteOne({ _id: ObjectId(id) })
      .then((result) => console.log('Deletion Successful'))
      .catch((err) => console.log(err));
  }
}

module.exports = Product;*/
