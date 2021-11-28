const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("git hash: 12345");
});

app.listen(port, () => console.log(`Server is running http://localhost:3000`));