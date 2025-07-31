'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 錯誤報告邏輯（可選）
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        <div className="space-y-2">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto" />
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            出現錯誤
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            很抱歉，系統發生了一些問題。請稍後再試。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} className="flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>重新載入</span>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>回到首頁</span>
            </Link>
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              錯誤詳情（開發模式）
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
