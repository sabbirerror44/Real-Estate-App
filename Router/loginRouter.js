//external imports
const express = require("express");
const { getLogin, login, logout } = require("../Controller/loginController");

const router = express.Router();

router.get("/", getLogin);

router.post("/", login);

// router.delete("/", logout);

module.exports = router;
