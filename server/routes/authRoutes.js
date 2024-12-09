const express = require("express");
const { register, forgotPassword, resetPassword } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);  // Make sure this is defined
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
