// src/components/layout/navigation.tsx
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 transition-colors"
          >
            Polly Pei
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              首頁
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              關於我
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              文章
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              聯絡我
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
