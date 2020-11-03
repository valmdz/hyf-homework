const meals = require("./data/meals");
const reviews = require("./data/reviews");

const mealsWithReviews = meals.map((meal) => {
  meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  return meal;
});

module.exports = mealsWithReviews;
