import { getPortfolioItems } from "@/lib/markdown";

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

export default function PortfolioPage() {
  const items = getPortfolioItems();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        <span className="gradient-text">포트폴리오</span>
      </h1>
      <p className="text-gray-400 mb-12">그동안 만든 작업물들입니다.</p>

      {items.length === 0 ? (
        <p className="text-gray-500">아직 등록된 프로젝트가 없습니다.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.slug} className="card-colorful p-6 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag, i) => (
                  <span key={tag} className={`tag ${getTagColor(i)}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-400 text-sm flex-1">
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-[#48dbfb] hover:underline"
                >
                  프로젝트 보기 →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
