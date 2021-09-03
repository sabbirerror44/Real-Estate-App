//external imports

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

// internal imports
const User = require("../models/People");

//do login
async function login(req, res, next) {
  try {
    //find a user who has this email/username
    const user = await User.findOne({
      $or: [
        {
          email: req.body.username,
        },
        {
          mobile: req.body.username,
        },
      ],
    });
    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        //prepare the user object to generate token
        const userObject = {
          id: user._id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
        };

        const token = jwt.sign(
          {
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            role: user.role,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '2 days',
          }
        );

        res.status(200).json({
          user: userObject,
          access_token: token,
          message: "User Logged In successfully!",
        });
      } else {
        throw createError("Login failed! Please try again.");
      }
    } else {
      throw createError("Login failed! Please try again.");
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = {
  login,
};
