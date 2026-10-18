const userModel = require("../models/user.model")
const jwt = require("jsonwebtokken")

async function userRegisterController(req, res){
    const {email, password, name} = req.body;

    const isExists = await userModel.findOne({
        email: email
    })
}

if(isExists){
    return res.status(422).json({
        message: "user already exists with email",
        status: "failed"
    })
}

const user = await userModel.create({
    email, password, name
})

const token = jwt.sign()

module.exports = {
    userRegisterController
}

