const mongoose = require("mongoose");

const FlatSchema = mongoose.Schema(
  {
    flat: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    bed: {
      type: String,
      required: true,
    },
    bath: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
    },
    contract: {
      type: String,
      enum: ["buy", "rent", "bachelor"],
      default: "buy",
    },
    developer: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved"],
      default: "pending",

    }
  },
  {
    timestamps: true,
  }
);

const Flat = mongoose.model("Flat", FlatSchema);

module.exports = Flat;
