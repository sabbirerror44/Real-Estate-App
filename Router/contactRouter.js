//external imports
const express = require("express");
const {  getInterestedContact, addContact, addContactAdmin } = require("../Controller/contactController");

const router = express.Router();

router.get("/:email",  getInterestedContact);
router.post("/owner", addContact);
router.post("/admin", addContactAdmin);

module.exports = router;
