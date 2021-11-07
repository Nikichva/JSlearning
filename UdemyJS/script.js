"use strict";
//--------------- FUNCTION DECLARATION ---------------//
let num = 20;

function showFirstMessage() {
    console.log('Hello world!');
    num = 10;
}

showFirstMessage();
console.log(num);

//--------------- FUNCTION EXPRESSION  ---------------//

const logger = function() {
    console.log('Hello');
};

logger(); 


//--------------- СТРЕЛОЧНАЯ ФУНКЦИЯ  ---------------//
const calc = (a, b) => { 
    console.log('1');
    return a + b;
}; 