
const promise1 = new Promise((resolve, reject) => {
    console.log('promise is made');
    resolve()
})

promise1
.then(responsive => {
    console.log('this is response block');
})