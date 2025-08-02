'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: string;
  date: string;
  title: string;
  tags?: string[];
  readTime?: string;
  category?: 'ai-tools' | 'personal-growth' | '生產力提昇' | '個人成長';
}

export default function BlogListClient({
  allPostsData,
}: {
  allPostsData: BlogPost[];
}) {
  const router = useRouter();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

  // 獲取所有分類
  const categories = [
    'all',
    ...Array.from(
      new Set(allPostsData.map((post) => post.category).filter(Boolean))
    ),
  ];

  // 過濾文章
  const filteredPosts =
    selectedCategory === 'all'
      ? allPostsData
      : allPostsData.filter((post) => post.category === selectedCategory);

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
      {/* Background System */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                             linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)`,
            backgroundSize: `100% 100%, 60px 60px, 60px 60px`,
          }}
        />

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
      <div className="relative z-20">
        {/* Back Button */}
        <motion.button
          onClick={() => router.push('/')}
          className="fixed top-6 left-6 z-50 flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回首頁</span>
        </motion.button>

        {/* Header */}
        <div className="container mx-auto px-6 pt-24 pb-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              所有文章
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              探索所有關於生產力提昇和個人成長的文章內容
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white/20 border-white/40 text-white'
                    : 'bg-white/5 border-white/20 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category === 'all'
                  ? '全部文章'
                  : category === '生產力提昇' || category === 'ai-tools'
                  ? '🚀 生產力提昇'
                  : category === '個人成長' || category === 'personal-growth'
                  ? '🌱 個人成長'
                  : category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="container mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => {
              const categoryInfo = getCategoryInfo(post.category);
              return (
                <motion.div
                  key={post.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-gradient-to-br from-white/8 via-white/5 to-white/3 backdrop-blur-xl border border-white/15 rounded-3xl overflow-hidden hover:from-white/12 hover:via-white/8 hover:to-white/5 hover:border-white/25 transition-all duration-300 shadow-lg hover:shadow-2xl h-full">
                    {/* Article Header */}
                    <div className="relative h-32 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 overflow-hidden">
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
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-bold text-white mb-3 leading-tight group-hover:text-blue-200 transition-colors text-lg line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Tags */}
                      {post.tags &&
                        Array.isArray(post.tags) &&
                        post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className={`inline-flex items-center px-2 py-1 bg-gradient-to-r ${
                                  categoryInfo.bgGradient
                                } border ${
                                  categoryInfo.borderColor
                                } rounded-full text-xs font-medium backdrop-blur-sm ${
                                  post.category === 'personal-growth' ||
                                  post.category === '個人成長'
                                    ? 'text-green-200'
                                    : 'text-blue-200'
                                }`}
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-slate-400 text-xs">
                                +{post.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                      {/* Meta Info and Read Button */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center space-x-2 text-slate-400 text-sm">
                          <span>{post.date}</span>
                          {post.readTime && (
                            <>
                              <span>·</span>
                              <span>{post.readTime}</span>
                            </>
                          )}
                        </div>

                        <motion.a
                          href={`/blog/${encodeURIComponent(post.id)}`}
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
            })}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-slate-400 text-xl">此分類目前沒有文章</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
