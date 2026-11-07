const express = require("express")
const connectToDB = require("./config/db");
const cookieParser = require("cookie-parser")
const app = express();

//to read from req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())


const authRouter = require("./routes/auth.routes")

app.use("/api/auth", authRouter)

connectToDB();


module.exports = app