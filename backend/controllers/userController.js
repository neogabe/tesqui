const { Task, User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//@desc Get all users (admin only)
//@route GET /api/users
//@access Private (admin)
const getUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "member" }).select("-password");

    // Adiciona contador de tasks para cada usuário
    const usersWithTaskCounts = await Promise.all(
      users.map(async (user) => {
        const pendingTasks = await Task.countDocuments({
          assignedTo: user._id,
          status: "Pendente",
        });
        const inProgressTasks = await Task.countDocuments({
          assignedTo: user._id,
          status: "Em andamento",
        });
        const completedTasks = await Task.countDocuments({
          assignedTo: user._id,
          status: "Concluído",
        });
        return {
          ...user._doc,
          pendingTasks,
          inProgressTasks,
          completedTasks,
        };
      })
    );

    res.status(200).json(usersWithTaskCounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Get user by id
//@route GET /api/users/:id
//@access Private
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, getUserById };
