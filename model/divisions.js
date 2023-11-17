const sequelize = require("sequelize");
const mydb = require("../utility/connect_db")

const Division = mydb.define("divisions", {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize.ENUM("WEB DEV", "MOBILE DEV", "PM", "UI/UX", "INKADIV"),
        allowNull: false
    }
})

module.exports = Division;