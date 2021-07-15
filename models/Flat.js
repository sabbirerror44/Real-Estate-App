const mongoose = require("mongoose");

const FlatSchema = mongoose.Schema(
  {
    propertyName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    baths: {
      type: String,
      required: true,
      trim: true,
    },
    beds: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
    },
    contract: {
      type: String,
      enum: ["sale", "rent"],
      default: "sale",
    },
    developer: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Flat = mongoose.model("Flat", FlatSchema);

module.exports = Flat;
