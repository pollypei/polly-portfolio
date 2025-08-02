import { getSortedPostsData } from '@/lib/posts';
import BlogListClient from './blog-list-client';

export const metadata = {
  title: '所有文章 - Polly Pei',
  description: '瀏覽所有關於生產力提昇和個人成長的文章',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  
  return <BlogListClient allPostsData={allPostsData} />;
}