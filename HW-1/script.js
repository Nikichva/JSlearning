// // const NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// // const personalMovieDbB = {
// //    count: NumberOfFilms,
// //    movies: {},
// //    actosr: {},
// //    gengres: [], 
// //    privat: false
// // };

// // const a = prompt('Какой из последних фильмов вы смотрели?', ''),
// //       b = prompt('На сколько оцените его?', ''),
// //       c = prompt('Какой из последних фильмов вы смотрели?', ''),
// //       d = prompt('На сколько оцените его?', '');

// // personalMovieDbB.movies[a] = b;
// // personalMovieDbB.movies[c] = d;

// // console.log(personalMovieDbB);
                          
//                       //----------------УСЛОВИЯ----------------//
// // const num = 50;
// //    if (num < 49){
// //        console.log('Error');
// //    }  else if(num > 100){
// //       console.log('So much');
// //    } else {
// //       console.log('Ok');
// //    }

// // const num1 = 50;
// //    (num1 === 50) ? console.log('Ok!') : console.log('Error!');

// // const num = 50;

// // switch (num) {
// //    case 49:
// //       console.log('Неверно');
// //       break;
// //    case 100:
// //       console.log('Неверно');
// //       break;
// //    case 50:
// //       console.log('В точку!');
// //       break;
// //    default:
// //       console.log('Не в этот раз');
// //       break;         
// // }


//                     //----------------ЦИКЛЫ----------------//

// "use strict";

// let num= 50;
// // while(num <= 55){
// //    console.log(num);
// //    num++;
// // } 

// // do{
// //    console.log(num);
// //    num++;
// // }
// // while(num < 55);

// // for(let i = 1; i < 8; i++){
// //    console.log(num);
// //    num++;
// // }

// for(let i = 1; i<10; i++){
//    if(i===6){
//       //break;
//       continue;
//    }
//    console.log(i);
// }

"use strict";
 
let NumberOfFilms;



 function start(){
   NumberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

   while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)){
      NumberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
   }
 }

start();

const personalMovieDB = {
   count: NumberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false 
};

function rememberMyFilms(){
   for (let i = 1; i < 2; i++){
      const a = prompt('Последний просмотренный фильм:', ''),
            b = prompt('Ваша оценка фильма', '');
      
      if (a != null && b != null && a != '' && b != '' && a.length < 50){
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else{
         console.log('error');
         i--;
      } 
   }
}

rememberMyFilms();

function detectPersonalLevel(){
   if (personalMovieDB.count < 10){
      console.log('Вы посмотрели слишком мало фильмов!');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
       console.log('Вы классический зритель');
   } else if (personalMovieDB.count >=30){
      console.log('Вы киноман!');
   } else {
      console.log('Произошла ошибка');
   }
}

detectPersonalLevel(); 

function showMyDB(hidden){
   if (!hidden){
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
   for (let i = 1; i <= 3; i++){
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}

writeYourGenres();