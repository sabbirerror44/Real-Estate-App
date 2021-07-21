//external imports
const express = require("express");
const { getContact, addContact } = require("../Controller/contactController");

const router = express.Router();

router.get("/", getContact);
router.post("/", addContact);

module.exports = router;
