// Add Book Page

"use client";
import BookForm from "../../../../components/Book/BookForm";

export default function AddBookPage() {
  return (
    <main className="p-8 m-auto">
      <div className="">
        <h1 className="text-2xl font-bold mb-4 text-purple-700">
          Add a New Book
        </h1>
        <BookForm />
      </div>
    </main>
  );
}
