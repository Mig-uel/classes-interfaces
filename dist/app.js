"use strict";
// Function Type
// type AddFn = (a: number, b: number) => number
let add;
add = (n1, n2) => n1 + n2;
class Person {
    constructor(name) {
        this.name = name;
        // can implement multiple interfaces
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
