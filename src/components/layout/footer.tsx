// src/components/layout/footer.tsx
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            &copy; {currentYear} Polly Pei. 使用 Next.js 建立
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              href="/blog"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm"
            >
              文章總數：12 篇
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
