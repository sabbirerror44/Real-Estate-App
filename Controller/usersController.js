//external imports
const bcrypt = require("bcrypt");

// internal imports
const User = require("../models/People");

//Add users
async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

  //save user or send error
 try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User was added successfully!",
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
  addUser,
};
