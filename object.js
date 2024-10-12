const obj = {
    name: 'hello',
    age: 42,
    address: 'rajshahi',
    nest:{
        city: 'chandpur'
    }
}

const {age,nest,...rest} = obj;
console.log(nest.city);

// const obj2 = {...obj};
// obj2.phone = 59466
// console.log(obj2);
// console.log(obj);

// const {age:myAge} = obj;
// console.log(myAge);