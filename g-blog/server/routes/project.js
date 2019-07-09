const db = require('../db');
const fn = {};
const table = 'project';
var url = require("url");

// 项目
fn.projectList = {
  GET: function (req, res, next) {//读取
    let currentPage = 0, pageSize = 5;
    const parma = url.parse(req.url, true);
    const searchObj = {
      type: parma.query.type,
      isDelete: 0,
    };
    if (req.cookies.user) {
      searchObj.userId = req.cookies.user.id
    }
    if (parseInt(parma.query.currentPage) > 0) {
      currentPage = parseInt(parma.query.currentPage) - 1;
      currentPage *= pageSize;
    }
    if (parma.query.pageSize) {
      pageSize = parseInt(parma.query.pageSize);
    }
    db.find(
      table,
      { search: searchObj } , 
      currentPage, 
      pageSize, 
      { createdTime: 1 }
    ).then(data => {
      const result = [];
      data.forEach(item => {
        const obj = {
          id: item._id,
          title: item.title,
          time: new Date(item.createdTime).toLocaleDateString(),
          type: item.type,
          src: item.src,
          img: item.img
        };
        result.push(obj);
      });
      res.json({
        code: 1000,
        data: result,
        message: ''
      });
    }).catch(err => {
      res.json({
        code: 1001,
        data: {},
        message: err
      });
    });
  },
};
fn.project = {
  GET: function (req, res, next) {//读取
    const parma = url.parse(req.url, true);
    const searchObj = { _id: new db.ObjectId(parma.query.id) };
    db.find(
      table,
      { search: searchObj } 
    ).then(data => {
      res.json({
        code: 1000,
        data: {
          id: data[0]._id,
          title: data[0].title,
          createdTime: data[0].createdTime,
          type: data[0].type,
          src: data[0].src,
          img: data[0].img
        }
      });
    }).catch(err => {
      res.json({
        code: 1001,
        data: {},
        message: err
      });
    });
  },
  POST: function (req, res, next) {//新建
    if (JSON.stringify(req.cookies) === '{}') {
      res.json({
        code: 1001,
        data: {},
        message: '游客无权限发表文章，请先登录！'
      });
    } else {
      var obj = req.body;
      obj.userId = req.cookies.user.id;
      obj.userName = req.cookies.user.userName;
      obj.createdTime = new Date().getTime();
      obj.isDelete = 0;

      db.insert(
        table, 
        obj
      ).then((data) => {
        if (data.insertedCount === 1) {
          res.json({
            code: 1000,
            data: [
              {
                id: data.insertedIds[0],
                title: obj.title,
                time: obj.createdTime,
                img: obj.img,
                src: obj.src,
                type: obj.type,
              }
            ],
            message: "保存成功"
          });
        } else {
          res.json({
            code: 1001,
            data: {},
            message: "数据保存失败"
          });
        }
      });
    }
  },
  PUT: function (req, res, next) {//更新
    if (JSON.stringify(req.cookies) === '{}') {
      res.json({
        code: 1001,
        data: {},
        message: '游客无权限发表文章，请先登录！'
      });
    } else {
      db.update(
        table, 
        { _id: new db.ObjectId(req.body.id) }, 
        req.body
      ).then((data) => {
        if (data.result.n) {
          res.json({
            code: 1000,
            data: req.body,
            message: '更新成功！'
          });
        }
      }).catch(err => {
        res.json({
          code: 1001,
          data: {},
          message: err
        });
      });
    }
  },
  DELETE: function (req, res, next) {//删除
    if (JSON.stringify(req.cookies) === '{}') {
      res.json({
        code: 1001,
        data: {},
        message: '游客无权限发表文章，请先登录！'
      });
    } else {
      db.update(
        table, 
        { _id: new db.ObjectId(req.body.id) }, 
        { isDelete: 1 }
      ).then((data) => {
        if (data.result.n) {
          res.json({
            code: 1000,
            data: {},
            message: '已删除！'
          });
        }
      }).catch(err => {
        res.json({
          code: 1001,
          data: {},
          message: err
        });
      });
    }
  },
};

module.exports = fn;