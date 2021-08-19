const mongoose = require("mongoose");

const CVSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CV = mongoose.model("CV", CVSchema);

module.exports = CV;