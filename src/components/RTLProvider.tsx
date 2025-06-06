'use client';

import { ReactNode, useMemo } from 'react';

interface RTLProviderProps {
  children: ReactNode;
  locale: string;
}

export default function RTLProvider({ children, locale }: RTLProviderProps) {
  const isRTL = useMemo(() => {
    return ['ar', 'fa', 'he', 'ur'].includes(locale);
  }, [locale]);

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'rtl' : 'ltr'}>
      <body className={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </body>
    </html>
  );
}
