const db = require('../db');
const fn = {};
const table = 'article';
var url = require("url");

// 搜索框
fn.search = {
  GET: function (req, res, next) {
  },
};

fn.upload = {
  GET: function (req, res, next) {
    res.json({
      code:1000,
      data:{
        src:"/static/food.png"
      },
      message:""
    });
  },
};

fn.giveSomeJson = {
  GET: function (req, res, next) {
    res.json({
      'title': 'jsonObj',
      'timer': Date.parse(new Date())
    });
  },
  POST: function (req, res, next) {
  },
  PUT: function (req, res, next) {
  },
  DELETE: function (req, res, next) {
  },
};

module.exports = fn;