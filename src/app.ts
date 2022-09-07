abstract class Department {
  constructor(
    private name: string,
    protected readonly id: string,
    protected employees: string[] = [] // protected like private but subclasses can use
  ) {}

  static createEmployee(name: string) {
    return { name: name }
  }

  abstract describe(this: Department): void

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

  describe(): void {
    console.log(`IT DEPARTMENT (ID: ${this.id})`)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment

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

  private constructor(id: string, private reports: string[]) {
    super('Accounting', id)
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('5', [])
    return this.instance
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

  describe(): void {
    console.log('Accounting Department - ID:' + this.id)
  }
}

const it = new ITDeparment('1', ['Max'])

it.addEmployee('Max')
it.addEmployee('Manu')

it.describe()
it.printEmployeeInformation()

// const accounting = new AccountingDepartment('3', [])
const accounting = AccountingDepartment.getInstance()

accounting.mostRecentReport = 'Year End Report'
accounting.addReport('Something went wrong...')
console.log(accounting.mostRecentReport)

accounting.addEmployee('Max')
accounting.addEmployee('Manuel')

// accounting.printReports()
// accounting.printEmployeeInformation()

accounting.describe()
