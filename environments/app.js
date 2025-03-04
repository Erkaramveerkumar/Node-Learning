// import { configDotenv } from "dotenv";
// configDotenv();
import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

const port = process.env.PORT || 5100;

// console.log(port);
app.get('/', (req, res) => {
    
    // res.send("Hello World");
    res.send(`Welcome to ${process.env.WEBSITE_NAME}`);
});

app.listen(port, () => {
    console.log("Server is runnig on port", port);
})
