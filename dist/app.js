"use strict";
class Department {
    constructor(name, id, employees = []) {
        this.name = name;
        this.id = id;
        this.employees = employees;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
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
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super('Accounting', id);
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDeparment('1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInformation();
const accounting = new AccountingDepartment('3', []);
accounting.addReport('Something went wrong...');
accounting.printReports();
