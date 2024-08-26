function greet(name: string, age: number = 30): void {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet("James", 25);
greet("Ivan");
