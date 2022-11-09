'use strict'
const numberOfFilms = +prompt('Кіко кіна ти вже відів', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

// const a = prompt('Один з останніх фільмів', ''),
//   b = +prompt('Оцініть фільм', ''),
//   c = prompt('Один з останніх фільмів', ''),
//   d = +prompt('Оцініть фільм', '')

// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d

for (let i = 0; i < 2; i++) {
  const a = prompt('Один з останніх фільмів', '')
  b = prompt('Оцініть фільм', '')

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b
    console.log('done')
  } else {
    console.log('error')
    i--
  }
}

if (personalMovieDB.count < 10) {
  console.log('Мало ти бачив')
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log('Класичний глядач')
} else if (personalMovieDB.count >= 30) {
  console.log('Супер Глядач')
} else {
  console.log('error')
}

console.log(personalMovieDB)
//
