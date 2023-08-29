const jwt = require("jsonwebtoken");

const handleProfile = async (req, res) => {
  const { refreshToken } = req.cookies;
  jwt.verify(refreshToken, process.env.ACCESS_TOKEN_SECRET, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
};

module.exports = { handleProfile };
