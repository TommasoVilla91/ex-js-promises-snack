///// SNACK 1
function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(obj => resolve(obj))
        .catch(reject)
    });
};

getPostTitle(2)
.then(obj => console.log(obj.title))
.catch(error => console.error(error))

// BONUS 1
function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(obj => {
            console.log(obj.userId)
            fetch(`https://dummyjson.com/users/` + obj.userId)
            .then(response => response.json())
            .then(user => {
                const result = {
                    ...obj,
                    user
                }
                resolve(result) 
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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // variabile per casistica incastramento dado
            const isStuck = Math.random() < 0.2;

            // se si incastra reject
            if(isStuck) {
                reject('Dado incastrato... Riprova')

            // altrimenti da il risultato
            } else {
                const value = Math.ceil(Math.random() * 6);
                resolve(value);
            }
        }, 3000);
    });
};

lanciaDado()
.then(resolve => console.log(resolve))
.catch(err => console.error(err))