import { Book } from "./book.js";
import { Library } from "./Library.js";

// Form setup
const addBookForm = document.getElementById(
  "add_book--form"
);
addBookForm.addEventListener("submit", onSubmit);

const myLib = new Library("My Library", "Night City");
myLib.bookList =
  JSON.parse(localStorage.getItem("bookList")) || [];

// Submit handler
function onSubmit(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const isbn = document.getElementById("isbn").value;
  const publishYear = parseInt(
    document.getElementById("publish_year").value
  );
  const quantity = parseInt(
    document.getElementById("quantity").value
  );

  const newBook = new Book(
    title,
    author,
    genre,
    isbn,
    publishYear,
    quantity
  );
  myLib.addBook(newBook);

  // Reset form
  addBookForm.reset();

  alert(
    "Book added successfully! Check the book list page."
  );
}
