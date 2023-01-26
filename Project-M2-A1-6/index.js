var age = 10; // int
var salary = 15.00; // double

const displayGreeting = function(name, year) {
    console.log(`Happy New Year ${year} ${name}`);
}

const displayGreetingEmoji = function(name, year) {
    console.log(`:) :) Happy New Year ${year} ${name} :) :)`);
}

const greet = function(name, year, func) {
    func(name, year);
}

greet('Sam', 2022, displayGreetingEmoji);
greet('Jan', 2021, displayGreeting);