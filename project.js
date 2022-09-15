const numberOfFilms = +prompt('Кіко кіна ти вже відів', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

const a = prompt('Один з останніх фільмів', ''),
  b = +prompt('Оцініть фільм', ''),
  c = prompt('Один з останніх фільмів', ''),
  d = +prompt('Оцініть фільм', '')

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d

console.log(personalMovieDB)
