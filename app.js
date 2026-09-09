class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  gitInfo() {
    return `my name is ${this.name} && ${this.age}`;
  }
}

const person = new Person("Amir.FF", 22);

console.log(person.gitInfo());
