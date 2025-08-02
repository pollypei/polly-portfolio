import { Metadata } from 'next';
import { PostMetadata, CATEGORIES } from './posts';

// 網站基本配置
export const SITE_CONFIG = {
  name: 'Polly Pei',
  title: 'Polly Pei - AI工具與個人成長知識分享',
  description: '深度分享AI工具實戰應用、個人成長心得和創作輸出經驗的知識型個人品牌',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pollypei.com',
  author: 'Polly Pei',
  social: {
    twitter: '@pollypei',
    linkedin: 'pollypei',
    github: 'pollypei',
    email: 'hello@pollypei.com'
  },
  keywords: [
    'AI工具應用',
    'Claude AI',
    '提示詞工程',
    'AI Agent',
    '個人成長',
    '學習方法',
    '知識管理',
    '內容創作',
    '知識變現',
    '個人品牌'
  ]
};

// 生成文章的SEO元數據
export function generatePostSEO(post: PostMetadata): Metadata {
  const category = post.category ? CATEGORIES[post.category] : null;
  const categoryName = category?.name || '知識分享';
  
  const title = `${post.title} | ${categoryName} | ${SITE_CONFIG.name}`;
  const description = post.excerpt || `探索${categoryName}的深度內容，分享實戰經驗與思考洞察。`;
  
  const keywords = [
    ...(post.tags || []),
    categoryName,
    SITE_CONFIG.name,
    ...SITE_CONFIG.keywords
  ];

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.name,
    category: categoryName,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${SITE_CONFIG.url}/blog/${post.id}`,
      siteName: SITE_CONFIG.name,
      publishedTime: post.date,
      authors: [SITE_CONFIG.author],
      tags: post.tags,
      images: [
        {
          url: `${SITE_CONFIG.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.social.twitter,
      creator: SITE_CONFIG.social.twitter,
      title,
      description,
      images: [`${SITE_CONFIG.url}/og-image.jpg`],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${post.id}`,
    },
    other: {
      'article:author': SITE_CONFIG.author,
      'article:section': categoryName,
      'article:tag': post.tags?.join(', ') || '',
      'article:published_time': post.date,
    },
  };
}


// 生成主頁SEO元數據
export function generateHomeSEO(): Metadata {
  return {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords.join(', '),
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.name,
    openGraph: {
      type: 'website',
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.social.twitter,
      creator: SITE_CONFIG.social.twitter,
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      images: [`${SITE_CONFIG.url}/og-image.jpg`],
    },
    alternates: {
      canonical: SITE_CONFIG.url,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// 生成JSON-LD結構化數據
export function generateArticleJsonLd(post: PostMetadata) {
  const category = post.category ? CATEGORIES[post.category] : null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${post.id}`,
    },
    articleSection: category?.name,
    keywords: post.tags?.join(', '),
    timeRequired: post.readTime,
  };
}

// 生成麵包屑結構化數據
export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// 生成個人/組織結構化數據
export function generatePersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.author,
    url: SITE_CONFIG.url,
    sameAs: [
      `https://twitter.com/${SITE_CONFIG.social.twitter.replace('@', '')}`,
      `https://linkedin.com/in/${SITE_CONFIG.social.linkedin}`,
      `https://github.com/${SITE_CONFIG.social.github}`,
    ],
    jobTitle: 'Knowledge Creator & AI Tools Expert',
    description: '專注於AI工具應用、個人成長和知識輸出的內容創作者',
    knowsAbout: SITE_CONFIG.keywords,
  };
}