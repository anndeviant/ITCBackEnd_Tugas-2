require("dotenv").config();
const sequelize = require("sequelize");

const dbName = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
// const database = "ta_database1";

const mydb = new sequelize(dbName, username, password, {
    host: "localhost",
    dialect: "mysql"
});

module.exports = mydb;