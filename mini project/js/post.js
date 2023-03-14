// На сторінці post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули.
// 8 Нижче інформації про пост, вивести всі коментарі поточного поста (ендпоінт - https://jsonplaceholder.typicode.com/posts/POST_ID/comments).

let url = new URL(location.href);
let postId = url.searchParams.get('postId');
console.log(postId);


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {
        console.log(post);
        let wrap = document.getElementsByClassName('wrapper')[0];
        let p = document.createElement('p');
        p.innerText = `${post.body}`;
        wrap.appendChild(p);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(comments => {
                console.log(comments);

                let list = document.createElement('ul');
                for (const comment of comments) {
                    let item = document.createElement('li');
                    item.innerText = `${comment.body}. ${comment.email}`;
                    list.appendChild(item);
                    wrap.appendChild(list);
                }
            })
    })
