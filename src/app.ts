import http from 'http';
import express from 'express';
import * as dotenv from 'dotenv';

export default function createApp() {
  dotenv.config();

  const app = express();

  // ROUTERS

  const server = http.createServer(app);

  return server;
}