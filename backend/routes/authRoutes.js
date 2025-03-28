const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers");
const { protect, upload } = require("../middlewares");

const router = express.Router();

// Rotas de autorização
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Nenhum arquivo foi enviado" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.name
  }`;
  res.status(200).json({ imageUrl });
});

module.exports = router;
