// Books List Page (main page)
// app/page.tsx
import BookCard from "../components/Book/BookCard";
import { books } from "./books/data";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Book List</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}
