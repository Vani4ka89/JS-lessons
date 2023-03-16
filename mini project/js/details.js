// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули.
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера.
// (для отримання постів використовуйте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts).
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const url = new URL(location.href);
const userId = url.searchParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {
        console.log(user);
        const mainBlock = document.getElementsByClassName('wrapper-2')[0];

        function getInfoFromUser(user) {
            for (const key in user) {
                if (typeof user[key] === 'object') {
                    getInfoFromUser(user[key]);
                } else {
                    const infoBlock = document.createElement('div');
                    infoBlock.classList.add('info-block');
                    infoBlock.innerText = `${key}: ${user[key]}`;
                    mainBlock.appendChild(infoBlock);
                }
            }
        }

        getInfoFromUser(user);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(posts => {
                const titles = document.getElementsByClassName('post-block')[0];
                const container = document.getElementsByClassName('container')[0];
                const list = document.createElement('ul');
                list.classList.add('list');
                const btn = document.createElement('button');
                btn.innerText = 'posts of current user';

                container.appendChild(btn);
                titles.appendChild(list);

                const showPosts = function () {
                    for (const post of posts) {
                        const item = document.createElement('li');
                        item.innerText = `${post.title}`;
                        const a = document.createElement('a');
                        a.innerText = 'details';
                        a.href = `post-details.html?postId=${post.id}`;
                        list.appendChild(item);
                        item.appendChild(a);
                    }
                    // btn.removeEventListener('click', showPosts);
                    btn.style.display = 'none';
                }
                btn.addEventListener('click', showPosts);

            })
    })
