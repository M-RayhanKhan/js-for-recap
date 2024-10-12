// const numbers = [12, 89, 65];

// const numbers2 = [...numbers];
// numbers2.push(66)
// numbers.push(77)

// console.log(numbers);
// console.log(numbers2);

const numbers = [5,6,7,8,9,55,66];
const [x,y,...z] = numbers;
console.log(z);