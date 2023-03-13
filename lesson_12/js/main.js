// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)


fetch('http://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users => {
    console.log(users);
    let list = document.createElement('ul');
    let wrap = document.getElementsByClassName('wrapper')[0];
    wrap.appendChild(list);
    for (const user of users) {
        let item = document.createElement('li');
        item.innerText = `${user.id}. ${user.name}`;
        let a = document.createElement('a');
        a.innerText = 'Details';
        a.href = `user-details.html?user=${JSON.stringify(user)}`;
        list.append(item, a);
    }
})