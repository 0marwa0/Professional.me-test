import { Book } from "../../../types/book";




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
    description: {
      en: "A story of decadence, excess, and the pursuit of the American Dream in the Roaring Twenties.",
      ar: "قصة عن الانحلال والفائض والسعي لتحقيق الحلم الأمريكي في العشرينات الصاخبة.",
      fr: "Une histoire de décadence, d'excès et de poursuite du rêve américain dans les années folles.",
    },
    price: 10.99,
    coverImage: "http://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
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
    description: {
      en: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
      ar: "رواية لا تُنسى عن طفولة في بلدة جنوبية نائمة وأزمة ضمير هزتها.",
      fr: "Le roman inoubliable d'une enfance dans une petite ville du Sud et de la crise de conscience qui l'a secouée.",
    },
    price: 8.99,
    coverImage: "http://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
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
    description: {
      en: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
      ar: "رواية خيال علمي اجتماعي ديستوبية وقصة تحذيرية عن مخاطر الشمولية.",
      fr: "Un roman de science-fiction dystopique et un conte d'avertissement sur les dangers du totalitarisme.",
    },
    price: 9.99,
    coverImage: "http://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
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
    description: {
      en: "A romantic novel of manners that follows the character development of Elizabeth Bennet.",
      ar: "رواية رومانسية عن الأخلاق تتبع تطور شخصية إليزابيث بينيت.",
      fr: "Un roman de mœurs romantique qui suit le développement du personnage d'Elizabeth Bennet.",
    },
    price: 7.99,
    coverImage: "http://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
  },
];
