var age = 10; // int
var salary = 15.00; // double

const displayGreeting = function(name, year) {
    console.log(`Happy New Year ${year} ${name}`);
}

const displayGreetingEmoji = function(name, year) {
    console.log(`:) :) Happy New Year ${year} ${name} :) :)`);
}

var greet = {};

if (age > 10) {
    greet = displayGreeting;
}
else {
    greet = displayGreetingEmoji;
}

greet('Sam', 2022);