// Add Book Page

"use client";
import BookForm from "../../../../components/Book/BookForm";

export default function AddBookPage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <BookForm />
    </main>
  );
}
