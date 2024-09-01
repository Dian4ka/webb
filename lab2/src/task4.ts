// Абстрактний клас Employee
abstract class Employee {
  protected name: string;
  protected age: number;
  protected salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  abstract getAnnualBonus(): number;
}

interface Payable {
  pay(): void;
}

class Developer extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  getAnnualBonus(): number {
    return this.salary * 0.1;
  }

  pay(): void {
    console.log(`${this.name} has been successfully paid`);
  }
}

class Manager extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  getAnnualBonus(): number {
    return this.salary * 0.2;
  }

  pay(): void {
    console.log(`${this.name} has been successfully spaid`);
  }
}

const employees: (Employee & Payable)[] = [
  new Developer("Ivan", 34, 55000),
  new Developer("Vik", 54, 46000),
  new Manager("Ross", 23, 87000),
  new Manager("Cris", 30, 67000),
];

let totalAnnualBonus = 0;

for (const employee of employees) {
  totalAnnualBonus += employee.getAnnualBonus();
}

console.log(`Sum of annual Bonus: ${totalAnnualBonus}`);

for (const employee of employees) {
  employee.pay();
}
