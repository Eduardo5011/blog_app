const jwt = require("jsonwebtoken");

const verifyJWT = async (req, res) => {
    const {cookies} = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }

  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();

  if (!foundUser) {
    return res.sendStatus(403); // Forbidden
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.UserInfo.username) {
      return res.sendStatus(403);
    }

    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: decoded.UserInfo.username,
        },
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({ accessToken });
  });
};
module.exports = verifyJWT;
