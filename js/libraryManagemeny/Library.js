import { Book } from "./book.js";
export class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.bookList = [];
  }

  /*
    @params => book (object)
  */
  addBook(book) {
    // []// {}
    const { title, author, genre, isbn } = book;
    if (!title && !author && !genre && !isbn) {
      return alert("details missing");
    }
    this.bookList.push(book);
  }

  showBookList() {
    console.log(this.bookList);
  }
}

// const Library1 = new Library(
//   "The Great Library",
//   "Detroit"
// );

// const Book1 = new Book(
//   "Harry Potter",
//   "JK Rowling",
//   "Fantasy",
//   "123-789889798"
// );

// Library1.addBook(Book1);
// Library1.showBookList();
