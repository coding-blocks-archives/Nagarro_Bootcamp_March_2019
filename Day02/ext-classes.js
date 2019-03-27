class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  isAdult() {
    return this.age >= 18
  }
}


class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }
  // This overrides the one from Person
  isAdult() {
    return false
  }

}


let p = new Person('John', 20)
let s = new Student('Jane', 30, 3)
