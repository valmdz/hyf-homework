const express = require("express");
const router = express.Router();

const movies = require("./movies");

// Return all movies
//  router.get("/", async (request, response) => {
//    response.send({ movies });
//  });

// Return all movies from the specified year
router.get("/:year", async (request, response) => {
  const year = parseInt(request.params.year);
  if (!year) {
    console.log("Please enter a valid year");
  }
  response.send(movies.filter((movie) => movie.year === year));
});

router.get("/year", async (request, response) => {
  const year = parseInt(request.query.year);
  if (!year) {
    console.log("Please enter a valid year");
  }
  response.send(movies.filter((movie) => movie.year === year));
});

// Returns all movies with year between beginYear and endYear
// fx. http://localhost:3000/movies/?beginYear=2000&endYear=2014
// router.get("/", async (request, response) => {
//   const beginYear = request.query.beginYear;
//   const endYear = parseInt(request.query.endYear);
//   console.log(endYear, 'something');
//   console.log(beginYear, 'something');
//   response.send(
//     movies.filter((movie) => movie.year > beginYear && movie.year < endYear)
//   );
// });

// Returns all movies with year between beginYear and endYear that are also of rating minRating or better
// fx. movies?beginYear=<year1>&endYear=<year2>&minRating=<minRating>
router.get("/", async (request, response) => {
  const beginYear = parseInt(request.query.beginYear);
  const endYear = parseInt(request.query.endYear);
  const minRating = parseInt(request.query.minRating);
  const sortedMovies = movies.sort((a, b) => a.year <= b.year);
  console.log(sortedMovies);
  console.log(`Latest year: ${sortedMovies[0].year}`);
  console.log(`Earliest year: ${sortedMovies[sortedMovies.length - 1].year}`);
  //console.log(Math.max(parseInt(years)));

  if (
    (!beginYear && !endYear) ||
    (!beginYear && !minRating) ||
    (!endYear && !minRating)
  ) {
    response.send("Please rethink your query");
  }
  if (!beginYear || !endYear) {
    response.send("Please enter a valid year");
  }
  if (!minRating) {
    response.send("Please enter a valid rating");
  }
  response.send(
    movies.filter(
      (movie) =>
        movie.year > beginYear &&
        movie.year < endYear &&
        movie.rating >= minRating
    )
  );
});

module.exports = router;
