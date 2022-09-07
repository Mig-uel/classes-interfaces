// Function Type
// type AddFn = (a: number, b: number) => number

interface AddFn {
  (a: number, b: number): number
}

let add: AddFn
add = (n1: number, n2: number) => n1 + n2

interface Named {
  readonly name: string

  // optional properties
  outputName?: string
}

interface Greetable extends Named {
  // how an object should look like | custom type
  // share functionality among different classes
  greet: (phrase: string) => void
} // used to type check an object that must have specific structure

class Person implements Greetable {
  // can implement multiple interfaces
  private age = 30

  constructor(readonly name: string) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  }
}

let user1: Greetable
user1 = new Person('Miguel')

user1.greet('Hi there I am')
console.log(user1)
