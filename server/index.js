require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");
const register = require("./routes/register");
const login = require("./routes/login");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/", register);
app.use("/", login);

const port = process.env.PORT || 4000;
app.listen(port, console.log(`Listening on port ${port}...`));
