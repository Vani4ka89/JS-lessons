// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a, b) => a * b;
console.log(square(12, 3));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circleSquare = (r) => Math.PI * r ** 2;
console.log(circleSquare(3));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinderSquare = (h, r) => {
    return (2 * Math.PI * r ** 2) + (2 * Math.PI * r * h);
}
console.log(cylinderSquare(2, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент
let someArray = (array) => {
    for (const item of array) {
        console.log(item);
    }
}
someArray([11, 22, 33, true]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const parCreator = (text) => {
    document.write(`<p>${text}</p>`);
}
parCreator('Lorem ipsum');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const listCreator = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
listCreator('Lorem ipsum ok go');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const listCreator2 = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
listCreator2('Lorem  ok', 8);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [11, 33, true, 'wait', false];
const primitiveElements = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
primitiveElements(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const objectsArray = [
    {id: 3, name: 'Oleg', age: 23},
    {id: 2, name: 'Petro', age: 20},
    {id: 1, name: 'Misha', age: 28}
]
const arrayOfObjects = (arr) => {
    for (const item of arr) {
        document.write(`<div>${item['id']} -- ${item['name']} -- ${item['age']}</div>`);
    }
}
arrayOfObjects(objectsArray);
// - створити функцію яка повертає найменьше число з масиву
let array2 = [2, -1, 4, 54, -5, 76, -23];
let minNumber = (arr) => {
    let min = arr[0];
    for (const item of arr) {
        if (min > item) {
            min = item;
        }
    }
    return min;
}
console.log(minNumber(array2));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let result = 0;
    for (const item of arr) {
        result += item;
    }
    return result;
}
console.log(sum([2, 5, 33, 11]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr,index1,index2) => {
    let changeNum = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = changeNum;
    return arr;
}
console.log(swap([11, 22, 33, 44], 1, 3));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
           return  sumUAH / item.value;
        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));