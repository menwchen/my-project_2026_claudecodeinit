import Link from "next/link";
import { getPosts } from "@/lib/markdown";

const TAG_COLORS = [
  "bg-[#ff6b6b]/20 text-[#ff6b6b]",
  "bg-[#feca57]/20 text-[#feca57]",
  "bg-[#48dbfb]/20 text-[#48dbfb]",
  "bg-[#ff9ff3]/20 text-[#ff9ff3]",
  "bg-[#54a0ff]/20 text-[#54a0ff]",
  "bg-[#5f27cd]/20 text-[#a78bfa]",
];

function getTagColor(index: number) {
  return TAG_COLORS[index % TAG_COLORS.length];
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        <span className="gradient-text">블로그</span>
      </h1>
      <p className="text-gray-400 mb-12">생각과 경험을 기록합니다.</p>

      {posts.length === 0 ? (
        <p className="text-gray-500">아직 작성된 글이 없습니다.</p>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="card-colorful p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, i) => (
                    <span key={tag} className={`tag ${getTagColor(i)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-2">
                  {post.description}
                </p>
                <time className="text-xs text-gray-500">{post.date}</time>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
