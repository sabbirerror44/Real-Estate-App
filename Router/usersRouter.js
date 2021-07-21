//external imports
const express = require("express");
const {
  getUsers,
  addUser,
  removeUser,
} = require("../Controller/usersController");

const router = express.Router();

//users page
router.get("/", getUsers);

//add user
router.post("/signup", addUser);

//remove user
router.delete("/remove/:id", removeUser);

module.exports = router;
