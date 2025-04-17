const express = require("express");
const registerUser = require("../controller/registerUser");
const searchUser = require("../controller/searchUser");
//search user
router.post("/search-user",searchUser)

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
