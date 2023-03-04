<!--Масиви та об'єкти:-->
<!-- - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль-->
<!-- - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.-->
<!-- - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.-->
<!-- - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача-->


<!--Логічні розгалуження:-->
<!-- - Є змінна х, якій ви надаєте довільне числове значення.-->
<!--Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3-->
<!-- - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число-->
<!--(в першу, другу, третю или четверту частину години).-->
<!-- - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).-->
<!-- - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).-->
<!-- - Користувач вводить або має два числа.-->
<!--Потрібно знайти та вивести максимальне число з тих двох .-->
<!--Також потрібно врахувати коли введені рівні числа.-->

<!-- - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,-->
<!--за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)-->


<!-- - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".-->



////////////////////////////////////Exercise_1//////////////////////////////
let users = ['Mykola', 6, 'Petro', false, 'Ira', 9, 'Olya', true, 7, 'Dmytro'];
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);
console.log(users[7]);
console.log(users[8]);
console.log(users[9]);

////////////////////////////////////Exercise_2/////////////////////////////
const book1 = {
    title: 'Harry Potter',
    pageCount: 74,
    genre: 'fantastic'
};
const book2 = {
    title: 'Constitution of Ukraine',
    pageCount: 12,
    genre: 'law'
};
const book3 = {
    title: 'Chimera',
    pageCount: 7,
    genre: 'detective'
};
console.log(book1);
console.log(book2);
console.log(book3);

////////////////////////////////////Exercise_3////////////////////////
const book4 = {
    title: 'Sato',
    pageCount: 46,
    genre: 'thriller',
    authors: [
        {name: 'Rahim', age: 34}
    ]
};
const book5 = {
    title: 'Doctor cypher',
    pageCount: 8,
    genre: 'fantasy',
    authors: [
        {name: 'Roma', age: 29}
    ]
};
const book6 = {
    title: 'Gait',
    pageCount: 3,
    genre: 'fantasy',
    authors: [
        {name: 'Anna', age: 27}
    ]
};
console.log(book4);
console.log(book5);
console.log(book6);

///////////////////////////////////////Exercise_4////////////////////////////////////
let allUsers = [
    {name: 'Petro', username: 'petya23', password: 558521},
    {name: 'Katya', username: 'ketri19', password: 1439423},
    {name: 'Vasya', username: 'vaska24', password: 987627},
    {name: 'Ira', username: 'irka22', password: 2367522},
    {name: 'Kolya', username: 'kol4ik', password: 567525},
    {name: 'Olha', username: 'oli4ka23', password: 76678528},
    {name: 'Dima', username: 'dimon20', password: 143524},
    {name: 'Anya', username: 'anyutka18', password: 143429},
    {name: 'George', username: 'ge2223', password: 1434820},
    {name: 'Joni', username: 'joni1990', password: 7678567}
];

// for (const user of allUsers) {
//     console.log(user.password);
// }

console.log(allUsers[0]['password']);
console.log(allUsers[1]['password']);
console.log(allUsers[2]['password']);
console.log(allUsers[3]['password']);
console.log(allUsers[4]['password']);
console.log(allUsers[5]['password']);
console.log(allUsers[6]['password']);
console.log(allUsers[7]['password']);
console.log(allUsers[8]['password']);
console.log(allUsers[9]['password']);

/////////////////////////////////////////Exercise_5/////////////////////////////////////////////
let c = 34;
//     if (c !== 0) {
//     console.log('ВІРНО');
// } else {
//     console.log('НЕ ВІРНО');
// }
(c !== 0) ? console.log('ВІРНО') : console.log('НЕ ВІРНО');

/////////////////////////////////////////Exercise_6/////////////////////////////////////////////

const time = 56;
if (time > 0 && time <= 15) {
    console.log(1);
} else if (time > 15 && time <= 30) {
    console.log(2);
} else if (time > 30 && time <= 45) {
    console.log(3);
} else if (time > 45 && time <= 60) {
    console.log(4);
} else {
    console.log('??????????');
}

/////////////////////////////////////////Exercise_7/////////////////////////////////////////////

const day = 2;
if (day > 0 && day <= 10) {
    console.log(1);
} else if (day > 10 && day <= 20) {
    console.log(2);
} else if (day > 20 && day <= 31) {
    console.log(3);
} else {
    console.log('What?');
}

/////////////////////////////////////////Exercise_8/////////////////////////////////////////////


const dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('???????????');
}

/////////////////////////////////////////Exercise_9/////////////////////////////////////////////

let a = 4;
let b = 7;

if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else if (a === b) {
    console.log('rivni');
}

/////////////////////////////////////////Exercise_10/////////////////////////////////////////////

let x = 0;
let y = x || 'default';
console.log(y);

/////////////////////////////////////////Exercise_11/////////////////////////////////////////////

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log('Супер');
}


