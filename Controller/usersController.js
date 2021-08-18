//external imports
const bcrypt = require("bcrypt");

// internal imports
const User = require("../models/People");

//get all users
async function getUsers(req, res, next) {
  try {
    const result = await User.find({});
    res.status(200).json({
      result,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

//Add users
async function addUser(req, res, next) {
  console.log(req.body);
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

// remove user
async function removeUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete({
      _id: req.params.id,
    });

    // remove user avatar if any
    if (user.avatar) {
      unlink(
        path.join(__dirname, `/../public/uploads/avatars/${user.avatar}`),
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
  getUsers,
  addUser,
  removeUser,
};
