//external imports
const express = require("express");
const { getFlat, flatPost } = require("../Controller/flatController");

const router = express.Router();

router.get("/", getFlat);
router.post("/", flatPost);

module.exports = router;
