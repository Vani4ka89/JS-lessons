let url = new URL(location.href);
let usData = url.searchParams.get('user');
let user = JSON.parse(usData);
console.log(user);

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
.then(value => value.json())
.then(value => {
    console.log(value);
})