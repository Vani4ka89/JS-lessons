let url = new URL(location.href);
let userId = url.searchParams.get('user_id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {

        function getInfo(user) {
            for (const key in user) {
                if (typeof user[key] === 'object') {
                    getInfo(user[key])
                } else {
                    const infoBox = document.getElementsByClassName('box-info')[0];
                    const list = document.createElement('ul');
                    const item = document.createElement('li');
                    item.innerText = `${key}: ${user[key]}`;
                    list.appendChild(item);
                    infoBox.appendChild(list);
                }
            }
        }

        getInfo(user);


    })