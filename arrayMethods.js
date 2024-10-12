// forEach, map, find, fitter

const numbers = [10,9,3,5,89,65,100];
// for(let i =0 ; i< numbers.length; i++)
//     console.log(numbers[i]);

// numbers.forEach(item =>{
//     console.log(item * 2);
// })

// const result = numbers.map((num, index) => {
//     console.log('item ',num, "index", index);
//     return num * 2;
// });
// console.log(result);

// const result = numbers.find((items) => items > 10)
// console.log(result);

// const result = numbers.filter(item => item < 10);
// console.log(result);

// const result = numbers.reduce((prev, curr) => prev + curr, 0);
// console.log(result);

const products = [
    {price:1},
    {price:2},
    {price:3},
    {price:4}
]

const result = products.reduce((prev, current)=> prev + current.price , 0);
console.log(result);