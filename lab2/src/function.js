function greet(name, age) {
    if (age === void 0) { age = 30; }
    console.log("Hello, ".concat(name, ". You are ").concat(age, " years old."));
}
greet("James", 25);
greet("Ivan");
