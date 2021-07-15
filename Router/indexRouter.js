//external imports
const express = require("express");
const { getIndex } = require("../Controller/indexController");

const router = express.Router();

router.get("/", getIndex);

module.exports = router;
