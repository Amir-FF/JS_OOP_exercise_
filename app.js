class Person {
  static color = "blue static";

  #num = 2;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  #gitInfo() {
    return `my name is ${this.name} && ${this.age} && color ${this.color} && ${Person.color} `;
  }

  gitInfoUpdate(car = "pride", model = 98) {
    this.#num = 4;
    return (
      this.#gitInfo() +
      `&& number private ${this.#num} && car: ${car}, model: ${model}`
    );
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

const pInfo = person.gitInfoUpdate;
const newFac = person.gitInfoUpdate.bind(person);

console.log(pInfo.call(person, "sarina", 95));
console.log(pInfo.apply(person, ["tiba", 99]));
console.log(newFac("samand", 90));
