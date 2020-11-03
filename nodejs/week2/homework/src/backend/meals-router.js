const express = require("express");
const router = express.Router();

const mealsWithReviews = require("./mealsWithReviews");

router.get("/", async (_request, response) => {
  response.send(mealsWithReviews);
});

// Filter meal according to ID
router.get("/:id", async (request, response) => {
  const id1 = parseInt(request.params.id);
  if (!id1) {
    response.status(400);
    response.send({ message: "Please enter valid id" });
    return;
  }
  const aMeal = mealsWithReviews.find((meal) => meal.id === id1);
  if (aMeal === undefined) {
    response.status(400);
    response.send({ message: `There are no meals with the id:${id1}` });
    return;
  }
  response.send(aMeal);
});

module.exports = { router: router };
