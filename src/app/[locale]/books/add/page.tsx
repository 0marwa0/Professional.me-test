'use client';

// Add Book Page
import Link from "next/link";
import { Home } from "lucide-react";
import BookForm from "../../../../components/Book/BookForm";
import { useTranslations } from "next-intl";

export default function AddBookPage() {
  const t = useTranslations();
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link 
          href="/" 
          className="text-purple-700 hover:text-purple-900 transition-colors"
          aria-label="Go to home"
        >
          <Home className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold text-purple-700">
          {t("addNewBook")}
        </h1>
        <div className="w-6"></div> {/* Spacer for balance */}
      </div>
      <div className="max-w-2xl mx-auto">
        <BookForm />
      </div>
    </main>
  );
}
