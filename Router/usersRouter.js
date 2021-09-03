//external imports
const express = require("express");
const {
  addUser,
} = require("../Controller/usersController");
const { addUserValidators, addUserValidationHandler } = require("../middlewares/users/userValidators");

const router = express.Router();

//add user
router.post("/signup", addUserValidators ,addUserValidationHandler, addUser);

module.exports = router;
