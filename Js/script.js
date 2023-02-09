'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
    };
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();





function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}


detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    } else {
        console.log('Sorry it is privat')
    }
};

showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();





// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num)
// }

// showFirstMessage('hello, world!');
// console.log(num);

// // function calc(a, b) {
// //     return(a + b);
// // }

// // console.log(calc(4, 3));
// // console.log(calc(7, 6));
// // console.log(calc(7, 10));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello!')
// };

// logger();

// // const calc = (a, b) => a + b;

// // console.log(calc);

// const usdCurr = 28;
// const discount = 0.9;

// function convert(ammount, curr) {
//     return curr * ammount;

// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);

// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 6) return
//     }
//     console.log('done')
// }

// test()

// function doNothing() {};
// console.log(doNothing() === undefined);

// const str = 'test';
// const arr = [1, 2 ,4];

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str)

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('q'));

// const logg = 'Hello world';

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 11));

// const num = 12.2;

// console.log(Math.round(num));

// const test = '12.2px';

// console.log(parseInt(test));


