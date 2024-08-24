import { Sequelize } from "sequelize"

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'mydatabase.db'
})

export default db