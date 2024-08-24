import { Sequelize } from 'sequelize';
import express, { json } from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import Users from './models/userModel.js';
import router from './routers/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Tambahkan default port jika tidak ada di .env

const startServer = async () => {
  try {
    await db.authenticate();
    console.log('Database connected');

    await db.sync(); // Sync tanpa argumen model
  } catch (error) {
    console.log('Error: ' + error);
  }

  app.use(cors());
  app.use(cookieParser());
  app.use(json());
  app.use(router);

  app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
  });
};

startServer();
