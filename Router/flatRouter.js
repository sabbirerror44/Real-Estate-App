//external imports
const express = require("express");
const {
  getFlat,
  flatPost,
  removeFlat,
  updateFlat,
  getFlatById,
} = require("../Controller/flatController");

const router = express.Router();

router.get("/", getFlat);
router.get("/:id", getFlatById);
router.post("/", flatPost);
router.put("/:id", updateFlat);
router.delete("/:id", removeFlat);

module.exports = router;
