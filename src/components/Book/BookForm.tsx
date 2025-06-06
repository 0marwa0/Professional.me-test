// Book form component

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { createBookSchema } from "../../../schemas/bookSchema";
import { useBooks } from "@/contexts/BookContext";

// Define the form data type that matches our schema
type FormData = {
  title: string;
  author: string;
  price: string;

};

export default function BookForm() {
  const locale = useLocale() as "en" | "fr" | "ar";
  const { addBook } = useBooks();
  const router = useRouter();
  const t = useTranslations();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(createBookSchema(locale)) as any,
    defaultValues: {
      title: "",
      author: "",
      price: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await addBook({
        title: data.title,
        author: data.author,
        price: Number(data.price), // Ensure price is a number
      });
      reset();
      router.push("/");
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      {/* Title */}
      <div className="space-x-6">
        <input
          {...register("title")}
          placeholder={t("Title")}
          className="w-full p-2 border rounded bg-transparent"
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
          className="w-full p-2 border  rounded bg-transparent"
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
          className="w-full p-2 border rounded bg-transparent"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {t('addBook')}
      </button>
    </form>
  );
}
