// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули.
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера.
// (для отримання постів використовуйте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts).
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let userInfo = url.searchParams.get('user');
let user = JSON.parse(userInfo);
console.log(user);

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            console.log(posts);
            let wrap = document.getElementsByClassName('wrapper')[0];
            let btn = document.createElement('button');
            btn.innerText = 'post of current user';
            let list = document.createElement('ul');
            wrap.append(btn, list);
            btn.addEventListener('click', function () {
                for (const post of posts) {
                    let item = document.createElement('li');
                    item.innerText = `${post.title}`;
                    let a = document.createElement('a');
                    a.innerText = 'Detail';
                    a.href = `post-details.html?postId=${post.id}`;
                    list.append(item, a);
                }
            })

        })