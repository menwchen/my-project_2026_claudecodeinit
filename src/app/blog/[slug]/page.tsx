import { getPostBySlug, getPosts } from "@/lib/markdown";
import Link from "next/link";

const TAG_COLORS = [
  "bg-[#ff6b6b]/20 text-[#ff6b6b]",
  "bg-[#feca57]/20 text-[#feca57]",
  "bg-[#48dbfb]/20 text-[#48dbfb]",
  "bg-[#ff9ff3]/20 text-[#ff9ff3]",
  "bg-[#54a0ff]/20 text-[#54a0ff]",
];

function getTagColor(index: number) {
  return TAG_COLORS[index % TAG_COLORS.length];
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta, content } = await getPostBySlug(slug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-sm text-gray-500 hover:text-[#48dbfb] transition-colors mb-8 inline-block"
      >
        ← 블로그로 돌아가기
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {meta.tags.map((tag: string, i: number) => (
            <span key={tag} className={`tag ${getTagColor(i)}`}>
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
        <time className="text-sm text-gray-500">{meta.date}</time>
      </header>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
