const express = require("express");
const app = express();

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const SHA = process.env.HD_COMMIT_SHA || 'not_found';

app.get("/", (req, res) => {
    res.send(`git hash: ${SHA}`);
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));