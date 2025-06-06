// schemas/bookSchema.ts
import { z } from "zod";
import { validationMessages } from "../src/i18n/validation";

export const createBookSchema = (locale: "en" | "fr" | "ar") => {
  const t = validationMessages[locale];

  return z.object({
    title: z.string().min(1, t.titleRequired),
    author: z.string().min(1, t.authorRequired),
    price: z
      .number({ invalid_type_error: t.priceInvalid })
      .min(0.01, t.priceTooLow),
  });
};
