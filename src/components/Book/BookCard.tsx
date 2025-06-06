// Displays a single book item
// components/Book/BookCard.tsx
"use client";
import { Book } from "../../types/book";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface Props {
  book: Book;
  className?: string;
}

export default function BookCard({ book, className }: Props) {
    const currentLocale = useLocale();
  
  return (
    <div className={cn(
      "border border-gray-100 rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow",
      className
    )}>
      <div className="aspect-[2/3] mb-4 overflow-hidden rounded">
        <img
          src={book.coverImage}
          alt={`${book.title} cover`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 h-14">
      {book.title[currentLocale as keyof LocalizedString]}
      </h2>
      <p className="text-gray-600 text-sm mt-1">{book.author[currentLocale as keyof LocalizedString]}</p>
      <p className="text-green-600 font-bold mt-2">
        ${book.price.toFixed(2)}
      </p>
      {book.description && (
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {book.description[currentLocale as keyof LocalizedString]}
        </p>
      )}
    
    </div>
  );
}
