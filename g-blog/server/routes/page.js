const db = require('../db');
const fn = {};
const table = 'article';
const url = require("url");
const articleType = require("../config").articleType;

// 文章
fn.articleList = {
  GET: function (req, res, next) {//读取
    let currentPage = 0, pageSize = 5;
    const parma = url.parse(req.url, true);
    const searchObj = {
      isDelete: 0,
    };
    let resultObj = {};

    if (!JSON.stringify(req.cookies) === '{}'&&req.cookies.user) {
      searchObj.userId = req.cookies.user.id;
    }
    if (parseInt(parma.query.currentPage) > 0) {
      currentPage = parseInt(parma.query.currentPage) - 1;
      currentPage *= pageSize;
    }
    if (parma.query.pageSize) {
      pageSize = parseInt(parma.query.pageSize);
    }
    if (parma.query.type == 4) {//查询文章历史记录
      currentPage = 0;
      pageSize = 0;
      resultObj = {
        time: 1,
        title: 1
      };
    } else {
      searchObj.type = parseInt(parma.query.type);
    }
    db.find(
      table,
      {
        search: searchObj,
        result: resultObj
      },
      currentPage,
      pageSize,
      { createdTime: -1 }
    ).then(data => {
      let result = {
        name: articleType[parma.query.type].name,
        label: articleType[parma.query.type].label,
        article: [],
        total: 0
      };
      if (parma.query.type == 4) {
        const folder = {};
        data.forEach(item => {
          item.id = item._id;
          delete item._id;
          const time = new Date(item.time);
          item.time = time.toLocaleDateString();
          let date = `${time.getFullYear()}年${time.getMonth() + 1}月`;
          if (!folder.hasOwnProperty(date)) {
            folder[date] = [];
          }
          folder[date].push(item);
        });
        for (let k in folder) {
          result.article.push({
            label: k,
            data: folder[k]
          });
        }
        res.json({
          code: 1000,
          data: result,
          message: ''
        });
      } else {
        data.forEach(item => {
          var i = {
            id: item._id,
            title: item.title,
            content: item.content,
            markdown: item.markdown,
            tags: JSON.parse(item.tags),
            time: new Date(item.time).toLocaleDateString(),
          };
          result.article.push(i);
        });
        db.find(
          table,
          { search: searchObj },
          0,
          0
        ).then(data => {
          result.total = data.length;
          res.json({
            code: 1000,
            data: result,
            message: ''
          });
        });
      }
    }).catch(err => {
      res.json({
        code: 1001,
        data: {},
        message: err
      });
    });
  },
};
fn.article = {
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
          content: data[0].content,
          markdown: data[0].markdown,
          tags: JSON.parse(data[0].tags),
          time: new Date(data[0].time).toLocaleDateString(),
          type: data[0].type
        }
      });
    }).catch(err => {
      res.json({
        code: 1001,
        data: {},
        message: err
      })
    });
  },
  POST: function (req, res, next) {//新建
    if (JSON.stringify(req.cookies) === '{}'||!req.cookies.user) {
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
            data: {
              id: data.insertedIds[0],
              title: obj.title,
              content: obj.content,
              markdown: obj.markdown,
              tags: JSON.parse(obj.tags),
              time: obj.time,
            },
            message: "保存成功"
          });
        } else {
          res.json({
            code: 1001,
            data: {},
            message: "数据保存失败"
          });
        }
      }).catch(e=>{
        console.log('article-post',e)
      })
    }
  },
  PUT: function (req, res, next) {//更新
    if (JSON.stringify(req.cookies) === '{}'||!req.cookies.user) {
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
    if (JSON.stringify(req.cookies) === '{}'||!req.cookies.user) {
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

// 留言板
fn.msg = {
  GET: function (req, res, next) {//读取
  },
  POST: function (req, res, next) {//新建
  },
  PUT: function (req, res, next) {//更新
  },
  DELETE: function (req, res, next) {//删除
  },
};

module.exports = fn;