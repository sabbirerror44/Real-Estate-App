//Internal imports
const CV = require("../models/CV.JS");

//get CV
async function getCV(req, res, next) {
    try {
      const result = await CV.find({});
      res.status(200).json({result});
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
}

//POST CV
async function postCV(req, res) {
    let newCV;
    if (req.files && req.files.length > 0) {
      newCV = new CV({
        ...req.body,
        cv: req.files[0].filename,
      });
    }
    //save CV or send error
    try {
      const result = await newCV.save();
      res.status(200).json({
        message: "CV was added successfully!",
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

module.exports = {
  getCV,
  postCV,
};
