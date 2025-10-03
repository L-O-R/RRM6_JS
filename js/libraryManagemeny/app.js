import { Book } from "./book.js";
import { Library } from "./Library.js";

// Targeted elements
// 1> form

const addBook__form = document.getElementById(
  "add_book--form"
);

addBook__form.addEventListener("submit", onSubmit);
const myLib = new Library("My Library", "Night City");

myLib.bookList =
  JSON.parse(localStorage.getItem("bookList")) || [];

// on sumit function

function onSubmit(event) {
  event.preventDefault();
  let bookTitle = event.target[0].value;
  let bookAuthor = event.target[1].value;
  let bookGenre = event.target[2].value;
  let bookIsbn = event.target[3].value;
  let bookPublicationYear = event.target[4].value;
  let bookQuantity = event.target[5].value;

  const newBook = new Book(
    bookTitle,
    bookAuthor,
    bookGenre,
    bookIsbn,
    bookPublicationYear,
    bookQuantity
  );
  myLib.addBook(newBook);
}

myLib.showBookList();

// export default myLib.showBookList;
