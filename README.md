# BookLibrary - Multilingual Book Management System

A modern, responsive web application for managing a book collection with full multilingual support. Built with Next.js and TypeScript, this application allows users to add, view, and manage books in multiple languages.

## 🌐 Live Demo

Check out the live demo: [https://professional-me-test-7yay32ctr-marwa-s-projects-ea57588c.vercel.app/en](https://professional-me-test-7yay32ctr-marwa-s-projects-ea57588c.vercel.app/en)

## 🚀 Features

- 📚 Add and manage books with details in multiple languages
- 🌍 Full internationalization (i18n) support (English, Arabic, French)
- 📱 Responsive design that works on all devices
- ✨ Modern UI with clean, accessible components
- 🔄 Real-time updates and form validation
- 💾 Local storage for persistent data

## 🛠️ Technologies Used

### UI & Styling

- **Lucide Icons**
  - **Why?** A clean, consistent icon set that's easy to implement and customize.
  - **Benefits:**
    - Tree-shakable (only bundle the icons you use)
    - TypeScript support
    - Customizable size and color through props
    - Lightweight and performant

### State Management & Forms

- **React Hook Form**
  - **Why?** Provides a performant and flexible way to handle forms in React.
  - **Benefits:**
    - Minimal re-renders for better performance
    - Built-in form validation that works seamlessly with Zod
    - Easy integration with UI libraries
    - Smaller bundle size compared to alternatives like Formik
    - Great TypeScript support

- **Zod**
  - **Why?** A TypeScript-first schema validation library that ensures type safety.
  - **Benefits over custom validation:**
    - TypeScript integration means your validations are type-safe
    - Single source of truth for both runtime validation and TypeScript types
    - Expressive API for complex validation rules
    - Composable and reusable schemas
    - Better developer experience with detailed error messages
    - No need to maintain custom validation logic

### Internationalization

- **next-intl**
  - **Why?** A comprehensive i18n solution specifically designed for Next.js applications.
  - **Benefits:**
    - Built for the App Router architecture
    - Supports both client and server components
    - Type-safe translations with TypeScript
    - Efficient bundle loading (only loads the current locale)
    - Built-in formatting for numbers, dates, and times
    - Nested translations and interpolation support
  - Supports client and server components with simple API.
  - Handles RTL (Right-to-Left) layouts for Arabic language.

### Data Management

- **Local Storage**
  - Simple client-side storage for persisting book data.
  - Lightweight solution that works without a backend.

## 🏗️ Project Structure

```
src/
├── app/                    # App router directory
│   └── [locale]/           # Localized routes
│       └── books/          # Book-related pages
├── components/             # Reusable components
│   └── Book/               # Book-specific components
├── contexts/               # React contexts
├── lib/                    # Utility functions
├── messages/               # Translation files
│   ├── en.json            # English translations
│   ├── ar.json            # Arabic translations
│   └── fr.json            # French translations
└── types/                  # TypeScript type definitions
```

## 🌐 Supported Languages

- English (en)
- Arabic (ar) - with RTL support
- French (fr)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/0marwa0/Professional.me-test.git
   cd my-next-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🧪 Testing

Run the test suite:

```bash
npm test
# or
yarn test
```
