const express = require("express");
const router = express.Router();
const checkPhone = require("../controller/checkPhone");
const resendOTP = require("../controller/resendOTP");
const verifyOTP = require("../controller/verifyOTP");
const verifyToken = require("../middleware/verifyToken");

// ... existing code ...

router.post("/phone", checkPhone);
router.post("/resend-otp", resendOTP);
router.post("/verify-otp", verifyOTP);

// ... existing code ...

module.exports = router; 