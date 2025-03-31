const express = require("express");
const { protect, adminOnly } = require("../middlewares");
const { getUsers, getUserById, deleteUser } = require("../controllers/userController");

const router = express.Router();

// Rota de gerenciamento de usuário
router.get("/", protect, adminOnly, getUsers);
router.get("/:id", protect, getUserById);

module.exports = router;
