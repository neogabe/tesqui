const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("./authControllers");
const { getUsers, getUserById } = require("./userController");

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile, getUsers, getUserById };
