const express = require('express');
const routes = require('./routes')
const cors = require('cors');
const socket = require('socket.io')

const app = express();
const server = require('http').createServer(app);
const io = socket(server)

app.use(cors())

app.use(routes)



io.on('connection', socket => {
  console.log('[IO] Connection => Server has a new connection')
  socket.on('chat.message', data => {
      console.log('[SOCKET] Chat.message => ', data)
      io.emit('chat.message', data)
  })
  socket.on('disconnect', () => {
      console.log('[SOCKET] Disconnect => A connection was disconnected')
  })
})

app.listen(3333);