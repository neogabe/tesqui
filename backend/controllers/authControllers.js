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
const registerUser = async (req, res) => {
  try {
    const { name, email, password, profileImageUrl, adminInviteToken } =
      req.body;

    // Verificar se usuário já existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(409)
        .json({ message: "Já existe um usuário cadastrado com esse email" });
    }

    // Determinar o cargo do usuário. Se o ``adminInviteToken`` for válido, o cargo será 'admin', caso contrário, coloca como 'member'
    let role = "member";
    if (
      adminInviteToken &&
      adminInviteToken === process.env.ADMIN_INVITE_TOKEN
    ) {
      role = "admin";
    }

    // Realizar o hash da senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Criar o usuário
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profileImageUrl,
      role,
    });

    // Retornar usuário com o token
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profileImageUrl: user.profileImageUrl,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Autenticar um usuário
//@route POST /api/auth/login
//@access Public
const loginUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Obter perfil do usuário
//@route GET /api/auth/profile
//@access Private (Precisa do token de autenticação (JWT))
const getUserProfile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Atualizar perfil do usuário
//@route PUT /api/auth/profile
//@access Private (Precisa do token de autenticação (JWT))
const updateUserProfile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };
