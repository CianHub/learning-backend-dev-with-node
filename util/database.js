require('dotenv').config();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) =>
  MongoClient.connect(
    `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@cluster0-vatrd.mongodb.net/test?retryWrites=true&w=majority`
  )
    .then((result) => {
      console.log('MongoDB connection successful!');
      callback(result);
    })
    .catch((error) => console.log(error));

module.exports = mongoConnect;
