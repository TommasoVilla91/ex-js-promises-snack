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
            fetch(`https://dummyjson.com/users/` + obj.userId)
            .then(response => response.json())
            .then(user => {
                const resolve = {
                    ...obj,
                    user
                }
                result(resolve) 
            })
            .catch(reject)                       
        })
        .catch(reject)
    });
};

getPost(3)
.then(obj => console.log(obj))
.catch(error => console.error(error))

///// SNACK 2
function lanciaDado() {
    return new Promise((result, reject) => {
        setTimeout(() => {
            const value = Math.ceil(Math.random() * 6);
            if(Math.floor(Math.random() * 5)) {
                result
            } else {
                reject
            }
        }, 3000);
    });
};

lanciaDado()