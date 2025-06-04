// Book form component

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { createBookSchema } from "../../../schemas/bookSchema";

export default function BookForm() {
  const locale = useLocale() as "en" | "fr" | "ar";

  const router = useRouter();
  const t = useTranslations();
  const schema = createBookSchema(locale);

  type BookFormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      author: "",
      price: 0,
      coverImage: "",
    },
  });

  const onSubmit = (data: BookFormData) => {
    console.log("Valid Book:", data);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Title */}
      <div>
        <input
          {...register("title")}
          placeholder={t("Title")}
          className="w-full p-2 border rounded"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Author */}
      <div>
        <input
          {...register("author")}
          placeholder={t("Author")}
          className="w-full p-2 border rounded"
        />
        {errors.author && (
          <p className="text-red-500 text-sm">{errors.author.message}</p>
        )}
      </div>

      {/* Price */}
      <div>
        <input
          {...register("price", { valueAsNumber: true })}
          placeholder={t("Price")}
          type="number"
          step="0.01"
          className="w-full p-2 border rounded"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      {/* Cover Image URL */}
      <div>
        <input
          {...register("coverImage")}
          placeholder="Cover Image URL"
          className="w-full p-2 border rounded"
        />
        {errors.coverImage && (
          <p className="text-red-500 text-sm">{errors.coverImage.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {t("addBook")}
      </button>
    </form>
  );
}
