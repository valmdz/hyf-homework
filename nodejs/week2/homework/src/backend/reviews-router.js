const express = require("express");
const router = express.Router();

const reviews = require("./data/reviews");

router.get("/", async (_request, response) => {
  response.send(reviews);
});

// Filter meal according to ID
router.get("/:id", async (request, response) => {
  const id1 = parseInt(request.params.id);
  if (!id1) {
    response.status(400);
    response.send({ message: "Please enter valid id" });
    return;
  }
  const aReview = reviews.find((review) => review.id === id1);
  if (aReview === undefined) {
    response.status(400);
    response.send({ message: `There are no reviews with the id: ${id1}` });
    return;
  }
  response.send(aReview);
});

module.exports = { router: router };
