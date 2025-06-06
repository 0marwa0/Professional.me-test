// Book form component

"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { createBookSchema } from "../../../schemas/bookSchema";
import { useBooks } from "@/contexts/BookContext";

// Define the form data type that matches our schema
type FormData = {
  title_en: string;
  title_ar: string;
  title_fr: string;
  author_en: string;
  author_ar: string;
  author_fr: string;
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
      title_en: "",
      title_ar: "",
      title_fr: "",
      author_en: "",
      author_ar: "",
      author_fr: "",
      price: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await addBook({
        title: {
        en: data.title_en,
        ar: data.title_ar,
        fr: data.title_fr
      },
      author: {
        en: data.author_en,
        ar: data.author_ar,
        fr: data.author_fr
      },
        price: Number(data.price),
      });
      reset();
      router.push("/");
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
     
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* English Title */}
      <div>
        <input
          {...register("title_en", { required: "English title is required" })}
          placeholder={t('titleInEnglish')}
          className="w-full p-2 border rounded bg-transparent"
        />
        {errors.title_en && (
          <p className="text-red-500 text-sm">{errors.title_en.message}</p>
        )}
      </div>

      {/* Arabic Title */}
      <div>
        <input
          {...register("title_ar", { required: "Arabic title is required" })}
          placeholder={t('titleInArabic')}
          className="w-full p-2 border rounded bg-transparent text-right"
          dir="rtl"
        />
        {errors.title_ar && (
          <p className="text-red-500 text-sm">{errors.title_ar.message}</p>
        )}
      </div>

      {/* French Title */}
      <div>
        <input
          {...register("title_fr", { required: "French title is required" })}
          placeholder={t('titleInFrench')}
          className="w-full p-2 border rounded bg-transparent"
        />
        {errors.title_fr && (
          <p className="text-red-500 text-sm">{errors.title_fr.message}</p>
        )}
      </div>

      {/* English Author */}
      <div>
        <input
          {...register("author_en", { required: "English author name is required" })}
          placeholder={t('authorInEnglish')}
          className="w-full p-2 border rounded bg-transparent"
        />
        {errors.author_en && (
          <p className="text-red-500 text-sm">{errors.author_en.message}</p>
        )}
      </div>

      {/* Arabic Author */}
      <div>
        <input
          {...register("author_ar", { required: "Arabic author name is required" })}
          placeholder={t('authorInArabic')}
          className="w-full p-2 border rounded bg-transparent text-right"
          dir="rtl"
        />
        {errors.author_ar && (
          <p className="text-red-500 text-sm">{errors.author_ar.message}</p>
        )}
      </div>

      {/* French Author */}
      <div>
        <input
          {...register("author_fr", { required: "French author name is required" })}
          placeholder={t('authorInFrench')}
          className="w-full p-2 border rounded bg-transparent"
        />
        {errors.author_fr && (
          <p className="text-red-500 text-sm">{errors.author_fr.message}</p>
        )}
      </div>

      {/* Price */}
      <div>
        <input
          {...register("price", { valueAsNumber: true })}
          placeholder={t('price')}
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
    </div>
  );
}
