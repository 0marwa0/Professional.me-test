"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Book, Library, Globe, Plus } from "lucide-react";

const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
  // Add more languages as needed
};

const locales = ["en", "fr", "ar"];

function getPathWithoutLocale(pathname: string, locale: string) {
  const segments = pathname.split("/");
  if (segments[1] === locale) {
    segments.splice(1, 1); // Remove current locale
  }
  return "/" + segments.filter(Boolean).join("/");
}

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    const pathWithoutLocale = getPathWithoutLocale(pathname, currentLocale);
    router.push(`/${selectedLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="relative">
      <select
        value={currentLocale}
        onChange={handleChange}
        className="flex items-center px-3 pr-8 bg-white space-x-1.5 text-purple-700 transition-colors py-1.5 rounded-md text-sm font-medium appearance-none focus:outline-none focus:ring-0 focus:ring-offset-0 border-0"
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
        }}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {LANGUAGE_NAMES[locale] || locale.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
