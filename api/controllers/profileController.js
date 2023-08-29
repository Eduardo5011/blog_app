const jwt = require("jsonwebtoken");
const User = require("../models/User");

const handleProfile = async (req, res) => {
  const {refreshToken} = req.cookies
  res.json(req.cookies)


};

module.exports = { handleProfile };
