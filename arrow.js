//  function show(){
//     console.log('normal function');
//  }

//  const show = () =>{
//     console.log('arrow function');
//  }

//  const show1 = () =>{
//     return('arrow function');
//  }
//  const show2 = (x) =>{
//     return('value', x);
//  }



//  show()


const addArray = (numbers) => {
    if (!Array.isArray(numbers)) {
        console.log('invalid array');
    }
    let sum = 0;
    for (const number of numbers)
        sum += number
    return sum;
}

const numbers = [1, 2, 3];
console.log(addArray(numbers));