import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Sequelize } from 'sequelize';
import sqlite3 from 'sqlite3';

// Mendapatkan __dirname dalam modul ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Menetapkan path database ke folder /tmp
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './tmp/mydatabase.db', // Gunakan folder /tmp untuk penyimpanan sementara
    logging: console.log,
    dialectModule: sqlite3
});

export default db;
