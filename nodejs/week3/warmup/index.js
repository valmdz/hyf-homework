const { request } = require("express");
const express = require("express");
const app = express();
const router = express.Router();
const calculatorRouter = require("./calculatorRouter");


app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.use("/calculator", calculatorRouter);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
