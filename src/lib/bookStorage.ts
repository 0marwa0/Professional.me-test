import { staticBooks } from "@/app/[locale]/books/data";
import { LocalizedString } from "@/types/book";

const BOOKS_STORAGE_KEY = 'bookLibrary_books';

export interface Book {
  id: string;
  title: LocalizedString;
  author: LocalizedString;
  price: number;
}

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
    const now = Date.now();
    books = staticBooks.map((book, index) => ({
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


