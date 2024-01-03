class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG13");
  }
}
const movies = [
    new Movie("kgf", "hobala", "PG13"),
    new Movie("Leo", "AVM", "PG"),
    new Movie("RRR", "YASH", "PG13"),
    new Movie("jailer", "RED GAINT", "R"),
    new Movie("Casino Royale", "Eon Productions", "PG13"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale);
