// schemas/bookSchema.ts
import { z } from "zod";
import { validationMessages } from "../src/i18n/validation";

export const createBookSchema = (locale: "en" | "fr" | "ar") => {
  const t = validationMessages[locale];

  return z.object({
    title_en: z.string().min(1, t.titleRequired),
    title_ar: z.string().min(1, t.titleRequired),
    title_fr: z.string().min(1, t.titleRequired),
    author_en: z.string().min(1, t.authorRequired),
    author_ar: z.string().min(1, t.authorRequired),
    author_fr: z.string().min(1, t.authorRequired),
    price: z
      .number({ invalid_type_error: t.priceInvalid })
      .min(0.01, t.priceTooLow),
  });
};
