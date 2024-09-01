var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " \u0445\u043E\u0434\u0438\u0442\u044C."));
    };
    Cat.prototype.jump = function () {
        console.log("".concat(this.name, " \u0441\u0442\u0440\u0438\u0431\u0430\u0454"));
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name, age) {
        this.name = name;
        this.age = age;
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " \u043B\u0456\u0442\u0430\u0454 \u0432 \u043D\u0435\u0431\u0456"));
    };
    Bird.prototype.sing = function () {
        console.log("".concat(this.name, " \u0441\u043F\u0456\u0432\u0430\u0454"));
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name, age) {
        this.name = name;
        this.age = age;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " \u0440\u0443\u0445\u0430\u0454\u0442\u044C\u0441\u044F \u0432 \u0432\u043E\u0434\u043E\u0439\u043C\u0456"));
    };
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " \u043F\u043B\u0430\u0432\u0430\u0454 \u0432 \u0432\u043E\u0434\u043E\u0439\u043C\u0456"));
    };
    return Fish;
}());
var myCat = new Cat("cat", 4);
var myBird = new Bird("bird", 2);
var myFish = new Fish("fish", 5);
myCat.move();
myCat.jump();
myBird.move();
myBird.sing();
myFish.move();
myFish.swim();
