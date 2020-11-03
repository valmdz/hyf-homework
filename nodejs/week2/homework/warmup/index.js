const express = require("express");
const app = express();
const numbersRouter = require("./numbers-router");

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.use("/numbers", numbersRouter);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
