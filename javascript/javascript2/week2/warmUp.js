// Doubling of number.
const numbers = [1, 2, 3, 4];

const filterOdd = numbers.filter((num) => num % 2);
const timesTwo = filterOdd.map((num) => num * 2);
console.log(`The doubled numbers are ${timesTwo}`);

// Working with movies
const movies = require("./movies.json");

// Create an array of movies containing the movies with a short title (you define what short means)
const shortTitles = movies.filter((movie) => movie.title.length < 3);
console.log({ shortTitles });

// Create an array of movie titles with long movie titles
const longTitles = movies.filter((movie) => movie.title.length > 60);
console.log({ longTitles });

// Count the number of movies made between 1980-1989 (including both the years)
const yearFilter = movies.filter(
  (movie) => movie.year > 1980 && movie.year < 1989
);
console.log({ "Made between 1980-1989": yearFilter.length });

const getTag = ({ rating }) => {
  if (rating >= 7) {
    return "Good";
  }
  if (rating >= 4 && rating < 7) {
    return "Average";
  }
  return "Bad";
};

// Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const moviesWithTags = movies.map((movie) => {
  const tag = getTag(movie);
  return { ...movie, tag };
});

// Using chaining, first filter the movies-array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.
const higherThanSix = moviesWithTags
  .filter(({ rating }) => rating > 6)
  .map(({ rating }) => rating);
console.log({ higherThanSix });

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
const keywords = ["Surfer", "Alien", "Benjamin"];

const hasKeyword = (movie) =>
  keywords.some((keyword) =>
    movie.title.toLowerCase().includes(keyword.toLowerCase())
  );
const appearances = moviesWithTags.filter(hasKeyword);
console.log({ moviesWithKeywords: appearances.length });

// Create an array of movies where a word in the title is duplicated.
const hasRepeated = ([head, ...tail]) => {
  const reducer = ([b, prev], currentValue) => [
    b || prev === currentValue,
    currentValue,
  ];

  const [b, _] = tail.reduce(reducer, [false, head]);
  return b;
};

const moviesWithDuplicates = moviesWithTags.filter((movie) =>
  hasRepeated(movie.title.toLowerCase().split(" ").sort())
);
console.log({ moviesWithDuplicates });

// Calculate the average rating of all the movies using reduce. Optional
const averageRatings = (movies) =>
  movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log({ averageRatings: averageRatings(moviesWithTags) });

// Count the total number of Good, Average and Bad movies using reduce.
const step = (acc, movie) => {
  acc[movie.tag] = (acc[movie.tag] || 0) + 1;
  return acc;
};

const totalReviews = (movies) => movies.reduce(step, {});

console.log({ totalReviews: totalReviews(moviesWithTags) });
