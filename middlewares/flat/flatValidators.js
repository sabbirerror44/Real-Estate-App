//external imports
const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const path = require("path");
const { unlink } = require("fs");

//internal imports
const Flat = require("../../models/Flat");

//add user validator
const flatValidators = [
  check("propertyName")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),

  check("price").isLength({ min: 1 }).withMessage("Price is required").trim(),

  check("description")
    .isLength({ min: 5, min: 50 })
    .withMessage("Description is required")
    .isAlpha("en-US")
    .withMessage("Description must not contain anything other than alphabet"),

  check("baths").isLength({ min: 1 }).withMessage("Baths is required").trim(),

  check("beds").isLength({ min: 1 }).withMessage("Baths is required").trim(),

  check("location")
    .isLength({ min: 1 })
    .withMessage("Baths is required")
    .trim(),

  check("area").isLength({ min: 1 }).withMessage("Baths is required").trim(),

  check("developer")
    .isLength({ min: 1 })
    .withMessage("Baths is required")
    .trim(),
];

const flatValidationHandler = function (req, res, next) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    //remove uploader files
    if (req.files.length > 0) {
      const { filename } = req.files[0];
      unlink(
        path.join(__dirname, `/../public/uploads/flatAvatars/${filename}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }

    // response the errors
    res.status(500).json({
      errors: mappedErrors,
    });
  }
};

module.exports = {
  flatValidators,
  flatValidationHandler,
};
