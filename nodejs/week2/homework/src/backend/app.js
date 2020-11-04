const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

const mealsWithReviews = require("./mealsWithReviews");

// Meals router
const MealsRouter = require("./meals-router");
app.use("/meals", MealsRouter.router);

// Reviews router
const reviewsRouter = require("./reviews-router");
app.use("/reviews", reviewsRouter.router);

// reservation router
const reservationsRouter = require("./reservations-router");
app.use("/reservations", reservationsRouter.router);

/** `pickRandom(xs)` returns a random element of `xs` where `xs` is an array. */
const pickRandom = (xs) => xs[Math.floor(Math.random() * xs.length)];

app.get("/", async (_request, response, next) => {
  response.send("Meal Sharing Web App");
  next();
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

app.get("/reservation", async (_request, response) => {
  response.send(pickRandom(reservations));
});

module.exports = app;
