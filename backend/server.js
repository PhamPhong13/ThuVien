const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util")

// start the server

async function startServer() {
    try { 
        await MongoDB.connect(config.db.uri);
        console.log("Connected to MongoDB");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });


    }
    catch (error) {
        console.log(error);
        process.exit();
    }
}

startServer();

