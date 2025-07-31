// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="text-gray-600 dark:text-gray-300">載入中...</p>
      </div>
    </div>
  );
}
