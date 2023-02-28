// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
const arrWithUsers = [
    new User(1, 'Petro', 'Bomok', 'p@mail.com', '0983764565'),
    new User(2, 'kolya', 'Rudik', 'kol@gmail.com', '0983434565'),
    new User(3, 'dima', 'Shupa', 'dim@gmail.com', '0983238765'),
    new User(4, 'olga', 'Vityk', 'ol@gmail.com', '0983134565'),
    new User(5, 'lilya', 'Gutsal', 'li@gmail.com', '0983324565'),
    new User(6, 'Sofiya', 'Vovk', 'sofi@gmail.com', '0989934565'),
    new User(7, 'oleg', 'Botan', 'leg@gmail.com', '0983253565'),
    new User(8, 'Dana', 'Kvitka', 'dana@gmail.com', '0983209565'),
    new User(9, 'Nina', 'Chaban', 'nino@gmail.com', '09832316565'),
    new User(10, 'Ivan', 'Tymko', 'van@gmail.com', '0983284565')
];
console.log(arrWithUsers);


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(arrWithUsers.filter(u => u.id % 2 === 0)); // !(u.id % 2)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(arrWithUsers.sort((uA, uB) => uA.id - uB.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        User.call(this, id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

const clients = [
    new Client(1, 'Petro', 'Bomok', 'p@mail.com', '0983764565', ['банан', 'апельсин', 'lime', 'мандарин']),
    new Client(2, 'kolya', 'Rudik', 'kol@gmail.com', '0983434565',['картопля', 'чіпси']),
    new Client(3, 'dima', 'Shupa', 'dim@gmail.com', '0983238765', ['молоко', 'сир']),
    new Client(4, 'olga', 'Vityk', 'ol@gmail.com', '0983134565',['вода', 'пиво', 'сік', 'vine', 'whisky']),
    new Client(5, 'lilya', 'Gutsal', 'li@gmail.com', '0983324565',['milk', 'яйця']),
    new Client(6, 'Sofiya', 'Vovk', 'sofi@gmail.com', '0989934565', ['chocolate', 'meat', 'макарони']),
    new Client(7, 'oleg', 'Botan', 'leg@gmail.com', '0983253565', ['буряк', 'сметана']),
    new Client(8, 'Dana', 'Kvitka', 'dana@gmail.com', '0983209565', ['ручка', 'зошит', 'олівець']),
    new Client(9, 'Nina', 'Chaban', 'nino@gmail.com', '09832316565', ['хліб', 'булка']),
    new Client(10, 'Ivan', 'Tymko', 'van@gmail.com', '0983284565', ['ковбаса', 'sausages'])
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((clientA, clientB) => clientB.order.length - clientA.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car (model, prodCompany, year, maxSpeed, vEngine) {
    this.model = model;
    this.prodCompany = prodCompany;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.vEngine = vEngine;
    this.drive = function () {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    }
    this.info = function () {

    }
    this.increaseMaxSpeed = function (newSpeed) {

    }
    this.changeYear = function (year) {

    }
    this.addDriver = function (driver) {

    }
}

const cars = new Car('accord', 'honda', '2015', 280, 3500)
console.log(cars);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class Auto {
    constructor(model, prodCompany, year, maxSpeed, vEngine) {
        Car.call(this, model, prodCompany, year, maxSpeed, vEngine)
    }
}

const auto = new Auto('A4', 'audi', 2011, 260, 2000);
console.log(auto);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// Footer