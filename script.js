///// SNACK 1
function getPostTitle(id) {
    return new Promise((result, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(obj => result(obj))
        .catch(reject)
    });
};

getPostTitle(2)
.then(obj => console.log(obj.title))
.catch(error => console.error(error))

// BONUS 1
function getPost(id) {
    return new Promise((result, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(obj => {
            console.log(obj.userId)
            return fetch(`https://dummyjson.com/users/` + obj.userId)
            .then(response => response.json())
            .then(user => result(user))
            .catch(reject)
        });
    });
};

getPost(3)
.then(user => console.log(user))
.catch(error => console.error(error))