const express = require("express");
const dns = require("node:dns");

const app1 = express();

app1.use(express.json());

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const app = require("./src/app");
const connectToDB = require("./src/config/db");

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        console.log("Connecting to MongoDB...");

        await connectToDB();

        console.log("Database connection established!");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Application startup failed:", error.message);
        process.exit(1);
    }
}

startServer();
