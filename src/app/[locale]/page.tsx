// Books List Page (main page)
// app/page.tsx
import BookCard from "../../components/Book/BookCard";
import { books } from "./books/data";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/Book/LanguageSwitcher";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <Link href="/books/add">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {t("addBook")}
        </button>
      </Link>
      <LanguageSwitcher />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}
