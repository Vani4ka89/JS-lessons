let url = new URL(location.href);
let userId = url.searchParams.get('user_id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {
        console.log(user);
        const infoWithUser = [];

        function getInfo (user) {
            for (const key in user) {
                if (typeof user[key] === 'object') {
                    getInfo(user[key])
                } else {
                    infoWithUser.push(`${key}: ${user[key]}`)
                }
            }
        }
        getInfo(user);
        console.log(infoWithUser);

        const infoBox = document.getElementsByClassName('box-info')[0];
        const list = document.createElement('ul');
        infoBox.appendChild(list);
        for (const info of infoWithUser) {
            const item = document.createElement('li');
            item.innerText = `${info}`;
            list.appendChild(item);
        }

    })