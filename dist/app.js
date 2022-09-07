"use strict";
class Department {
    constructor(name, id, employees = [] // protected like private but subclasses can use
    ) {
        this.name = name;
        this.id = id;
        this.employees = employees;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDeparment extends Department {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
    }
    describe() {
        console.log(`IT DEPARTMENT (ID: ${this.id})`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super('Accounting', id);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found!');
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('Please pass in a valid value!');
        this.addReport(value);
    }
    addEmployee(name) {
        // override parent class
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log('Accouting Deparment - ID:' + this.id);
    }
}
const it = new ITDeparment('1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInformation();
const accounting = new AccountingDepartment('3', []);
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manuel');
// accounting.printReports()
// accounting.printEmployeeInformation()
accounting.describe();
