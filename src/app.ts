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
  private lastReport: string

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found!')
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value!')
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    super('Accounting', id)
    this.lastReport = reports[0]
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
    this.lastReport = text
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

accounting.mostRecentReport = 'Year End Report'
accounting.addReport('Something went wrong...')
console.log(accounting.mostRecentReport)

accounting.printReports()

accounting.addEmployee('Max')
accounting.addEmployee('Manuel')

accounting.printReports()
accounting.printEmployeeInformation()
