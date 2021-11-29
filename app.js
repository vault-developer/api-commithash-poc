const express = require("express");
const app = express();

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

app.get("/", (req, res) => {
    res.send(`git hash: ${process.env.COMMIT_SHA}`);
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));