interface Animal {
  name: string;
  age: number;
  move(): void;
  jump?(): void;
  sing?(): void;
}

class Cat implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  move(): void {
    console.log(`${this.name} ходить.`);
  }

  jump(): void {
    console.log(`${this.name} стрибає`);
  }
}
class Bird implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  move(): void {
    console.log(`${this.name} літає в небі`);
  }

  sing(): void {
    console.log(`${this.name} співає`);
  }
}
class Fish implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  move(): void {
    console.log(`${this.name} рухається в водоймі`);
  }

  swim(): void {
    console.log(`${this.name} плаває в водоймі`);
  }
}

const myCat = new Cat("cat", 4);
const myBird = new Bird("bird", 2);
const myFish = new Fish("fish", 5);

myCat.move();
myCat.jump();

myBird.move();
myBird.sing();

myFish.move();
myFish.swim();
