//external imports
const express = require("express");
const { getLogin, login } = require("../Controller/loginController");
const { doLoginValidators, doLoginValidationHandler } = require("../middlewares/login/loginValidators");

const router = express.Router();

router.get("/", getLogin);

router.post("/", doLoginValidators, doLoginValidationHandler, login);

// router.delete("/", logout);

module.exports = router;
