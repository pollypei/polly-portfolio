
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Blog() {
  const allPostsData = getSortedPostsData();
  return (
    <div className="container mx-auto px-4 py-8">
      <section>
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <ul className="space-y-6">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <Link 
                href={`/blog/${id}`}
                className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                {title}
              </Link>
              <div className="text-gray-600 dark:text-gray-400 mt-2">
                {date}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
