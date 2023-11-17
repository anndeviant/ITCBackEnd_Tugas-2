// const sequelize = require("sequelize");
const Division = require("../model/divisions");
const User = require("../model/users");
const mydb = require("./connect_db");

const divisi_itc = [{
        name: "WEB DEV",
    },
    {
        name: "MOBILE DEV",
    },
    {
        name: "PM",
    },
    {
        name: "UI/UX",
    },
    {
        name: "INKADIV",
    },
];

// One to many (division to users)
Division.hasMany(User);

User.belongsTo(Division);

const association = async () => {
    try {
        await mydb.sync({
            force: true,
        });
        // Input divisi
        // Division.bulkCreate(divisi_itc);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = association;