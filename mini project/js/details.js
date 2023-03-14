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
        const userInfo = [];

        function getInfoFromUser(user) {
            for (const key in user) {
                if (typeof user[key] === 'object') {
                    getInfoFromUser(user[key]);
                } else {
                    userInfo.push(`${key}: ${user[key]}`);
                }
            }
        }

        getInfoFromUser(user);
        console.log(userInfo);

        const wrap = document.getElementsByClassName('wrapper-2')[0];
        for (const info of userInfo) {
            const infoBlock = document.createElement('div');
            infoBlock.classList.add('info-block');
            infoBlock.innerText = `${info}`;
            wrap.appendChild(infoBlock);
        }

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(posts => {
                const btn = document.createElement('button');
                btn.innerText = 'post of current user';
                const list = document.createElement('ul');
                wrap.append(btn, list);

                const showPosts = function () {
                    for (const post of posts) {
                        const item = document.createElement('li');
                        item.innerText = `${post.title}`;
                        const a = document.createElement('a');
                        a.innerText = 'detail';
                        a.href = `post-details.html?postId=${post.id}`;
                        list.append(item, a);
                    }
                    // btn.removeEventListener('click', showPosts);
                    btn.style.display = 'none';
                }
                btn.addEventListener('click', showPosts);

            })
    })
