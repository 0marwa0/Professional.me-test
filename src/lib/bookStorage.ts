import type { Book } from "@/types/book";
import { staticBooks } from "@/app/[locale]/books/data";

// Re-export the Book type for other modules
export type { Book } from "@/types/book";

const BOOKS_STORAGE_KEY = 'bookLibrary_books';



// Generate a unique ID for books
const generateBookId = (prefix = 'book') => {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const getBooks = (): Book[] => {
  if (typeof window === 'undefined') return [];
  
  let books: Book[] = [];
  const booksJson = localStorage.getItem(BOOKS_STORAGE_KEY);
  
  if (booksJson) {
    books = JSON.parse(booksJson);
  } else {
    // Initialize with static books if no books exist in storage
    books = staticBooks.map((book) => ({
      ...book,
      id: generateBookId('static'),
    }));
    localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
  }
  return books;
};

export const addBook = (bookData: Omit<Book, 'id'>): Book => {
  const books = getBooks();
  const newBook: Book = {
    ...bookData,
    id: generateBookId(),
  };
  
  const updatedBooks = [...books, newBook];
  localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(updatedBooks));
  return newBook;
};


