import express, { response } from 'express';
import http, { request } from 'http';
import bodyParser from "body-parser";
import {db} from './db';
import expressSession, { SessionData } from 'express-session';
import { RowDataPacket } from 'mysql2';
import { Server } from 'socket.io';

declare module 'express-session' {
  interface SessionData {
    user?: {id: number, username: string};
  }
};

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);
const JsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const session = expressSession( {
  secret: 'verysecret',
  resave: false,
  saveUninitialized: true,
  cookie: {},
});
app.use(JsonParser);
app.use(urlencodedParser);
app.use(session);

app.get('/', (request, response) => {
  console.log("first road");
  response.send("Hello first road");
})

app.get('/login', (request, response) => {
  response.sendFile(__dirname + '/login.html');
})

app.post('/login', (request, response) => {
  const username = request.body.username;
  const password = request.body.password;
  console.log(username, password);
});

app.get('/chat', (request, response) => {
  console.log("First chat");
  response.send("Hello First chat");
})

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

httpServer.listen(8080, () => console.log("Hello!"));