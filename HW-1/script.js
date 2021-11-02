const NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDbB = {
   count: NumberOfFilms,
   movies: {},
   actosr: {},
   gengres: [], 
   privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDbB.movies[a] = b;
personalMovieDbB.movies[c] = d;

console.log(personalMovieDbB);