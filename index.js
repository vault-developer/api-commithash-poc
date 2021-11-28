const express = require("express");
const app = express();
const port = 3000;

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const SHA = process.env.GIT_COMMIT_SHA_ID || 'not_found';

app.get("/", (req, res) => {
    res.send(`git hash: ${SHA}`);
});

app.listen(port, () => console.log(`Server is running http://localhost:3000`));