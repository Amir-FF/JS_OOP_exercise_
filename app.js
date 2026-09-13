class Person {
  static color = "blue static";

  #num = 2;

  constructor(name, age, number = 0, count = 1) {
    this.name = name;
    this.age = age;
    this.number = number;
    this.count = count;
  }

  #gitInfo() {
    return `my name is ${this.name} && ${this.age} && color ${this.color} && ${Person.color} `;
  }

  gitInfoUpdate(car = "pride", model = 98) {
    this.#num = 4;

    console.log(
      this.#gitInfo() +
        `&& number private ${this.#num} && car: ${car}, model: ${model}`,
    );
  }

  timer() {
    setTimeout(() => {
      console.log(this.number);
    }, 1000);
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

const myobj = {
  color: "red",
};

const person = Object.create(myobj);
person.name = "Amir";
person.age = 22;

console.log(Object.getPrototypeOf(person));
console.log(Object.setPrototypeOf(person, { color: "blue" }));
