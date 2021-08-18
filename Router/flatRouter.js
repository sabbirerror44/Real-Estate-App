//external imports
const express = require("express");
const {
  getApprovedFlat,
  getPendingFlat,
  flatPost,
  removeFlat,
  updateFlatStatus,
  getFlatById,
} = require("../Controller/flatController");
const flatAvatarUpload = require("../middlewares/flat/flatAvatarUpload");

const router = express.Router();

router.get("/:type", getApprovedFlat);
router.get("/pending/all", getPendingFlat);
router.get("/single/:id", getFlatById);
router.post("/", flatAvatarUpload, flatPost);
router.put("/pending/:id", updateFlatStatus);
router.delete("/pending/:id", removeFlat);

module.exports = router;
