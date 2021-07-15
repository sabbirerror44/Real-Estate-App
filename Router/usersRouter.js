//external imports
const express = require("express");
const { getUsers, addUser } = require("../Controller/usersController");

const router = express.Router();

//users page
router.get("/", getUsers);

//add user
router.post("/signup", addUser);

module.exports = router;
