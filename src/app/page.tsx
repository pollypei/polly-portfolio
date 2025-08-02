import { getSortedPostsData } from '@/lib/posts';
import { generateHomeSEO } from '@/lib/seo';
import HomePageClient from './home-page-client';

export const metadata = generateHomeSEO();

export default function HomePage() {
  const allPostsData = getSortedPostsData().slice(0, 6); // 只顯示前6篇
  return <HomePageClient allPostsData={allPostsData} />;
}