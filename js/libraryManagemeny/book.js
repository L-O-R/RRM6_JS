export class Book {
  constructor(
    title,
    author,
    genre,
    isbn,
    publish_year = 1200,
    quantity = 1
  ) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isbn = isbn;
    this.publish_year = publish_year || NaN;
    this.quantity = quantity || 1;
    this.borrowedCopies = 0;
  }
}

// let book1 = new Book("jas", "asd", "asda", 89809, 890, 88);

// console.log(book1);
