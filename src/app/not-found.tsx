// src/app/not-found.tsx
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-400">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            頁面未找到
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            抱歉，您要尋找的頁面不存在或已被移動。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/" className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>回到首頁</span>
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/blog" className="flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>瀏覽文章</span>
            </Link>
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            或者您可以使用導航選單尋找您需要的內容
          </p>
        </div>
      </div>
    </div>
  );
}
