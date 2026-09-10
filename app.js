class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  gitInfo() {
    return `my name is ${this.name} && ${this.age} && color ${this.color}`;
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

console.log(student.gitInfo());
