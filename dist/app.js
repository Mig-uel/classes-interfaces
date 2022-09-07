"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log(`Department Name: ${this.name}`);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
const accountingCopy = { describe: accounting.describe };
