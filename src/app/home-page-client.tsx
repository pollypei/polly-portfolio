'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Star, Zap, Sparkles, Eye, Play, Award, Users, TrendingUp, ExternalLink, Download, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HomePageClient() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 作品數據
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "UI/UX Design",
      year: "2024",
      image: "/api/placeholder/800/600",
      tags: ["Web Design", "User Experience", "E-commerce"],
      metrics: { conversion: "+47%", engagement: "+65%" },
      description: "Complete redesign of a major e-commerce platform, focusing on user journey optimization and conversion rate improvement."
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      category: "Product Design",
      year: "2024",
      image: "/api/placeholder/600/800",
      tags: ["Mobile", "FinTech", "Interface Design"],
      metrics: { users: "50K+", rating: "4.8★" },
      description: "Revolutionary mobile banking app with intuitive interface and advanced security features."
    },
    {
      id: 3,
      title: "SaaS Dashboard Interface",
      category: "Web Application",
      year: "2023",
      image: "/api/placeholder/800/600",
      tags: ["Dashboard", "SaaS", "Data Visualization"],
      metrics: { efficiency: "+38%", satisfaction: "95%" },
      description: "Comprehensive dashboard design for enterprise SaaS platform with complex data visualization."
    },
    {
      id: 4,
      title: "Brand Identity System",
      category: "Branding",
      year: "2023",
      image: "/api/placeholder/800/800",
      tags: ["Branding", "Visual Identity", "Design System"],
      metrics: { recognition: "+85%", consistency: "100%" },
      description: "Complete brand identity overhaul for a tech startup, including logo, color system, and guidelines."
    }
  ];

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
            backgroundSize: `100% 100%, 60px 60px, 60px 60px`
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl"
          style={{ x: y1, y: y1 }}
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-l from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"
          style={{ x: y2, y: y2 }}
          animate={{ 
            x: [0, -120, 80, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.7, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
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
              {['Work', 'About', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white transition-colors font-medium relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
            
            <motion.button 
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Premium Design */}
      <section className="relative z-20 min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          
          {/* Status Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-green-500/10 backdrop-blur-xl border border-green-500/30 rounded-full text-sm font-medium text-green-300 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            Available for new projects
          </motion.div>
          
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
                Creative
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Designer
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
            I craft exceptional digital experiences that
            <motion.span 
              className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {" drive results "}
            </motion.span>
            and captivate users through innovative UI/UX design.
          </motion.p>
          
          {/* CTA Section */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button 
              className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
            
            <motion.button 
              className="group px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </div>
            </motion.button>
          </motion.div>
          
          {/* Achievement Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {[
              { number: '100+', label: 'Projects Completed', icon: Award },
              { number: '50+', label: 'Happy Clients', icon: Users },
              { number: '5+', label: 'Years Experience', icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:from-violet-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-violet-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-slate-400 text-sm">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 text-slate-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase - Premium Design */}
      <section id="work" className="relative z-20 py-32 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm font-medium text-violet-300 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 mr-2" />
              Featured Work
            </motion.div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Selected 
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover how I transform ideas into engaging digital experiences that drive business success.
            </p>
          </motion.div>
          
          {/* Portfolio Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                  
                  {/* Project Image */}
                  <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button 
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>View Project</span>
                        </div>
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-violet-400 text-sm font-medium bg-violet-500/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-slate-400 text-sm">{item.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Metrics */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-6">
                        {Object.entries(item.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-green-400">{value}</div>
                            <div className="text-xs text-slate-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View All Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="group bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </motion.div>
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
                  About Me
                </motion.div>
                
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Passionate
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    Problem Solver
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  I&apos;m a creative designer and developer with a passion for crafting exceptional digital experiences. 
                  With over 5 years of experience, I specialize in UI/UX design, front-end development, and brand identity.
                </p>
                <p>
                  My approach combines user-centered design principles with cutting-edge technology to create solutions 
                  that not only look stunning but also drive measurable business results.
                </p>
                <p>
                  When I&apos;m not pushing pixels or writing code, you&apos;ll find me exploring the latest design trends, 
                  experimenting with new technologies, or sharing knowledge with the design community.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-400">Based in Taiwan</span>
                </div>
                <div className="h-1 w-1 bg-slate-600 rounded-full"></div>
                <div className="text-slate-400">Available for remote work</div>
              </div>
            </motion.div>
            
            {/* Skills & Expertise */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Skills Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  Expertise
                </h3>
                
                <div className="space-y-4">
                  {[
                    { name: 'UI/UX Design', level: 95, color: 'from-pink-500 to-rose-500' },
                    { name: 'Frontend Development', level: 90, color: 'from-blue-500 to-cyan-500' },
                    { name: 'Brand Identity', level: 85, color: 'from-violet-500 to-purple-500' },
                    { name: 'Prototyping', level: 88, color: 'from-green-500 to-emerald-500' }
                  ].map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <motion.div 
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
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
              
              {/* Tools */}
              <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {['Figma', 'Adobe XD', 'Sketch', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'].map((tool) => (
                    <motion.span
                      key={tool}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-sm text-white font-medium hover:bg-white/20 transition-colors cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Client Magnet */}
      <section id="contact" className="relative z-20 py-32 bg-gradient-to-t from-black/50 to-transparent">
        <div className="max-w-6xl mx-auto px-8 text-center">
          
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-medium text-green-300 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Let&apos;s Work Together
            </motion.div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Ready to Start
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Your Project?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
              I&apos;m currently accepting new projects and would love to hear about your next big idea. 
              Let&apos;s create something extraordinary together.
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:polly@example.com"
              className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
            
            <motion.a
              href="#"
              className="group bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Schedule a Call</span>
              </div>
            </motion.a>
          </motion.div>
          
          {/* Contact Options */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Mail, title: 'Email', value: 'polly@example.com', href: 'mailto:polly@example.com' },
              { icon: Linkedin, title: 'LinkedIn', value: '/in/pollypei', href: 'https://linkedin.com/in/pollypei' },
              { icon: Github, title: 'GitHub', value: '/pollypei', href: 'https://github.com/pollypei' }
            ].map((contact) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <contact.icon className="w-8 h-8 text-violet-400 mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-1">{contact.title}</h4>
                <p className="text-slate-400 text-sm">{contact.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Polly Pei</span>
            </div>
            
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Creating exceptional digital experiences, one project at a time.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { href: 'mailto:polly@example.com', icon: Mail },
                { href: 'https://github.com/pollypei', icon: Github },
                { href: 'https://linkedin.com/in/pollypei', icon: Linkedin }
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
              <p className="mt-2">Built with Next.js, TypeScript, Tailwind CSS & Framer Motion</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}