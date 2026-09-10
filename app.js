class Person {
  static color = "blue static";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  gitInfo() {
    return `my name is ${this.name} && ${this.age} && color ${this.color} && ${Person.color}`;
  }

  static sayHello() {
    return "hello would";
  }

  get logName() {
    return `name: ${this.name}`;
  }

  set isAge(age) {
    if (this.age <= 21) {
      throw new Error();
    }
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  sleep() {
    return "I am sleeping now!";
  }
}

const person = new Person("Amir.FF", 22);
const student = new Student("Amir.FFE", 17, "red");

person.isAge = 25;

console.log(person.age);
