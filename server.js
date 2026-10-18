const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config(); //required to use mongo URI from .env file

const app = require("./src/app");
const PORT = process.env.PORT || 3000;

console.log("MONGO_URI loaded:", !!process.env.MONGO_URI);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});