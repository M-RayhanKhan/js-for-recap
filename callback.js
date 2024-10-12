// const fun1 = (x,y,callBack) =>{
//     console.log('hello from js');
//     console.log(typeof callBack);
//     console.log(callBack(x,y));
// }

// const fun2 = (x,y) =>{
// return x + y
// }

// fun1(4,5,fun2)

const giveName = (name, callBack) =>{
 setTimeout(() =>{
    callBack(name)
 })
}

const greeting = (name) =>{
    console.log(`Hello ${name}...!`);
}

giveName('NurHossain', greeting)