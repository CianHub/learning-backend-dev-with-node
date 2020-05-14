const ObjectId = require('mongodb').ObjectId;
const getDB = require('../util/database').getDB;

class User {
  constructor(email, name, cart, id) {
    this.email = email;
    this.name = name;
    this._id = id;
    this.cart = cart;
  }

  save() {
    const db = getDB();
    return db
      .collection('users')
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  addToCart(product) {
    /*const cartProductIndex = this.cart.items.findIndex((cartProduct) => {
      return cartProduct._id === product._id;
    });*/

    const updatedCart = {
      items: [{ productId: ObjectId(product._id), quantity: 1 }],
    };
    const db = getDB();
    return db
      .collection('users')
      .updateOne({ _id: ObjectId(this._id) }, { $set: { cart: updatedCart } });
  }

  static fetchUserByID(id) {
    const db = getDB();
    return db
      .collection('users')
      .findOne({ _id: ObjectId(id) })
      .then((result) => result)
      .catch((err) => console.log(err));
  }
}

module.exports = User;
