const express = require("express")
const connectToDB = require("./config/db");
const app = express();

const authRouter = require("./routes/auth.routes")

app.use("/api/auth", authRouter)

connectToDB();

//to read from req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

module.exports = app