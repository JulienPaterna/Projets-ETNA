import express from 'express';
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
import bodyParser from "body-parser";

const app = express();
const httpserver = createServer(app);
const io = new Server(httpserver);
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(jsonParser);
app.use(urlencodedParser);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/chat', (req, res) => {
  res.sendFile(join(__dirname, 'chat.html'));
}); 

app.get('/login', (req, res) => {
  res.sendFile(join(__dirname, 'login.html'));
}); 

app.post('/login', (req, res) => {
  const login = req.body.login;
  console.log(login);
});

io.on('connection', (socket: any) => {
  socket.on('chat message', (msg: any) => {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

io.of("/").adapter.on('delete-room', (room: any) => {
  console.log(`room ${room} was deleted`);
});

httpserver.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});