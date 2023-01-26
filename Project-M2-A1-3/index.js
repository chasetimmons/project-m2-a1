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

/////////////////////////////////////////////////

//const fullName = function (fName, mName, lName) {
//    return `${lName}, ${fName} ${mName}`;
//}

const fullName = (fName, mName, lName) => `${lName}, ${fName} ${mName}`;

const titleName = fullName('Mary', 'R', 'Jane');

console.log(titleName);