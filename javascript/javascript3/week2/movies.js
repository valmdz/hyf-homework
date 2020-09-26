const urlMovies =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

async function getMovies() {
  try {
    const data = await fetch(urlMovies);
    const movies = await data.json();

    const badMovies = movies.filter((movie) => movie.rating < 4);
    console.log({ badMovies });

    const badMoviesSince2000 = movies.filter(
      (movie) => movie.rating < 4 && movie.year >= 2000
    );
    console.log({ badMoviesSince2000 });
  } catch (error) {
    console.log(error);
  }
}

getMovies();
