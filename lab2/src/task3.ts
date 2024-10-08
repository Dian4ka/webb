abstract class Car {
  protected make: string;
  protected model: string;
  private year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  abstract displayInfo(): void;

  protected getYear(): number {
    return this.year;
  }
}

class Nissan extends Car {
  private color: string;

  constructor(model: string, year: number, color: string) {
    super("Nissan", model, year);
    this.color = color;
  }

  displayInfo(): void {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.getYear()}`);
    console.log(`Color: ${this.color}`);
  }
}

class Tesla extends Car {
  private engineType: string;

  constructor(model: string, year: number, engineType: string) {
    super("Tesla", model, year);
    this.engineType = engineType;
  }

  displayInfo(): void {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.getYear()}`);
    console.log(`Engine Type: ${this.engineType}`);
  }
}

class Audi extends Car {
  private isElectric: boolean;

  constructor(model: string, year: number, isElectric: boolean) {
    super("Audi", model, year);
    this.isElectric = isElectric;
  }

  displayInfo(): void {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.getYear()}`);
    console.log(`Electric: ${this.isElectric ? "Yes" : "No"}`);
  }
}

const nissanLeaf = new Nissan("leaf", 2020, "Red");
const nissalRog = new Nissan("rogue", 2021, "Blue");

const teslaX = new Tesla("Model X", 2022, "electric");
const teslaS = new Tesla("Model S", 2023, "electric");

const audiA3 = new Audi("A3", 2024, true);
const audiQ7 = new Audi("Q7", 2022, false);

console.log("Nissan Cars:");
nissanLeaf.displayInfo();
nissalRog.displayInfo();

console.log("\nTesla Cars:");
teslaX.displayInfo();
teslaS.displayInfo();

console.log("\nAudi Cars:");
audiA3.displayInfo();
audiQ7.displayInfo();
