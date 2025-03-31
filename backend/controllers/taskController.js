const { Task } = require("../models");

//@desc Get all tasks (admin: todas, user: suas)
//@route GET /api/tasks
//@access Private
const getTasks = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Get task by ID
//@route GET /api/tasks/:id
//@access Private
const getTaskById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Create new task (apenas admin)
//@route POST /api/tasks
//@access Private (admin)
const createTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Update task details
//@route PUT /api/tasks/:id
//@access Private
const updateTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Delete task (apenas admin)
//@route DELETE /api/tasks/:id
//@access Private (admin)
const deleteTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Update task status
//@route PUT /api/tasks/:id/status
//@access Private
const updateTaskStatus = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Update task checklist
//@route PUT /api/tasks/:id/todo
//@access Private
const updateTaskChecklist = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Dashboard data (apenas admin)
//@route GET /api/tasks/dashboard-data
//@access Private (admin)
const getDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Get user dashboard data
//@route GET /api/tasks/user-dashboard-data
//@access Private
const getUserDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
  getDashboardData,
  getUserDashboardData,
};
