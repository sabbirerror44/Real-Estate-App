//external imports
const express = require("express");
const { login } = require("../Controller/loginController");
const { doLoginValidators, doLoginValidationHandler } = require("../middlewares/login/loginValidators");

const router = express.Router();

router.post("/", doLoginValidators, doLoginValidationHandler, login);

// router.delete("/", logout);

module.exports = router;
