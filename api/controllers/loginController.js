const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const handleLogin = async (req, res) => {
    const {username, password} = req.body
    if (!username || !password) return res
    .status(400)
    .json({ message: "Username and password are required"})
    const foundUser = await User.findOne({ username: username}).exec()
    if(!foundUser) return res.sendStatus(401);

    const match = await bcrypt.compare(password, foundUser.password)
}