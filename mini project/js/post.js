// На сторінці post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули.
// 8 Нижче інформації про пост, вивести всі коментарі поточного поста (ендпоінт - https://jsonplaceholder.typicode.com/posts/POST_ID/comments).

const url = new URL(location.href);
const postId = url.searchParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {
        const wrap = document.getElementsByClassName('wrapper-3')[0];
        const p = document.createElement('p');
        p.innerText = `${post.body}`;
        wrap.appendChild(p);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(comments => {
                const list = document.createElement('ul');
                for (const comment of comments) {
                    const item = document.createElement('li');
                    item.innerText = `${comment.body}. ${comment.email}`;
                    list.appendChild(item);
                    wrap.appendChild(list);
                }
            })
    })
