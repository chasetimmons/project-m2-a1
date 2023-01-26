// Named Function
//function greetStudent(studentName) {
//    return `Hello there ${studentName}`;
//}

// Anonymous Function
//const greetStudent = function (studentName) {
//    return `Hello there ${studentName}`;
//}

// Fat Arrow Function
const greetStudent = studentName => `Hello there ${studentName}`;

const student = 'John Smith';

const greet = greetStudent(student);

console.log(greet);