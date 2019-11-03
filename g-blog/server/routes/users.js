const db = require('../db');
const fn = {};
const table = 'user';

// 账户及权限
fn.login = {
  GET: function (req, res, next) {//登出
    res.clearCookie("user");
    res.json({
      code: 1000,
      data: {},
      message: ''
    });
  },
  POST: function (req, res, next) {//登录
    const searchObj = { account: req.body.account };
    db.find(
      table,
      { search: searchObj }
    ).then((data) => {//查找账户是否存在
      if (data.length) {//存在 返回账户信息
        const user = {
          id: data[0]._id,
          userName: data[0].account
        };
        
        res.cookie("user", user, { maxAge: 900000, httpOnly: true });
        res.json({
          code: 1000,
          data: {
            user: user,
          },
          message: ''
        });
      } else {//不存在 插入账户
        db.insert(
          table,
          req.body
        ).then((data) => {
          const user = {
            id: data.insertedIds[0],
            userName: req.body.account
          };
          res.cookie("user", user, { maxAge: 900000, httpOnly: true });
          res.json({
            code: 1000,
            data: {
              user: user,
            },
            message: ''
          });
        });
      }
    }).catch((err) => {
      res.json({
        code: 1100,
        message: '数据操作bug'
      });
    });
  },
};

module.exports = fn;