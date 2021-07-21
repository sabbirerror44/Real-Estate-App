//Internal imports
const Contact = require("../models/Contact");

//get Contact page
async function getContact(req, res, next) {
  try {
    const result = await Contact.find({});
    res.status(200).json({
      result,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

//Add Contact
async function addContact(req, res, next) {
  let newContact;
  newContact = new Contact(req.body);

  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occurred ! ",
        },
      },
    });
  }
}

module.exports = {
  getContact,
  addContact,
};
