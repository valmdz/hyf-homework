const express = require("express");
const router = express.Router();

// Getting data through query parameters using GET
// Going to /calculator/multiply?firstParam=1&secondParam=2 should respond with 2.
// Going to /calculator/multiply?firstParam=1&secondParam=2&secondParam=4 should respond with 8.
// Going to /calculator/add?firstParam=1&secondParam=2&secondParam=4 should respond with 7.
// There can be an infinite number of query parameters!

/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap */
const flatMap = (xs, f) => xs.reduce((acc, a) => acc.concat(f(a)), []);

/** Takes an array of strings or an arrays of strings and parse each string */
const toArrayOfInt = (x) => {
  if (typeof x === "string") {
    return [parseInt(x)];
  }
  return x.map((x) => parseInt(x));
};

/** Takes a list and returns the product of the elements */
const product = (list) => list.reduce((acc, x) => acc * x, 1);

/** Takes a list and returns the sum of all the elements */
const sum = (list) => list.reduce((acc, x) => acc + x, 0);

router.get("/multiply", (req, res) => {
  const input = Object.values(req.query);
  const listOfNum = flatMap(input, toArrayOfInt);
  console.log(product(listOfNum));
  res.json({ product: product(listOfNum) });
});

router.get("/add", (req, res) => {
  const input = Object.values(req.query);
  const listOfNum = flatMap(input, toArrayOfInt);
  console.log(sum(listOfNum));
  res.json({ sum: sum(listOfNum) });
});

// router.get("/subtract", (req, res) => { //Implement
//   const input = Object.values(req.query);
//   const listOfNum = flatMap(input, toArrayOfInt);
//   console.log(subtract(listOfNum));
//   res.json({ subtract: subtract(listOfNum) });
// });

// router.get("/divide", (req, res) => { //Implement
//   const input = Object.values(req.query);
//   const listOfNum = flatMap(input, toArrayOfInt);
//   console.log(sum(listOfNum));
//   res.json({ sum: sum(listOfNum) });
// });


module.exports = router;
