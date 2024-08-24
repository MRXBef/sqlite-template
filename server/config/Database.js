import { Sequelize } from "sequelize"
import sqlite3 from "sqlite3"

const sqlite = sqlite3.verbose()

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'mydatabase.db',
    dialectModule: sqlite
})

export default db