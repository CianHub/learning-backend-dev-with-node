require('dotenv').config();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) =>
  MongoClient.connect(
    `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@cluster0-vatrd.mongodb.net/shop?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log('MongoDB connection successful!');
      _db = client.db();
      callback();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw 'No DB found';
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
