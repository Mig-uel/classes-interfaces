"use strict";
let add;
add = (n1, n2) => n1 + n2;
class Person {
    constructor(name) {
        this.name = name;
        this.age = 30;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1;
user1 = new Person('Miguel');
user1.greet('Hi there I am');
console.log(user1);
