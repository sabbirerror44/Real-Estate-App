//external imports
const express = require("express");
const {
  getUsers,
  addUser,
  removeUser,
} = require("../Controller/usersController");
const { addUserValidators, addUserValidationHandler } = require("../middlewares/users/userValidators");

const router = express.Router();

//users page
router.get("/", getUsers);

//add user
router.post("/signup", addUserValidators ,addUserValidationHandler, addUser);


//remove user
router.delete("/remove/:id", removeUser);

module.exports = router;
