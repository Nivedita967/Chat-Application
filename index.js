// This is node Server which will handle socket io connection
const io = require('socket.io')(8000)

const users = {};

io.on('connection', socket => {
  socket.on('new-user', name => {
    console.log("New user", name)
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  });

  socket.on('send-chat-message', message => {  
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id]})
  });

  socket.on('send-img-msg', message => {
    socket.broadcast.emit('img-msg', message)
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  });
  
})