const db = require('../db');
const fn = {};
const table = 'article';
var url = require("url");

const fs = require('fs');
const pathLib = require('path');

// 搜索框
fn.search = {
  GET: function (req, res, next) {
  },
};

fn.upload = {
  POST: function (req, res, next) {
    var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path, newName, function (err){
      if(err){
        res.send({
          code:1001,
          data:{},
          message:"上传失败"
        });
      } else {
        res.send({
          code:1000,
          data:{
            src:newName
          },
          message:""
        });
      }
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