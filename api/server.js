require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = 4000;

connectDB()

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
});

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});


/*

*/