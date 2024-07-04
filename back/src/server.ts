import express from 'express';
import cors from 'cors';
import router from './routes';
import path from 'path';


const server = express();

server.use(express.json());

server.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  credentials: true,
}));

server.use('/uploads', express.static(path.join(__dirname, 'uploads')));
server.use(router);

export default server;
