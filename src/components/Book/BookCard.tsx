// Displays a single book item
// components/Book/BookCard.tsx
"use client";
import { Book } from "../../types/book";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{book.title}</h2>
      <p className="text-gray-700">{book.author}</p>
      <p className="text-green-600 font-semibold mt-1">
        ${book.price.toFixed(2)}
      </p>
    </div>
  );
}
