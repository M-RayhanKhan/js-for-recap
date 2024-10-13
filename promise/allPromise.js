const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result of promise=>1');
    }, 1000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('result of promise=>2');
        reject('rejected from 2')
    }, 1000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result of promise=>3');
    }, 1000);
})

console.log('calling 3 async task');

// promise1.then((response => {
//     console.log(response);
//     promise2.then((response =>{
//         console.log(response);
//         promise3.then((response) =>{
//             console.log(response);
//         })
//     }))
// }))

const getAllpromise = async () => {
    const result = await Promise.all([promise1, promise2, promise3]);
    console.log(result);
}


Promise.all([promise1,promise2, promise3])
.then(values =>{
    console.log(values);
})
.catch(error => console.log(error)) 