const express = require("express");
const router = express.Router();

// Query parameters
// Get: /numbers/add?first=<number here>&second=<number here></number>
router.get("/add", async (request, response) => {
  const first = parseInt(request.query.first);
  const second = parseInt(request.query.second);
  if (!first || !second) {
    response.send("Please enter valid numbers");
  }
  response.send(`Result: ${first + second} `);
});

// Path parameters
// Get: /multiply/:a/:b
// /numbers/multiply/<first number here>/<second number here>
router.get("/multiply/:a/:b", async (request, response) => {
  const a = parseInt(request.params.a);
  const b = parseInt(request.params.b);
  if (!a || !b) {
    response.send("Please enter valid numbers");
  }
  response.send(`Result: ${a * b} `);
});

module.exports = router;
