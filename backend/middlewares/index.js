const { protect, adminOnly } = require("./authMiddleware");
const upload = require("./uploadMiddleware");

module.exports = { protect, adminOnly, upload };