//external imports
const express = require("express");
const { getCV, postCV } = require("../Controller/CVController");
const cvAvatarUpload = require("../middlewares/cv/cvAvatarUpload");
//internal imports

const router = express.Router();

router.get("/",  getCV);
router.post("/", cvAvatarUpload, postCV);

module.exports = router;