const mongoose = require("mongoose");

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("server is connected to DB");
    })
    .catch((err) => {
        console.error(err.message);
        process.exit(1);//exit the process if server is not connected to DB
    })
}

module.exports = connectToDB;