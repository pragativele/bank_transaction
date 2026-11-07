const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "email is required for creating a user"],
        trim:true,
        lowercase: true,
        unique:[true, "email already exist"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    name:{
        type: String,
        required:[true,"name is required for creating account"]
    },
    password:{
        type:String,
        required:[true, "password is required"],
        minlength:[6,"password should contain more than 6 character"],
        select:false
    }
},{
    timestamps: true
})
//executes this function before data will be save in DB
//act as a middleware
userSchema.pre("save",async function(){
    //if user change the pass then convert the pass into hash
    if(!this.isModified("password")){
        return
    }
    try{
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch(err){
        return 
    }
})

//compare the password with the hashed pass in DB 
userSchema.methods.comparePassword = async function(pass) {
    return await bcrypt.compare(pass, this.password)
}

const userModel = mongoose.model("user", userSchema)
module.exports = userModel