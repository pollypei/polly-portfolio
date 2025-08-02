
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

// 文章類型定義
export interface PostMetadata {
  id: string;
  title: string;
  date: string;
  category?: 'ai-tools' | 'personal-growth';
  subcategory?: string;
  tags?: string[];
  readTime?: string;
  difficulty?: 'entry' | 'intermediate' | 'advanced';
  series?: string;
  seriesOrder?: number;
  featured?: boolean;
  excerpt?: string;
}

export interface PostData extends PostMetadata {
  contentHtml: string;
}

// 分類配置
export const CATEGORIES = {
  'ai-tools': {
    name: 'AI 工具實戰',
    color: 'from-blue-500 to-purple-600',
    description: 'Claude AI、提示詞工程、AI Agent 開發實戰經驗',
    subcategories: ['Claude應用', 'AI Agent', '提示詞工程', '工具比較']
  },
  'personal-growth': {
    name: '個人成長',
    color: 'from-green-500 to-emerald-600', 
    description: '學習方法、溝通技巧、心理成長、效率優化',
    subcategories: ['學習方法', '溝通表達', '心理洞察', '效率優化']
  }
} as const;

export function getSortedPostsData(): PostMetadata[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Omit<PostMetadata, 'id'>),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 根據分類獲取文章
export function getPostsByCategory(category: keyof typeof CATEGORIES): PostMetadata[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => post.category === category);
}

// 根據標籤獲取文章
export function getPostsByTag(tag: string): PostMetadata[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => post.tags?.includes(tag));
}

// 獲取精選文章
export function getFeaturedPosts(): PostMetadata[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => post.featured);
}

// 獲取系列文章
export function getPostsBySeries(series: string): PostMetadata[] {
  const allPosts = getSortedPostsData();
  return allPosts
    .filter(post => post.series === series)
    .sort((a, b) => (a.seriesOrder || 0) - (b.seriesOrder || 0));
}

// 獲取所有標籤
export function getAllTags(): string[] {
  const allPosts = getSortedPostsData();
  const tagSet = new Set<string>();
  
  allPosts.forEach(post => {
    post.tags?.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
}

// 獲取所有系列
export function getAllSeries(): string[] {
  const allPosts = getSortedPostsData();
  const seriesSet = new Set<string>();
  
  allPosts.forEach(post => {
    if (post.series) seriesSet.add(post.series);
  });
  
  return Array.from(seriesSet).sort();
}

export async function getPostData(id: string): Promise<PostData> {
  // Decode the URL-encoded id
  const decodedId = decodeURIComponent(id);
  const fullPath = path.join(postsDirectory, `${decodedId}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Process Obsidian-style image syntax
  let content = matterResult.content;
  
  // Convert ![[image.ext]] to ![](/images/image.ext) for standard markdown
  content = content.replace(/!\[\[([^\]]+)\]\]/g, '![](/images/$1)');
  
  // Handle images with align="center" by removing the attribute (it's not valid markdown)
  content = content.replace(/!\[\]\(([^)]+)\s+align="[^"]*"\)/g, '![]($1)');
  
  // Convert YouTube links to placeholders before markdown processing
  content = content.replace(/!\[\]\(https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)(\?[^\)]*)?\)\s*/g, 
    '___YOUTUBE_EMBED_$1___');
  content = content.replace(/!\[\]\(https:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)([^\)]*)\)\s*/g, 
    '___YOUTUBE_EMBED_$1___');
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);
  let contentHtml = processedContent.toString();

  // Replace YouTube placeholders with actual iframes
  contentHtml = contentHtml.replace(/<p>___YOUTUBE_EMBED_([a-zA-Z0-9_-]+)___<\/p>/g, 
    '<div class="video-wrapper my-8 rounded-xl overflow-hidden shadow-lg"><iframe width="100%" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen class="rounded-xl"></iframe></div>');

  // Handle external images and ensure proper styling
  // Fix images that are wrapped in paragraphs
  contentHtml = contentHtml.replace(/<p><img src="([^"]+)"([^>]*)><\/p>/g, 
    '<div class="text-center my-8"><img src="$1"$2 class="rounded-xl shadow-lg mx-auto max-w-full h-auto" /></div>');
  
  // Handle images with align attribute (from Hashnode) - clean up the align attribute
  contentHtml = contentHtml.replace(/<img([^>]*)\s+align="[^"]*"([^>]*)>/g, 
    '<img$1$2>');
  
  // Ensure all standalone images have proper styling
  contentHtml = contentHtml.replace(/<img(?![^>]*class=)([^>]*src="[^"]*"[^>]*)>/g, 
    '<img$1 class="rounded-xl shadow-lg mx-auto max-w-full h-auto">');

  // Combine the data with the decoded id and contentHtml
  return {
    id: decodedId,
    contentHtml,
    ...(matterResult.data as Omit<PostMetadata, 'id'>),
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
