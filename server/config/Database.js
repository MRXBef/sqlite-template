// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import { Sequelize } from 'sequelize';
// import path from 'path';
// import sqlite3 from 'sqlite3'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const db = new Sequelize({
//     dialect: 'sqlite',
//     storage: path.resolve(__dirname, 'mydatabase.db'),
//     logging: console.log,
//     dialectModule: sqlite3
// });

// export default db;

import { Sequelize } from "sequelize"

const connectionString = "postgres://default:2YK8HEohgJyU@ep-lingering-sun-a1czpp4t.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"

const db = new Sequelize(connectionString, {
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