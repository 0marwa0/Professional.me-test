// Displays a single book item
// components/Book/BookCard.tsx
"use client";
import { Book, LocalizedString } from "../../types/book";
import { useLocale } from "next-intl";

interface Props {
  book: Book;
  className?: string;
}

export default function BookCard({ book, className = '' }: Props) {
  const currentLocale = useLocale() as keyof LocalizedString;
  
  return (
    <div className={`transition-transform hover:scale-105 border border-gray-100 rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow ${className}`}>
      <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 h-14">
        {book.title[currentLocale]}
      </h2>
      <p className="text-gray-600 text-sm mt-1">{book.author[currentLocale]}</p>
      <p className="text-green-600 font-bold mt-2">
        ${book.price.toFixed(2)}
      </p>
    </div>
  );
}
