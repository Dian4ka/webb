interface LibraryItem {
  title: string;
  author: string;
  borrow(): void;
}

class Book implements LibraryItem {
  title: string;
  author: string;
  pages: number;
  private isBorrowed: boolean;

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isBorrowed = false;
  }

  borrow(): void {
    if (this.isBorrowed) {
      console.log(`the book "${this.title}" is already borrowed.`);
    } else {
      this.isBorrowed = true;
      console.log(`you've borrowed the book "${this.title}".`);
    }
  }
}

class Magazine implements LibraryItem {
  title: string;
  author: string;
  issueNumber: number;
  private isBorrowed: boolean;

  constructor(title: string, author: string, issueNumber: number) {
    this.title = title;
    this.author = author;
    this.issueNumber = issueNumber;
    this.isBorrowed = false;
  }

  borrow(): void {
    if (this.isBorrowed) {
      console.log(`the magazine "${this.title}" is already borrowed.`);
    } else {
      this.isBorrowed = true;
      console.log(`you've borrowed the magazine "${this.title}".`);
    }
  }
}

class DVD implements LibraryItem {
  title: string;
  author: string;
  duration: number;
  private isBorrowed: boolean;

  constructor(title: string, author: string, duration: number) {
    this.title = title;
    this.author = author;
    this.duration = duration;
    this.isBorrowed = false;
  }

  borrow(): void {
    if (this.isBorrowed) {
      console.log(`the DVD "${this.title}" is already borrowed.`);
    } else {
      this.isBorrowed = true;
      console.log(`you've borrowed the new DVD "${this.title}".`);
    }
  }
}

class Library {
  private items: LibraryItem[] = [];

  addItem(item: LibraryItem): void {
    this.items.push(item);
    console.log(`new  "${item.title}" added to the library.`);
    console.log("-----");
  }

  findItemByName(name: string): LibraryItem | undefined {
    for (const item of this.items) {
      if (item.title === name) {
        return item;
      }
    }
    return undefined;
  }

  listAvailableItems(): void {
    console.log("-----");
    console.log("Available items:");
    this.items.forEach((item) => {
      console.log(`Title: ${item.title}, Author: ${item.author}`);
    });
  }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
const magazine1 = new Magazine("National Geographic", "Various", 202);
const dvd1 = new DVD("Inception", "Christopher Nolan", 148);

const library = new Library();

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

book1.borrow();
magazine1.borrow();
dvd1.borrow();

book1.borrow();

library.listAvailableItems();

const foundItem = library.findItemByName("National Geographic");
if (foundItem) {
  console.log(`Found item: ${foundItem.title} by ${foundItem.author}`);
}
