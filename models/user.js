const ObjectId = require('mongodb').ObjectId;
const getDB = require('../util/database').getDB;

class User {
  constructor(email, name, id) {
    this.email = email;
    this.name = name;
    this._id = id;
  }

  save() {
    const db = getDB();
    return db
      .collection('users')
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
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
