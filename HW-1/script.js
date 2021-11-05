// const NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDbB = {
//    count: NumberOfFilms,
//    movies: {},
//    actosr: {},
//    gengres: [], 
//    privat: false
// };

// const a = prompt('Какой из последних фильмов вы смотрели?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Какой из последних фильмов вы смотрели?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDbB.movies[a] = b;
// personalMovieDbB.movies[c] = d;

// console.log(personalMovieDbB);
                          
                      //----------------УСЛОВИЯ----------------//
// const num = 50;
//    if (num < 49){
//        console.log('Error');
//    }  else if(num > 100){
//       console.log('So much');
//    } else {
//       console.log('Ok');
//    }

// const num1 = 50;
//    (num1 === 50) ? console.log('Ok!') : console.log('Error!');

const num = 50;

switch (num) {
   case 49:
      console.log('Неверно');
      break;
   case 100:
      console.log('Неверно');
      break;
   case 50:
      console.log('В точку!');
      break;
   default:
      console.log('Не в этот раз');
      break;         
}