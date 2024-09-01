var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isBorrowed = false;
    }
    Book.prototype.borrow = function () {
        if (this.isBorrowed) {
            console.log("the book \"".concat(this.title, "\" is already borrowed."));
        }
        else {
            this.isBorrowed = true;
            console.log("you've borrowed the book \"".concat(this.title, "\"."));
        }
    };
    return Book;
}());
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }
    Magazine.prototype.borrow = function () {
        if (this.isBorrowed) {
            console.log("the magazine \"".concat(this.title, "\" is already borrowed."));
        }
        else {
            this.isBorrowed = true;
            console.log("you've borrowed the magazine \"".concat(this.title, "\"."));
        }
    };
    return Magazine;
}());
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.isBorrowed = false;
    }
    DVD.prototype.borrow = function () {
        if (this.isBorrowed) {
            console.log("the DVD \"".concat(this.title, "\" is already borrowed."));
        }
        else {
            this.isBorrowed = true;
            console.log("you've borrowed the new DVD \"".concat(this.title, "\"."));
        }
    };
    return DVD;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("new  \"".concat(item.title, "\" added to the library."));
        console.log("-----");
    };
    Library.prototype.findItemByName = function (name) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.title === name) {
                return item;
            }
        }
        return undefined;
    };
    Library.prototype.listAvailableItems = function () {
        console.log("-----");
        console.log("Available items:");
        this.items.forEach(function (item) {
            console.log("Title: ".concat(item.title, ", Author: ").concat(item.author));
        });
    };
    return Library;
}());
var book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
var magazine1 = new Magazine("National Geographic", "Various", 202);
var dvd1 = new DVD("Inception", "Christopher Nolan", 148);
var library = new Library();
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);
book1.borrow();
magazine1.borrow();
dvd1.borrow();
book1.borrow();
library.listAvailableItems();
var foundItem = library.findItemByName("National Geographic");
if (foundItem) {
    console.log("Found item: ".concat(foundItem.title, " by ").concat(foundItem.author));
}
