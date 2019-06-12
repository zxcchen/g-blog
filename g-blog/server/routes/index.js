var url = require('url');
var public = require('./public');
var page = require('./page');
var project = require('./project');
var user = require('./users');
var chartRoom = require('./chartRoom');

const route = {
  public,
  page,
  project,
  user,
  chartRoom,
};

function router(req, res, next) {
  const path = url.parse(req.url);
  path.pathname = path.pathname.slice(1).split('/');
  // pathName:路由模块名称 fnName:模块方法名称
  const [pathName,fnName] = path.pathname;
  if (route.hasOwnProperty(pathName)) {
    route[pathName][fnName][req.method](req, res, next);
  } else {
    next();
  }
}

module.exports = router;
