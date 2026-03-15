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

export default function Home() {
  const recentPosts = getPosts().slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="py-24 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6">
          <span className="gradient-text">세상을 바꾸는 유토피아</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          개발과 창작을 좋아하는 사람입니다.
          이곳에서 제 생각과 작업물을 공유합니다.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] text-black font-semibold hover:opacity-90 transition"
          >
            블로그 보기
          </Link>
          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-[#48dbfb] hover:text-[#48dbfb] transition"
          >
            포트폴리오
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8">최근 글</h2>
          <div className="grid gap-6">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="card-colorful p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, i) => (
                      <span key={tag} className={`tag ${getTagColor(i)}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {post.description}
                  </p>
                  <time className="text-xs text-gray-500">{post.date}</time>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
