const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

const mealsWithReviews = meals.map((meal) => {
  meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  return meal;
});

const pickRandom = (xs) => xs[Math.floor(Math.random() * xs.length)];

app.get("/", async (_request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (_request, response) => {
  response.send(mealsWithReviews);
});

app.get("/cheap-meals", async (_request, response) => {
  response.send(mealsWithReviews.filter((meal) => meal.price < 60));
});

app.get("/large-meals", async (_request, response) => {
  response.send(mealsWithReviews.filter((meal) => meal.maxNumberOfGuests > 9));
});

app.get("/meal", async (_request, response) => {
  response.send(pickRandom(mealsWithReviews));
});

app.get("/reservations", async (_request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (_request, response) => {
  response.send(pickRandom(reservations));
});

module.exports = app;
