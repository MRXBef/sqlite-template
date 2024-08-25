import { Sequelize } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

const db = new Sequelize(process.env.PSQL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthrorized: false
        }
    },
    logging: false
})

export default db