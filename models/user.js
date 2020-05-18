/*const ObjectId = require('mongodb').ObjectId;
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

  deleteCartItem(prodId) {
    const cartProductIndex = this.cart.items.findIndex((cartProduct) => {
      return cartProduct.productId.toString() === prodId.toString();
    });

    let newQuantity = 1;
    let updatedCartItems = [...this.cart.items]; // clone existing cart

    if (cartProductIndex >= 0) {
      // if product exists
      newQuantity = this.cart.items[cartProductIndex].quantity - 1; // get new quantity
      updatedCartItems[cartProductIndex].quantity = newQuantity; // increase quantity in cart
      if (newQuantity === 0) {
        updatedCartItems.splice(cartProductIndex, 1);
      }
    }
    const updatedCart = {
      items: updatedCartItems,
    }; // new cart to save to db
    const db = getDB();
    return db
      .collection('users')
      .updateOne({ _id: ObjectId(this._id) }, { $set: { cart: updatedCart } });
  }

  getCart() {
    const db = getDB();
    const productIDs = this.cart.items.map((product) => {
      return product.productId;
    });
    return db
      .collection('products')
      .find({ _id: { $in: [...productIDs] } })
      .toArray()
      .then((productData) =>
        productData.map((product) => {
          return {
            ...product,
            quantity: this.cart.items.find(
              (cartItem) =>
                cartItem.productId.toString() === product._id.toString()
            ).quantity,
          };
        })
      )
      .catch((err) => console.log(err));
  }

  addOrder() {
    const db = getDB();
    return this.getCart()
      .then((products) => {
        const order = {
          items: products,
          user: {
            _id: ObjectId(this._id),
            name: this.name,
          },
        };
        return db.collection('orders').insertOne(order);
      })
      .then(() => {
        return db
          .collection('orders')
          .insertOne({ ...this.cart })
          .then(() => {
            this.cart = { items: [] };
          });
      });
  }

  getOrders() {
    const db = getDB();
    return db
      .collection('orders')
      .find({ 'user._id': new ObjectId(this._id) })
      .toArray();
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
*/
