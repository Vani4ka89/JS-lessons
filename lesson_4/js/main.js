// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function figure(a, b) {
    return a * b;
}

console.log(figure(7, 6));
console.log(figure(3, 9));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function getCircleSquare(r) {
    return Math.PI * r * r;
}

console.log(getCircleSquare(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function getCylinderSquare(h, r) {
    return (2 * Math.PI * r * r) + (2 * Math.PI * r * h);
}

console.log(getCylinderSquare(3, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let usersMy = [
    {name: 'vasya', age: 32, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

function getArr(array) {
    for (const user of array) {
        console.log(user);
    }
}

getArr(usersMy);
getArr(coursesAndDurationArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createText(text) {
    document.write(`<p>${text}</p>`);
}

createText('stop');
createText('go');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list1(text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list1('go');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list(num, text) {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list(8, 'go away');
list(3, 'lorem ipsum');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function buildList (array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}

buildList([23, 'go', 54, true, false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let myUsers = [
    {name: 'Oleg', age: 31, id: false},
    {name: 'petya', age: 30, id: true},
    {name: 'kolya', age: 29, id: true},
];
function turnInDocument (arrayOfObjects) {
    for (let block of arrayOfObjects) {
        document.write(`<div>${block['name']} ${block['age']} ${block['id']}</div>`);
    }
}
turnInDocument(myUsers);
// - створити функцію яка повертає найменьше число з масиву

let num = [3, 5, 8, 1, -9];
function minNum(array) {
    let min = array[0];
    for (const number of array) {
        if (min > number) {
            min = number;
        }
    }
    return min;
}

console.log(minNum(num));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let box = 0;
    for (let item of arr) {
        box += item;
    }
    return box;
}

console.log(sum([3, 7, 8, 2]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr;
}

console.log(swap([5, 6, 8, 9], 3, 0));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange (sumUAH, currencyValues, exchangeCurrency) {
//     if (exchangeCurrency === 'USD') {
//         let money = currencyValues;
//         return money;
//     }
// }
//
//
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');

function exchange (sumUAN, currencyValues, exchangeCurrency) {
    for (const item of currencyValues) {
        if (item['currency'] === exchangeCurrency) {
            return  sumUAN / item['value'];
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));