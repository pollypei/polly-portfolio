'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Facebook,
  Mail,
  Sparkles,
  Star,
  Youtube,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HomePageClient({
  allPostsData,
}: {
  allPostsData: Array<{
    id: string;
    date: string;
    title: string;
    tags?: string[];
    readTime?: string;
    category?: 'ai-tools' | 'personal-growth';
  }>;
}) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 根據分類獲取卡片表頭資訊
  const getCategoryInfo = (category?: string) => {
    switch (category) {
      case '生產力提昇':
      case 'ai-tools':
        return {
          label: '🚀 生產力提昇',
          bgGradient: 'from-blue-600/25 to-purple-600/25',
          badgeGradient: 'from-blue-500/90 to-purple-500/90',
          borderColor: 'border-blue-400/30',
        };
      case '個人成長':
      case 'personal-growth':
        return {
          label: '🌱 個人成長',
          bgGradient: 'from-green-600/25 to-emerald-600/25',
          badgeGradient: 'from-green-500/90 to-emerald-500/90',
          borderColor: 'border-green-400/30',
        };
      default:
        return {
          label: '📝 個人筆記',
          bgGradient: 'from-blue-600/25 to-cyan-600/25',
          badgeGradient: 'from-blue-500/90 to-cyan-500/90',
          borderColor: 'border-blue-400/30',
        };
    }
  };

  // 工具分享數據
  const toolsData = [
    {
      id: 'claude-ai',
      title: 'Claude AI - AI 對話助手',
      description: '最強大的 AI 對話助手，擅長程式開發、寫作與分析思考',
      link: 'https://claude.ai',
      category: 'AI 工具',
    },
    {
      id: 'obsidian',
      title: 'Obsidian - 知識管理工具',
      description: '強大的知識管理和筆記應用，建立你的第二大腦',
      link: 'https://obsidian.md',
      category: '生產力工具',
    },
    {
      id: 'n8n',
      title: 'n8n - 工作流自動化',
      description: '開源的工作流自動化平台，連接各種應用和服務',
      link: 'https://n8n.io',
      category: '自動化工具',
    },
  ];

  // 書籍分享數據
  const booksData = [
    {
      id: 'review-writing',
      title: '復盤寫作術：從經驗萃取到知識產品的全方位實戰指南',
      description: '深度復盤思維，將生活經驗轉化為有價值的知識產品',
      author: '朱騏',
      category: '個人成長',
      image:
        'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/101/64/0011016423.jpg&v=67d8f79fk&w=348&h=348',
      url: 'https://www.books.com.tw/products/0011016423?srsltid=AfmBOoq3D1cYr0d6A-gqP6glJtt0pgUfEZfDV0drEJh3ihT_CkGuMxJn',
      tags: ['寫作', '複盤'],
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Advanced Background System */}
      <div className="fixed inset-0 z-0">
        {/* Dynamic Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                             linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)`,
            backgroundSize: `100% 100%, 60px 60px, 60px 60px`,
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl"
          style={{ x: y1, y: y1 }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-l from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"
          style={{ x: y2, y: y2 }}
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.7, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Polly Pei</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: '最新文章', href: '#articles' },
                { name: '所有文章', href: '/blog' },
                { name: '工具分享', href: '#tools' },
                { name: '書籍分享', href: '#books' },
                { name: '關於我', href: '#about' },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors font-medium relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Premium Design */}
      <section className="relative z-20 min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          {/* Main Headline */}
          <motion.div className="mb-12">
            <motion.h1
              className="font-display text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                Polly
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Pei
              </motion.span>
            </motion.h1>

            <motion.div
              className="flex justify-center items-center space-x-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-500"></div>
              <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
            </motion.div>
          </motion.div>

          {/* Subtitle with Typewriter Effect */}
          <motion.p
            className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            分享
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {' 生產力提昇 '}
            </motion.span>
            與
            <motion.span
              className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-semibold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              {' 個人成長心得 '}
            </motion.span>
          </motion.p>
        </div>
      </section>

      {/* Articles Section */}
      {allPostsData.length > 0 && (
        <section
          id="articles"
          className="relative z-20 py-32 bg-gradient-to-b from-transparent to-slate-900/50"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-300 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Star className="w-4 h-4 mr-2" />
                最新文章
              </motion.div>
              <motion.h3
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                最新文章
              </motion.h3>
              <motion.p
                className="text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                分享我的學習心得和技術探索過程
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {allPostsData.map(
                ({ id, date, title, tags, readTime, category }, index) => {
                  const categoryInfo = getCategoryInfo(category);
                  return (
                    <motion.div
                      key={`article-${id}`}
                      className="group cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="bg-gradient-to-br from-white/8 via-white/5 to-white/3 backdrop-blur-xl border border-white/15 rounded-3xl overflow-hidden hover:from-white/12 hover:via-white/8 hover:to-white/5 hover:border-white/25 transition-all duration-300 shadow-lg hover:shadow-xl">
                        {/* Article Header */}
                        <div className="relative h-36 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 overflow-hidden">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${categoryInfo.bgGradient}`}
                          ></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <span
                              className={`bg-gradient-to-r ${categoryInfo.badgeGradient} backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/20 shadow-lg`}
                            >
                              {categoryInfo.label}
                            </span>
                          </div>
                        </div>

                        {/* Article Content */}
                        <div className="p-6">
                          <h4 className="font-bold text-white mb-3 leading-tight group-hover:text-blue-200 transition-colors text-lg">
                            {title}
                          </h4>

                          {/* Tags */}
                          {tags && Array.isArray(tags) && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`px-3 py-1.5 bg-gradient-to-r ${
                                    categoryInfo.bgGradient
                                  } border ${
                                    categoryInfo.borderColor
                                  } rounded-full text-xs font-medium backdrop-blur-sm ${
                                    category === 'personal-growth' ||
                                    category === '個人成長'
                                      ? 'text-green-200'
                                      : 'text-blue-200'
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Date/Time and Read Button */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-slate-400 text-sm">
                              <span>{date}</span>
                              {readTime && (
                                <>
                                  <span>·</span>
                                  <span>{readTime}</span>
                                </>
                              )}
                            </div>

                            <motion.a
                              href={`/blog/${encodeURIComponent(id)}`}
                              className="inline-block"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-500/30">
                                <span>閱讀全文</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>

            {/* View All Articles Button */}
            <div className="text-center mt-12">
              <motion.a
                href="/blog"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-500/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span>查看所有文章</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </section>
      )}

      {/* Tools Section */}
      <section id="tools" className="relative z-20 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm font-medium text-violet-300 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 mr-2" />
              工具分享
            </motion.div>
            <motion.h3
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              工具分享
            </motion.h3>
            <motion.p
              className="text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              精選推薦實用的 AI 工具和生產力工具
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {toolsData.map((tool, index) => (
              <motion.div
                key={`tool-${tool.id}`}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  {/* Tool Header */}
                  <div className="relative h-32 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                  </div>

                  {/* Tool Content */}
                  <div className="p-6">
                    <h4 className="font-bold text-white mb-2 leading-tight group-hover:text-violet-200 transition-colors">
                      {tool.title}
                    </h4>

                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Tool Info */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">工具推薦</span>
                      <motion.a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-slate-500 group-hover:text-white transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <span>使用</span>
                        <ArrowRight className="w-3 h-3" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section
        id="books"
        className="relative z-20 py-32 bg-gradient-to-b from-transparent to-slate-900/50"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-medium text-green-300 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 mr-2" />
              書籍分享
            </motion.div>
            <motion.h3
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              書籍分享
            </motion.h3>
            <motion.p
              className="text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              個人成長和知識管理相關的優質書籍推薦
            </motion.p>
          </div>

          <div className="flex justify-center">
            {booksData.map((book, index) => (
              <motion.a
                key={`book-${book.id}`}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block max-w-md w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-white/8 via-white/5 to-white/3 backdrop-blur-xl border border-white/15 rounded-3xl overflow-hidden hover:from-white/12 hover:via-white/8 hover:to-white/5 hover:border-white/25 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {/* Book Cover */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/25 to-emerald-600/25"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="h-36 w-auto object-contain rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                        🌱 {book.category}
                      </span>
                    </div>
                  </div>

                  {/* Book Content */}
                  <div className="p-6">
                    <h4 className="font-bold text-white mb-3 leading-tight group-hover:text-green-200 transition-colors text-lg">
                      {book.title}
                    </h4>

                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {book.description}
                    </p>

                    {/* Tags */}
                    {book.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {book.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 bg-gradient-to-r from-green-600/25 to-emerald-600/25 border border-green-400/30 rounded-full text-xs text-green-200 font-medium backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Author and Link */}
                    <div className="flex items-center justify-between">
                      <div className="text-slate-400 text-sm">
                        作者：{book.author}
                      </div>

                      <motion.div
                        className="inline-block"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl border border-green-500/30">
                          <span>查看書籍</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Professional */}
      <section id="about" className="relative z-20 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm font-medium text-pink-300 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  關於我
                </motion.div>
              </div>

              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  我是 Polly Pei，一位專注於知識輸出與分享的內容創作者。
                  我熱衷於探索 AI
                  工具的實際應用，並將學習心得轉化為有價值的內容。
                </p>
                <p>
                  在這個快速變化的時代，我致力於兩大領域的深度學習與分享： AI
                  工具實戰應用以及個人成長方法論。
                </p>
                <p>
                  透過系統化的學習方法和持續的實踐探索，我希望能夠為同樣在學習路上的朋友們
                  提供實用的經驗分享和深度的思考洞察。
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-400">活躍於台灣</span>
                </div>
                <div className="h-1 w-1 bg-slate-600 rounded-full"></div>
                <div className="text-slate-400">持續創作與分享</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { href: 'mailto:polly.pei28@gmail.com', icon: Mail },
                {
                  href: 'https://youtube.com/@10MinutesBeforeSleep-t7h',
                  icon: Youtube,
                },
                { href: 'https://facebook.com/susan.li.1426', icon: Facebook },
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="text-slate-500 text-sm">
              <p>&copy; 2025 Polly Pei. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
