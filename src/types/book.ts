// Book-related types/interfaces
export type LocalizedString = {
  en: string;
  ar: string;
  fr: string;
};


export interface Book {
  id: string;
  title: LocalizedString;
  author: LocalizedString;
  description: LocalizedString;
  price: number;
 
  coverImage?: string;
  
}
