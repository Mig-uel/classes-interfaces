interface Greetable {
  // how an object should look like | custom type
  // share functionality among different classes
  readonly name: string

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
