const number0Films = +prompt('Сколько филмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: number0Films,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Один из последних посмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних посмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[a] = b;

console.log(personalMovieDB);
