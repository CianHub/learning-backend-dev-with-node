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
    // If not -1 than product is already in cart
    const cartProductIndex = this.cart.items.findIndex((cartProduct) => {
      return cartProduct.productId.toString() === product._id.toString();
    });

    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items]; // clone existing cart

    if (cartProductIndex >= 0) {
      // if product exists
      newQuantity = this.cart.items[cartProductIndex].quantity + 1; // get new quantity
      updatedCartItems[cartProductIndex].quantity = newQuantity; // increase quantity in cart
    } else {
      // if new product
      updatedCartItems.push({
        productId: ObjectId(product._id),
        quantity: newQuantity,
      }); // adds product to cart with quantity of 1
    }
    const updatedCart = {
      items: updatedCartItems,
    }; // new cart to save to db
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
