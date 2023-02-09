// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a = 'hello';
console.log(a);
let b = 'owu';
console.log(b);
let c = 'com';
console.log(c);
const d = 'ua';
console.log(d);
let num_1 = 1;
console.log(num_1);
let num_2 = 10;
console.log(num_2);
let num_3 = -999;
console.log(num_3);
const PI = 3.14;
console.log(PI);
let num_4 = 2.7;
console.log(num_4);
let num_5 = 16;
console.log(num_5);
const status = true;
console.log(status);
const done = false;
console.log(done);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

const firstName = 'Ivan';
const middleName = 'Vasylovych';
const lastName = 'Tymchak';
let person = `${firstName}  ${middleName}  ${lastName}`;
console.log(person);
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let i = 100; let j = '100'; let y = true;
console.log(typeof i);
console.log(typeof j);
console.log(typeof y);

//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter your name')
console.log(name);
let myMiddleName = prompt('Enter your middleName')
console.log(myMiddleName);
let age = +prompt('Enter your age')
console.log(age);
