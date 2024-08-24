import express, { json } from 'express';
import dotenv from 'dotenv';
import db from '../config/Database.js';
import Users from '../models/userModel.js';
import router from '../routers/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(json());

// Menggunakan router yang sudah diatur
app.use(router);

export default async (req, res) => {
    try {
        await db.authenticate();
        console.log('Database connected');
        await db.sync(Users);
    } catch (error) {
        console.error('Error: ', error);
    }

    app(req, res);
};