'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { Book, addBook as addBookToStorage, getBooks as getBooksFromStorage } from '@/lib/bookStorage';
import { staticBooks } from '@/app/[locale]/books/data';
import toast from 'react-hot-toast';

type BookContextType = {
  books: Book[];
  userBooks: Book[];
  allBooks: Book[];
  addBook: (book: Omit<Book, 'id'>) => Promise<Book>;
};

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [userBooks, setUserBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Load user's books from localStorage on component mount
    setUserBooks(getBooksFromStorage());
  }, []);

  // Combine static books with user's books
  const allBooks = useMemo(() => {
    // Filter out any static books that were modified by the user
    const modifiedStaticBookIds = new Set(
      userBooks.filter(b => b.id.startsWith('static-')).map(b => b.id.replace('static-', ''))
    );
    
    const filteredStaticBooks = staticBooks.filter(
      book => !modifiedStaticBookIds.has(book.id)
    );
    
    return [...filteredStaticBooks, ...userBooks];
  }, [userBooks]);

  const addBook = async (book: Omit<Book, 'id'>) => {
    try {
      const newBook = addBookToStorage(book);
      setUserBooks(prevBooks => [...prevBooks, newBook]);
      toast.success('Book added successfully!');
      return newBook;
    } catch (error) {
      toast.error('Failed to add book');
      throw error;
    }
  };

 

  const contextValue = {
    books: allBooks, // For backward compatibility
    userBooks,
    allBooks,
    addBook,
  };

  return (
    <BookContext.Provider value={contextValue}>
      {children}
    </BookContext.Provider>
  );
}

export const useBooks = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
};
