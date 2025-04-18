const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const JWT_SECRET = process.env.JWT_SECRET || "yourSecretKey";
const TOKEN_EXPIRES_IN = "30m";
const OTP_EXPIRES_IN = 60; // 60 seconds for OTP expiration

async function checkPhone(request, response) {
  try {
    const { phone } = request.body;

    const user = await UserModel.findOne({ phone }).select("-password");
    if (!user) {
      return response.status(400).json({
        message: "User does not exist",
        error: true,
      });
    }

    const token = jwt.sign({ id: user._id, phone: user.phone }, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRES_IN,
    });

    // Calculate token expiration time (15 minutes)
    const tokenExpirationTime = new Date();
    tokenExpirationTime.setMinutes(tokenExpirationTime.getMinutes() + 30);

    // Calculate OTP expiration time (60 seconds)
    const otpExpirationTime = new Date();
    otpExpirationTime.setSeconds(otpExpirationTime.getSeconds() + OTP_EXPIRES_IN);

    return response.status(200).json({
      message: "Phone number verified. Reset token generated.",
      success: true,
      data: user,
      token: token,
      tokenExpiresAt: tokenExpirationTime.toISOString(),
      otpExpiresAt: otpExpirationTime.toISOString(),
      otpExpiresIn: OTP_EXPIRES_IN
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = checkPhone;
