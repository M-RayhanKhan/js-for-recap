
const promise1 = new Promise((resolve, reject) => {
    console.log('promise is made');
   setTimeout(() =>{
    const error = true;
    if (!error) {
     resolve('promise is resolve')
    }else{
     reject('Oppss.. Error happend')
    }
   }, 1000)
})

const getPromise = async () =>{
   try{
    const response = await promise1;
    console.log(response);
   }
   catch(error){
    console.log(error);
   }
   finally{
    console.log('finally code is run');
   }
}
getPromise()

// promise1
// .then(responsive => {
//     console.log(responsive);
// })
// .catch(error => {
//     console.log(error);
// })
// .finally(() =>{
//     console.log('finally block run');
// })