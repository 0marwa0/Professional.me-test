"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

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
        className="p-2 border rounded bg-white dark:bg-gray-800 text-sm"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
