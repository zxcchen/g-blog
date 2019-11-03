var socketio = require('socket.io');

module.exports = function initSocket(server){
  var io = socketio.listen(server);
  io.sockets.on('connection',function(socket){
    let username;
    socket.on('test',function(content){
      socket.broadcast.emit('customEmit',{
        name:username||'匿名',
        text:content
      });
    });
    socket.on('login',function(name){
      username = name;
      socket.broadcast.emit('userLogin',username);
    });
    socket.emit('login');
  });
};