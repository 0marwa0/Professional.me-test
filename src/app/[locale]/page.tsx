'use client';

import { Header } from "@/components/Book/header";
import BookCard from "@/components/Book/BookCard";
import { useTranslations } from "next-intl";
import { useBooks } from "@/contexts/BookContext";

function HomePageClient() {
  const t = useTranslations();
  const { allBooks: books } = useBooks();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {t("title")}
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.length > 0 ? (
            books.map((book) => (
              <BookCard key={book.id} book={book} className="w-full" />
            ))
          ) : (
            <p className="text-gray-500">
              {t("noBooks")}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default function HomePage() {
  return <HomePageClient />;
}
