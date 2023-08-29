require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = require("./config/corsOptions");
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser')
const credentials = require("./middleware/credentials");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = 4000;

connectDB();

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieParser());

// app.use(verifyJWT)
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/profile", require("./routes/profile"));


mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

/*

*/
