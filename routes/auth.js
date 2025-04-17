const express = require("express");
const router = express.Router();
const checkPhone = require("../controller/checkPhone");
const resendOTP = require("../controller/resendOTP");
const verifyToken = require("../middleware/verifyToken");

// ... existing code ...

router.post("/check-phone", checkPhone);
router.post("/resend-otp", resendOTP);

// ... existing code ...

module.exports = router; 