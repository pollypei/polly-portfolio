'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Users, Award, TrendingUp, Eye, Search, Star } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ModernHomePage({ allPostsData }: { allPostsData: Array<{ id: string; date: string; title: string }> }) {
  // 知識主題數據
  const knowledgeTopics = [
    {
      id: 'ai-tools',
      title: 'AI 工具實戰應用',
      icon: '🤖',
      description: 'Claude AI、AI Agent 開發、提示詞工程等實戰經驗分享',
      highlights: ['Claude AI 深度應用', 'n8n 自動化流程', '提示詞工程框架', '多 AI 工具比較'],
      articleCount: 15,
      color: 'blue'
    },
    {
      id: 'personal-growth',
      title: '個人成長與反思',
      icon: '🌱',
      description: '學習方法論、溝通表達、心理成長的深度探索',
      highlights: ['高效學習方法', '職場溝通技巧', '情緒管理實踐', '時間管理系統'],
      articleCount: 12,
      color: 'green'
    }
  ];

  // 精選文章數據
  const featuredArticles = [
    {
      id: 1,
      title: "Claude AI 程式開發實戰：從需求分析到代碼實現",
      category: "AI 工具實戰",
      excerpt: "分享使用 Claude AI 進行程式開發的完整流程，包括需求分析、代碼生成和優化技巧。",
      readTime: "12 分鐘",
      publishDate: "2024-01-15",
      tags: ["Claude AI", "程式開發", "實戰案例"],
      featured: true
    },
    {
      id: 2,
      title: "PREP方法論：構建高效提示詞的邏輯框架",
      category: "AI 工具實戰",
      excerpt: "深入解析PREP方法論在提示詞工程中的應用，提升AI對話質量和準確性。",
      readTime: "8 分鐘",
      publishDate: "2024-01-12",
      tags: ["提示詞工程", "PREP方法", "AI溝通"],
      featured: true
    },
    {
      id: 3,
      title: "知識管理系統搭建：從收集到輸出的完整流程",
      category: "個人成長",
      excerpt: "分享個人知識管理系統的搭建經驗，包括工具選擇、流程設計和實踐心得。",
      readTime: "15 分鐘",
      publishDate: "2024-01-10",
      tags: ["知識管理", "Obsidian", "學習方法"],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Polly Pei</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: '知識主題', href: '#knowledge' },
                { name: '最新文章', href: '#articles' },
                { name: '關於我', href: '#about' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto container-padding text-center">
          
          {/* Status Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            知識型個人品牌 · 持續輸出中
          </motion.div>
          
          {/* Main Headline */}
          <motion.div className="mb-12">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block">Polly</span>
              <span className="block gradient-text">Pei</span>
            </motion.h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            深度分享 <span className="font-semibold text-blue-600">AI 工具實戰應用</span> 與 <span className="font-semibold text-green-600">個人成長心得</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>開始閱讀</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
            
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>了解更多</span>
              </div>
            </motion.button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { number: '27+', label: '深度文章', icon: Award },
              { number: '2', label: '知識主題', icon: Users },
              { number: '800+', label: '學習小時', icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Knowledge Topics */}
      <section id="knowledge" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              知識領域
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              兩大主題
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              深度探索 AI 工具實戰應用與個人成長方法論的系統化知識分享
            </p>
          </motion.div>
          
          {/* Topics Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {knowledgeTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/knowledge/${topic.id}`}>
                  <div className="card h-full">
                    <div className="card-content">
                      {/* Topic Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{topic.icon}</div>
                        <span className={`tag tag-${topic.color}`}>
                          {topic.articleCount} 篇文章
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {topic.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {topic.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {topic.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">深入探索</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="articles" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">精選文章</h2>
            <p className="text-xl text-gray-600">深度好文推薦，涵蓋兩大知識主題的實戰經驗</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blog/${article.id}`}>
                  <div className="card h-full">
                    <div className="card-content">
                      
                      {/* Article Meta */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`tag ${article.category.includes('AI') ? 'tag-blue' : 'tag-green'}`}>
                          {article.category}
                        </span>
                        {article.featured && (
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <span key={tag} className="tag tag-secondary text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Reading Info */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{article.readTime}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Real Articles */}
          {allPostsData.length > 0 && (
            <div className="grid lg:grid-cols-3 gap-8">
              {allPostsData.map(({ id, date, title }, index) => (
                <motion.article
                  key={`real-${id}`}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/blog/${id}`}>
                    <div className="card h-full">
                      <div className="card-content">
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="tag tag-secondary">
                            個人筆記
                          </span>
                          <span className="text-sm text-gray-500">{date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">
                          {title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">
                          分享我的學習心得和技術探索過程
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">點擊閱讀</span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
          
          {/* View All Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <span>查看所有文章</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                  <Brain className="w-4 h-4 mr-2" />
                  關於我
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  知識型個人品牌
                </h2>
              </div>
              
              <div className="prose prose-lg">
                <p>
                  我是 Polly Pei，一位專注於知識輸出與分享的內容創作者。
                  我熱衷於探索 AI 工具的實際應用，並將學習心得轉化為有價值的內容。
                </p>
                <p>
                  在這個快速變化的時代，我致力於兩大領域的深度學習與分享：
                  AI 工具實戰應用與個人成長方法論。
                </p>
                <p>
                  透過系統化的學習方法和持續的實踐探索，我希望能夠為同樣在學習路上的朋友們
                  提供實用的經驗分享和深度的思考洞察。
                </p>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-600">活躍於台灣</span>
                </div>
                <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
                <div className="text-gray-600">持續創作與分享</div>
              </div>
            </motion.div>
            
            {/* Skills */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Skills Card */}
              <div className="card">
                <div className="card-content">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    知識領域專長
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'AI 工具應用', level: 90, color: 'emerald' },
                      { name: '提示詞工程', level: 85, color: 'blue' },
                      { name: '個人成長方法論', level: 80, color: 'green' },
                      { name: '知識輸出策略', level: 75, color: 'purple' }
                    ].map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-900 font-medium">{skill.name}</span>
                          <span className="text-gray-600 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div 
                            className={`h-2 bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Tools */}
              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">常用工具與平台</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Claude AI', 'ChatGPT', 'Gemini', 'n8n', 'Obsidian', 'Notion', 'Figma', 'VS Code'].map((tool) => (
                      <motion.span
                        key={tool}
                        className="tag tag-secondary hover:bg-gray-200 transition-colors cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Polly Pei</span>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              持續創作有價值的知識內容，分享學習與成長的實踐經驗
            </p>
            
            <div className="text-gray-500 text-sm">
              <p>&copy; 2025 Polly Pei. All rights reserved.</p>
              <p className="mt-2">Built with Next.js, TypeScript, Tailwind CSS & Framer Motion</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}