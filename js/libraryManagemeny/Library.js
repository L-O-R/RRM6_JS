import { Book } from "./book.js";
const container = document.getElementById("root");
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

    this.bookList.push(book);

    localStorage.setItem(
      "bookList",
      JSON.stringify(this.bookList)
    );

    this.showBookList();
  }

  showBookList() {
    container.innerHTML = "";
    this.bookList.forEach((book) => {
      let div = document.createElement("div");
      div.classList = "book__card";
      let h2 = document.createElement("h2");
      h2.innerText = book.title;
      div.appendChild(h2);
      container.appendChild(div);
    });
  }
}

// const Library1 = new Library(
//   "The Great Library",
//   "Detroit"
// );

// console.log(Library1);

// const Book1 = new Book(
//   "Harry Potter",
//   "JK Rowling",
//   "Fantasy",
//   "123-789889798"
// );

// Library1.addBook(Book1);
// Library1.showBookList();
