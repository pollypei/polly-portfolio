'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* 導航列 */}
      <nav className="p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Polly Pei
          </h1>
          <div className="space-x-6">
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              關於我
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              聯絡我
            </a>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* 英雄區塊 */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">P</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              你好，我是 Polly Pei
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              歡迎來到我的個人網站！我正在學習網站開發，這是我的第一個作品。
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                了解更多
              </button>
              <button className="border border-gray-300 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                聯絡我
              </button>
            </div>
          </div>
        </motion.section>

        {/* 關於我區塊 */}
        <motion.section
          id="about"
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              關於我
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  我是 Polly Pei，目前正在學習網站開發。我對技術充滿熱忱，
                  喜歡創造有趣且實用的網站。
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  這個網站是我使用 Next.js、React 和 Tailwind CSS
                  建立的第一個專案。
                  雖然我還在學習中，但我很興奮能與大家分享我的學習旅程！
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>台灣</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  正在學習的技術
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Next.js',
                    'React',
                    'TypeScript',
                    'Tailwind CSS',
                    'Git',
                    'GitHub',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 聯絡我區塊 */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              聯絡我
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              歡迎與我聯繫！我很樂意與大家交流學習心得。
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:polly@example.com"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/pollypei"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/pollypei"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      {/* 頁尾 */}
      <footer className="text-center py-8 text-gray-500 dark:text-gray-400">
        <p>&copy; 2024 Polly Pei. 使用 Next.js 建立</p>
      </footer>
    </div>
  );
}
