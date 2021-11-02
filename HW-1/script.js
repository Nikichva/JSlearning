const NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDbB = {
   count: NumberOfFilms,
   movies: {},
   actosr: {},
   gengres: [], 
   privat: false
};

const a = prompt('Какой из последних фильмов вы смотрели?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Какой из последних фильмов вы смотрели?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDbB.movies[a] = b;
personalMovieDbB.movies[c] = d;

console.log(personalMovieDbB);