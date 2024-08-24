import { Sequelize } from 'sequelize';
import path from 'path';
import sqlite3 from 'sqlite3';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(process.cwd(), 'mydatabase.db'), // Menggunakan path relatif dari direktori kerja saat ini
    dialectModule: sqlite3
});

export default db;