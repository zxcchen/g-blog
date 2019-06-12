const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient, assert = require('assert');
const config = require('../config/index')
const url = config.dbPath;
var ObjectId = mongodb.ObjectID;

const db = {
  ObjectId,
};

db.init = function () {
  return MongoClient.connect(url)
    .then(function (conn) {
      db.conn = conn;
      console.log("Connected successfully to server");
    });
};

db.insert = function (table, ...obj) {
  return db.conn
    .collection(table)
    .insertMany(obj);
};

db.find = function (table, search, skip = 0, limit = 1, sort = {}) {
  if(!search.hasOwnProperty('result')){
    search.result = {};
  }
  return db.conn
    .collection(table)
    .find(search.search,search.result)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .toArray();
};

db.update = function (table, obj, newObj) {
  return db.conn
    .collection(table)
    .updateOne(obj, { $set: newObj });
};

db.remove = function (table, obj) {
  return db.conn
    .collection(table)
    .deleteOne(obj);
};

db.indexs = function (table, obj) {
  return db.conn
    .collection(table)
    .createIndex(
      obj,
      null,
      function (err, result) {
        console.log('db',result);
      });
};

module.exports = db;