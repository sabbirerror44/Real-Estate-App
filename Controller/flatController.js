//external imorts
const { unlink } = require("fs");
const path = require("path");

//internal imports
const Flat = require("../models/Flat");
//get index page

async function getFlat(req, res, next) {
  res.send("This is flatAdd page");
}

async function flatPost(req, res, next) {
  let newFlat;

  if (req.files && req.files.length > 0) {
    newFlat = new Flat({
      ...req.body,
      avatar: req.files[0].filename,
    });
  } else {
    newFlat = new Flat({
      ...req.body,
    });
  }

  //save flat or send error
  try {
    const result = await newFlat.save();
    res.status(200).json({
      message: "Flat was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

//remove flat
async function removeFlat(req, res, next) {
  try {
    const flat = await Flat.findByIdAndDelete({
      _id: req.params.id,
    });

    // remove user avatar if any
    if (flat.avatar) {
      unlink(
        path.join(__dirname, `/../public/uploads/flatAvatars/${flat.avatar}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }

    res.status(200).json({
      message: "User was removed successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Could not delete the user!",
        },
      },
    });
  }
}

module.exports = {
  getFlat,
  flatPost,
  removeFlat,
};
