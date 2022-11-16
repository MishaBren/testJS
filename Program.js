'use strict';
let numberOfFilms

function start() {
  numberOfFilms = +prompt('Скільки фільмів ти вже бачив?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Скільки фільмів ти вже бачив?', '');

  }
}
start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};



function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один з останніх фільмів', '');
    const b = prompt('Оцініть фільм', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms()

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Слабкий глядач');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Класичний глядач');
  } else if (personalMovieDB.count >= 30) {
    console.log('Відмінний Глядач');
  } else {
    console.log('error');
  }
}

detectPersonalLevel()

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDb(personalMovieDB.privat)

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимий жанр під номером ${i}`);
  }
}
writeYourGenres()