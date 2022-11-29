"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        // personalMovieDB.count = +prompt('Скільки фільмів ти вже бачив?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ти вже бачив?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Слабкий глядач');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Класичний глядач');
        } else if (personalMovieDB.count >= 30) {
            console.log('Відмінний Глядач');
        } else {
            console.log('error');
        }
    },
    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимий жанр під номером ${i}`);

            if (genres == '' || genres == null) {
                console.log("Ви ввели некоректні дані")
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;

            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`)
        });
    }
};