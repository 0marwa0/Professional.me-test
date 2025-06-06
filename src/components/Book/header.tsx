"use client";

import React from "react";
import { Book, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
export const Header: React.FC = () => {
  const t = useTranslations();

  return (
    <header className="border-b border-gray-100 py-3.5 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-purple-500" />
          <h1 className="font-semibold text-lg text-purple-900">{t('bookLibrary')}</h1>
        </div>
        <div className="flex items-center gap-3 space-x-3">
          <LanguageSwitcher />

          <Link href="/books/add">
            <button className="flex text-white items-center space-x-1.5 bg-purple-700 hover:bg-purple-700 transition-colors px-3 py-1.5 rounded-md text-sm font-medium">
              <Plus className="h-4 w-4" />
              <span> {t("addBook")}</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
