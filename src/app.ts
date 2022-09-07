class Department {
  constructor(private name: string) {}

  describe(this: Department) {
    console.log(`Department Name: ${this.name}`)
  }
}

const accounting = new Department('Accounting')
accounting.describe()

const accountingCopy = { describe: accounting.describe }
