const jwt = require("jsonwebtoken");
const { User } = require("../models");

// Middleware para proteger as rotas
const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } else {
      res.status(401).json({
        message: "Não autorizado. Token de autenticação inválido.",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Token de autenticação inválido.",
    });
  }
};

// Middleware de acesso para admin
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({
      message: "Acesso negado. Somente um administrador pode acessar.",
    });
  }
};


module.exports = { protect, adminOnly };
