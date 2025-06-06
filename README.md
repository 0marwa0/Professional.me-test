# BookLibrary - Multilingual Book Management System

A modern, responsive web application for managing a book collection with full multilingual support. Built with Next.js and TypeScript, this application allows users to add, view, and manage books in multiple languages.

## 🚀 Features

- 📚 Add and manage books with details in multiple languages
- 🌍 Full internationalization (i18n) support (English, Arabic, French)
- 📱 Responsive design that works on all devices
- ✨ Modern UI with clean, accessible components
- 🔄 Real-time updates and form validation
- 💾 Local storage for persistent data

## 🛠️ Technologies Used

### Core Technologies

- **Next.js 14**
  - Chosen for its hybrid static & server rendering, API routes, and file-system based routing.
  - Enables excellent SEO and performance out of the box.

- **TypeScript**
  - Provides static typing to catch errors during development.
  - Improves code quality and developer experience with better IDE support.

- **React 18**
  - The foundation of our UI components with modern features like hooks.

### UI & Styling

- **Tailwind CSS**
  - Utility-first CSS framework for rapid UI development.
  - Enables responsive design without leaving your HTML/JSX.

- **Lucide Icons**
  - Beautiful, consistent icon set that's easy to use and customize.

### State Management & Forms

- **React Hook Form**
  - Performant, flexible, and extensible forms with easy-to-use validation.
  - Reduces the amount of code needed for form handling.

- **Zod**
  - TypeScript-first schema validation with static type inference.
  - Ensures type safety across form validations.

### Internationalization

- **next-intl**
  - Comprehensive i18n solution for Next.js applications.
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
   git clone [your-repository-url]
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

## 🧑‍💻 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- Next.js and React communities for amazing documentation and support
- All contributors who have helped improve this project

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/booklibrary](https://github.com/yourusername/booklibrary)
