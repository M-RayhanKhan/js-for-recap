const person = {
    name: 'shorif',
    age: 25,
    isStudent:true,
    // details:'this is details'
}
// if (person.isStudent) {
//     console.log('he is a student');
// }else{
//     console.log('he is not student');
// }

// let sentence = person.isStudent ? "he is a student" : "he is not student";
// console.log(sentence);

// console.log(person.isStudent && 'he is a Student');
// console.log(person.name || 'N/A');
const details = person?.details || "N/A";
console.log(details);