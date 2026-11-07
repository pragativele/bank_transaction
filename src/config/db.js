
const mongoose = require("mongoose");

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");

    } catch (err) {
        console.error("MongoDB connection failed!");
        console.error("Error name:", err.name);
        console.error("Error message:", err.message);

        throw err;
    }
}

module.exports = connectToDB;
