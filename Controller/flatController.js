//external imorts
const { unlink } = require("fs");
const path = require("path");

//internal imports
const Flat = require("../models/Flat");

//Get All Approved Flats
const getApprovedFlat = async (req, res) => {
  try {
    if (req.params.type === 'all') {
        const flats = await Flat.find({status: "approved"});
        if(flats){
          res.status(200).json(flats);
        }
        else{
          throw Error("Flats does not exist");
        }
    }
    else{
      const flats = await Flat.find({contract: req.params.type, status: "approved"});
      if(flats){
        res.status(200).json(flats);
      }
      else{
        throw Error("Flats does not exist");
      }
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

//Get All Pending flats
const getPendingFlat = async (req, res) => {
  try {
        const flats = await Flat.find({status: "pending"});
        if(flats){
          res.status(200).json(flats);
        }
        else{
          throw Error("Flats does not exist");
        }
    } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

//get flat by Id
async function getFlatById(req, res, next) {
  try {
    const data = await Flat.find({ _id: req.params.id });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

//Add Flats
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
    console.log(result);
    res.status(200).json({
      message: "Flat was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: err.message,
        },
      },
    });
  }
}

//update Flat
async function updateFlatStatus(req, res) {
  try {
    const result = await Flat.findByIdAndUpdate(
      {_id: req.params.id},
      {
        $set: {
          status: "approved"
        }
      },
      {
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      message: "Flat Approved successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Could not approve the Flat!",
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
      message: "Flat removed successfully!",
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
  getApprovedFlat,
  getPendingFlat,
  flatPost,
  removeFlat,
  updateFlatStatus,
  getFlatById,
};
