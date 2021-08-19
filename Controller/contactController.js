//Internal imports
const AdminContact = require("../models/AdminContact");
const Contact = require("../models/Contact");

//get Contact page
async function getInterestedContact(req, res, next) {
  try {
    const result = await Contact.find({OwnerEmail: req.params.email});
    res.status(200).json({result});
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

//Add Contact
async function addContact(req, res) {
  let newContact;
  newContact = new Contact(req.body);
  try {
    const result = await newContact.save();
    res.status(200).json({
      message: "Contact was added successfully!",
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
//Add Contact Admin
async function addContactAdmin(req, res) {
  let newContact;
  newContact = new AdminContact(req.body);
  try {
    const result = await newContact.save();
    res.status(200).json({
      message: "Contact was added successfully!",
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
  getInterestedContact,
  addContact,
  addContactAdmin,
};
