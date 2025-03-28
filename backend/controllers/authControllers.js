const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Gerar token JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//@desc Registrar um usuário
//@route POST /api/auth/register
//@access Public
const registerUser = async (req, res) => {};

//@desc Autenticar um usuário
//@route POST /api/auth/login
//@access Public
const loginUser = async (req, res) => {};

//@desc Obter perfil do usuário
//@route GET /api/auth/profile
//@access Private (Precisa do token de autenticação (JWT))
const getUserProfile = async (req, res) => {};

//@desc Atualizar perfil do usuário
//@route PUT /api/auth/profile
//@access Private (Precisa do token de autenticação (JWT))
const updateUserProfile = async (req, res) => {};

modile.exports = 	{ registerUser, loginUser, getUserProfile, updateUserProfile };