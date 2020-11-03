const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

// Meals router
const MealsRouter = require("./meals-router");
app.use("/meals", MealsRouter.router);

// Reviews router
//const reviewsRouter = require("./reviews-router");
//app.use("/reviews", reviewsRouter);

// reservation router
// const reservationsRouter = require("./reservations-router");
// app.use("/reservations", reservationsRouter);

const mealsWithReviews = meals.map((meal) => {
  meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  return meal;
});

/** `pickRandom(xs)` returns a random element of `xs` where `xs` is an array. */
const pickRandom = (xs) => xs[Math.floor(Math.random() * xs.length)];

app.get("/", async (_request, response, next) => {
  response.send("Meal Sharing Web App");
  next();
});

// app.get("/meals", async (_request, response) => {
//   response.send(mealsWithReviews);
// });

app.get("/cheap-meals", async (_request, response) => {
  response.send(mealsWithReviews.filter((meal) => meal.price < 60));
});

app.get("/large-meals", async (_request, response) => {
  response.send(mealsWithReviews.filter((meal) => meal.maxNumberOfGuests > 9));
});

app.get("/meal", async (_request, response) => {
  response.send(pickRandom(mealsWithReviews));
});

app.get("/reviews", async (_request, response) => {
  response.send(mealsWithReviews);
});

app.get("/reservations", async (_request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (_request, response) => {
  response.send(pickRandom(reservations));
});

module.exports = app;
