var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
var Nissan = /** @class */ (function (_super) {
    __extends(Nissan, _super);
    function Nissan(model, year, color) {
        var _this = _super.call(this, "Nissan", model, year) || this;
        _this.color = color;
        return _this;
    }
    Nissan.prototype.displayInfo = function () {
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.getYear()));
        console.log("Color: ".concat(this.color));
    };
    return Nissan;
}(Car));
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(model, year, engineType) {
        var _this = _super.call(this, "Tesla", model, year) || this;
        _this.engineType = engineType;
        return _this;
    }
    Tesla.prototype.displayInfo = function () {
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.getYear()));
        console.log("Engine Type: ".concat(this.engineType));
    };
    return Tesla;
}(Car));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(model, year, isElectric) {
        var _this = _super.call(this, "Audi", model, year) || this;
        _this.isElectric = isElectric;
        return _this;
    }
    Audi.prototype.displayInfo = function () {
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.getYear()));
        console.log("Electric: ".concat(this.isElectric ? "Yes" : "No"));
    };
    return Audi;
}(Car));
var nissanLeaf = new Nissan("leaf", 2020, "Red");
var nissalRog = new Nissan("rogue", 2021, "Blue");
var teslaX = new Tesla("Model X", 2022, "electric");
var teslaS = new Tesla("Model S", 2023, "electric");
var audiA3 = new Audi("A3", 2024, true);
var audiQ7 = new Audi("Q7", 2022, false);
console.log("Nissan Cars:");
nissanLeaf.displayInfo();
nissalRog.displayInfo();
console.log("\nTesla Cars:");
teslaX.displayInfo();
teslaS.displayInfo();
console.log("\nAudi Cars:");
audiA3.displayInfo();
audiQ7.displayInfo();
