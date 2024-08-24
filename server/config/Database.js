import { Sequelize } from 'sequelize';
import path from 'path';
import sqlite3 from 'sqlite3';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(process.cwd(), 'mydatabase.db'),
    logging: console.log,
    dialectModule: sqlite3
});

export default db;
