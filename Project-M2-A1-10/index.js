var students = [];

var student1 = {
    name: 'Joan Smith',
    birthYear: 2002,
    course: 'IFT 458',
    grade: 90,
    active: true,
    age: function() {
        if (this.active) {
            return 2022 - this.birthYear;
        }
        else {
            return 0;
        }
    }
}

var student2 = {
    name: 'Sammy Hagar',
    birthYear: 2000,
    course: 'IFT 458',
    grade: 87,
    active: false,
    age: function() {
        if (this.active) {
            return 2022 - this.birthYear;
        }
        else {
            return 0;
        }
    }
}

students.push(student1);
students.push(student2);
students.forEach(item => console.log(item.age()));
console.log(students);

// age: ()=> 2022 - this.birthYear;
// will not work above because lambda cannot reference 'this'

//console.log(student1['name']);
//console.log(student1.name);
//console.log(student1.age());
//console.log(student2.age());