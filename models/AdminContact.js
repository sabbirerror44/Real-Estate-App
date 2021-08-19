const mongoose = require("mongoose");

const AdminContactSchema = mongoose.Schema(
  {
    topic: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AdminContact = mongoose.model("AdminContact", AdminContactSchema);

module.exports = AdminContact;
