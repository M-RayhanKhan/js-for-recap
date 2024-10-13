const getPromise = (name) =>{
        return new Promise((resolve, reject) => {
            console.log(`Hello ${name} your promise is made`);
            const error = false;
        setTimeout(() =>{
            if (!error) {
                resolve(`${name} your promise is resolve`)
            }else{
                reject(`Oppss ${name} error happend`)
            }
        }, 1000)
        })
}

getPromise('Mehedy')
.then(res => {
    console.log(res);
})
.catch(error => {
    console.log(error);
})