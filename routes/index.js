const express = require("express");
const registerUser = require("../controller/registerUser");
const searchUser = require("../controller/searchUser");

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
