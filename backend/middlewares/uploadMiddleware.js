const multer = require("multer");

// Configurar o armazenamento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Filtrar arquivos
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Arquivo inválido. Somente arquivos .jpeg, .png e .jpg são permitidos"
      ),
      false
    );
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
