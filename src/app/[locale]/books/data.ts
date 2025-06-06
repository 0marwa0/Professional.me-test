import { Book } from "../../../types/book";


const now = Date.now();

export const staticBooks: Book[] = [
  {
    id: "book_1749194650637_9qkt5hu52",
    title: {
      en: "The Great Gatsby",
      ar: "غاتسبي العظيم",
      fr: "Gatsby le Magnifique",
    },
    author: {
      en: "F. Scott Fitzgerald",
      ar: "إف. سكوت فيتزجيرالد",
      fr: "F. Scott Fitzgerald",
    },
    price: 10.99,
  },
  {
    id: "book_1749194650637_9qkt5hu56",
    title: {
      en: "To Kill a Mockingbird",
      ar: "أن تقتل عصفورًا بريئًا",
      fr: "Ne tirez pas sur l'oiseau moqueur",
    },
    author: {
      en: "Harper Lee",
      ar: "هاربر لي",
      fr: "Harper Lee",
    },
    price: 8.99,
  },
  {
    id: "book_1749194650637_9qkt5hu58",
    title: {
      en: "1984",
      ar: "1984",
      fr: "1984",
    },
    author: {
      en: "George Orwell",
      ar: "جورج أورويل",
      fr: "George Orwell",
    },
    price: 9.99,
  },
  {
    id: "book_1749194650637_9qkt5hu59",
    title: {
      en: "Pride and Prejudice",
      ar: "كبرياء وتحامل",
      fr: "Orgueil et Préjugés",
    },
    author: {
      en: "Jane Austen",
      ar: "جين أوستن",
      fr: "Jane Austen",
    },
    price: 7.99,
  },
];
