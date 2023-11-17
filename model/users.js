const sequelize = require("sequelize");
const mydb = require("../utility/connect_db")

const User = mydb.define("users", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    fullName: {
        type: sequelize.STRING, // varchar(255)
        allowNull: false,
    },
    nim: {
        type: sequelize.STRING,
        allowNull: false
    },
    angkatan: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
    },
    profilePicture: {
        type: sequelize.TEXT,
        allowNull: true
    },

})

module.exports = User;


// const User = [{
//         id: "0",
//         nama: "Annas",
//         divisi: "Back"
//     },
//     {
//         id: "1",
//         nama: "Sovianto",
//         divisi: "End"
//     },
//     {
//         id: "2",
//         nama: "Annas Sovianto",
//         divisi: "Back End"
//     }
// ];