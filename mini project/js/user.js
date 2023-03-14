// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули.
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера.
// (для отримання постів використовуйте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts).
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const url = new URL(location.href);
const userId = url.searchParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then(posts => {
            const wrap = document.getElementsByClassName('wrapper')[0];
            const btn = document.createElement('button');
            btn.innerText = 'post of current user';
            const list = document.createElement('ul');
            wrap.append(btn, list);

            const showPosts = function () {
                for (const post of posts) {
                    const item = document.createElement('li');
                    item.innerText = `${post.title}`;
                    const a = document.createElement('a');
                    a.innerText = 'Detail';
                    a.href = `post-details.html?postId=${post.id}`;
                    list.append(item, a);
                }
            btn.removeEventListener('click', showPosts);
            }
            btn.addEventListener('click', showPosts);
        })