class Department {
  constructor(
    private name: string,
    private readonly id: string,
    protected employees: string[] = [] // protected like private but subclasses can use
  ) {}

  describe(this: Department): void {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string): void {
    this.employees.push(employee)
  }

  printEmployeeInformation(): void {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDeparment extends Department {
  constructor(id: string, public admins: string[]) {
    super('IT', id)
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super('Accounting', id)
  }

  addEmployee(name: string): void {
    // override parent class
    if (name === 'Max') {
      return
    }

    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDeparment('1', ['Max'])

it.addEmployee('Max')
it.addEmployee('Manu')

it.describe()
it.printEmployeeInformation()

const accounting = new AccountingDepartment('3', [])

accounting.addReport('Something went wrong...')
accounting.printReports()

accounting.addEmployee('Max')
accounting.addEmployee('Manuel')

accounting.printReports()
accounting.printEmployeeInformation()
