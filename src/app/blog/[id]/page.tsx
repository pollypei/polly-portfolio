
import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import ArticleClient from './article-client';

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postData = await getPostData(id);

  if (!postData) {
    notFound();
  }

  return <ArticleClient postData={postData} />;
}
