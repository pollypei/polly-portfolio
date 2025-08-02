'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
  tags?: string[];
  readTime?: string;
}

export default function ArticleClient({ postData }: { postData: PostData }) {
  const router = useRouter();


  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 背景效果 */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-white" />
      </div>

      {/* 返回按鈕 */}
      <motion.button
        onClick={handleGoBack}
        className="fixed top-6 left-6 z-50 flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>返回</span>
      </motion.button>


      <div className="relative z-10 flex">
        {/* 主要內容區域 */}
        <div className="flex-1">
          <div className="container mx-auto px-6 py-20 max-w-4xl">
            <motion.article
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-code:text-blue-600 prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-a:text-blue-600 prose-blockquote:text-gray-600 prose-blockquote:border-gray-300 prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto prose-img:max-w-full prose-img:h-auto prose-table:border-collapse prose-table:border prose-table:border-gray-300 prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:p-2 prose-td:border prose-td:border-gray-300 prose-td:p-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* 文章標題和元數據 */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {postData.title}
                </h1>
                <div className="flex items-center space-x-4 text-gray-600 text-sm">
                  <span>{postData.date}</span>
                  {postData.readTime && (
                    <>
                      <span>·</span>
                      <span>{postData.readTime}</span>
                    </>
                  )}
                </div>
                {postData.tags && postData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {postData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* 文章內容 */}
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </motion.article>
          </div>
        </div>

      </div>

    </div>
  );
}