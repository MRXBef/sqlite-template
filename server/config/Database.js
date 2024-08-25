import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Sequelize } from 'sequelize';
import path from 'path';
import sqlite3 from 'sqlite3'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, 'mydatabase.db'),
    logging: console.log,
    dialectModule: sqlite3
});

export default db;
