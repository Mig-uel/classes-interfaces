class Department {
  constructor(private name: string, private employees: string[] = []) {}

  describe(this: Department): void {
    console.log(`Department Name: ${this.name}`)
  }

  addEmployee(employee: string): void {
    this.employees.push(employee)
  }

  printEmployeeInformation(): void {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('Accounting')

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.describe()
accounting.printEmployeeInformation()
