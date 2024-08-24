import express, { json } from 'express';
import dotenv from 'dotenv';
import db from './config/Database.js';
import Users from './models/userModel.js';
import router from './routers/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Database connected');
        await db.sync(Users); // pastikan `sync` tidak memerlukan argumen jika Anda tidak menggunakannya

        // Setup middleware
        app.use(cors());
        app.use(cookieParser());
        app.use(json());
        app.use(router);

        // Start server
        app.listen(PORT, () => {
            console.log(`App listening at port ${PORT}`);
        });
    } catch (error) {
        console.log('Error: ' + error);
        process.exit(1); // Optional: exit the process with an error code
    }
};

startServer();
