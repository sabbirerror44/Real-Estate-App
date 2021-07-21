const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    propertyName: {
      type: String,
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
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
