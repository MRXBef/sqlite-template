import { Sequelize } from "sequelize"
import sqlite3 from "sqlite3"


const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'mydatabase.db',
    dialectModule: sqlite3.verbose()
})

export default db