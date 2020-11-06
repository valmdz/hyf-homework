const { request } = require("express");
const express = require("express");
const router = express.Router();

const mealsWithReviews = require("./mealsWithReviews");

const mealsUnderMaxPrice = (request, meals) => {
  if (request.query.maxPrice === undefined) {
    return meals;
  }
  const maxPrice = parseInt(request.query.maxPrice);
  if (isNaN(maxPrice)) {
    return;
  }
  return meals.filter((meal) => meal.price < maxPrice);
};

const matchingTitles = (request, meals) => {
  if (request.query.title === undefined) {
    return meals;
  }
  return meals.filter((meal) => meal.title.includes(request.query.title));
};

const createdAfter = (request, meals) => {
  if (request.query.createdAfter === undefined) {
    return meals;
  }
  const date = new Date(request.query.createdAfter);
  if (isNaN(Number(date))) {
    return;
  }
  return meals.filter((meal) => date <= new Date(meal.createdAt));
};

const limitArray = (request, meals) => {
  if (request.query.limit === undefined) {
    return meals;
  }
  const limit = parseInt(request.query.limit);
  if (isNaN(limit)) {
    return;
  }
  return meals.slice(0, limit);
};

// Application of filtering with queries
router.get("/", async (request, response) => {
  const meals0 = mealsUnderMaxPrice(request, mealsWithReviews);
  if (meals0 === undefined) {
    response.status(400);
    response.send();
    return;
  }
  const meals1 = matchingTitles(request, meals0);
  if (meals1 === undefined) {
    response.status(400);
    response.send();
    return;
  }
  const meals2 = createdAfter(request, meals1);
  if (meals2 === undefined) {
    response.status(400);
    response.send();
    return;
  }
  const meals3 = limitArray(request, meals2);
  if (meals3 === undefined) {
    response.status(400);
    response.send();
    return;
  }
  response.send(meals3);
});

// Find meal according to ID
router.get("/:id", async (request, response) => {
  const id1 = parseInt(request.params.id);
  if (!id1) {
    response.status(400);
    response.send({ message: "Please enter valid id" });
    return;
  }
  const aMeal = mealsWithReviews.find((meal) => meal.id === id1);
  if (aMeal === undefined) {
    // response.status(400);
    // response.send({ message: `There are no meals with the id: ${id1}` });
    response.send();
    return;
  }
  response.send(aMeal);
});

module.exports = { router: router };
