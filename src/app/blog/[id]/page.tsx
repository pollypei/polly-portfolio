
import { getPostData, getAllPostIds } from '@/lib/posts';
import { notFound } from 'next/navigation';

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postData = await getPostData(id);

  if (!postData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose dark:prose-invert max-w-none">
        <h1>{postData.title}</h1>
        <div className="text-gray-600 dark:text-gray-400 mb-4">
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}
