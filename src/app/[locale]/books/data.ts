import { Book } from "../../../types/book";

const now = Date.now();

export const staticBooks: Book[] = [
  {
    id: "book_1749194650637_9qkt5hu52",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story of decadence, excess, and the pursuit of the American Dream in the Roaring Twenties.",
    price: 10.99,
    coverImage: "http://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
  },
  {
    id: "book_1749194650637_9qkt5hu56",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
    price: 8.99,
    coverImage: "http://covers.openlibrary.org/b/isbn/9780061120084-L.jpg"
  },
  {
    id: "book_1749194650637_9qkt5hu58",
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    price: 9.99,
    coverImage: "http://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
  },
  {
    id: "book_1749194650637_9qkt5hu59",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel of manners that follows the character development of Elizabeth Bennet.",
    price: 7.99,
    coverImage: "http://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
  }
];
