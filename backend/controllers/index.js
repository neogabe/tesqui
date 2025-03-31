const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("./authControllers");
const { getUsers, getUserById } = require("./userController");
const { getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskChecklist, getDashboardData, getUserDashboardData } = require("./taskController");

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile, getUsers, getUserById, getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskChecklist, getDashboardData, getUserDashboardData };
