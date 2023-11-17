const express = require("express");
// const User = require("../model/users");
const {
    getAllUser,
    getUserById,
    postUser,
    deleteUser
} = require("../controller/user");
const router = express.Router();

//method path
//GetAll /users (ENDPOINT 1)/
router.get("/users", getAllUser);

//Get user by id
router.get("/users/:userId", getUserById);

//Post user
router.post("/users", postUser);

//Delete user
router.delete("/users/:userId", deleteUser);

module.exports = router;