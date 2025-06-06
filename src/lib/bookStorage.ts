import { staticBooks } from "@/app/[locale]/books/data";

const BOOKS_STORAGE_KEY = 'bookLibrary_books';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  category: string;
  coverImage?: string;
  createdAt: number;
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
      createdAt: now - (staticBooks.length - index) * 1000 * 60 * 60 * 24 // Spread out creation times
    }));
    localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
  }
  
  return books;
};

export const addBook = (bookData: Omit<Book, 'id' | 'createdAt'>): Book => {
  const books = getBooks();
  const newBook: Book = {
    ...bookData,
    id: generateBookId(),
    createdAt: Date.now(),
  };
  
  const updatedBooks = [...books, newBook];
  localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(updatedBooks));
  return newBook;
};

export const deleteBook = (id: string) => {
  const books = getBooks();
  const updatedBooks = books.filter(book => book.id !== id);
  localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(updatedBooks));
};
