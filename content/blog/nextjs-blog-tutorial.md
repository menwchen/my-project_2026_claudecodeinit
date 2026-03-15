---
title: "Next.js로 블로그 만들기"
date: "2026-03-14"
description: "Next.js와 Markdown을 활용해 개인 블로그를 만드는 과정을 정리했습니다."
tags: ["Next.js", "개발", "튜토리얼"]
---

# Next.js로 블로그 만들기

이 블로그는 **Next.js**와 **Tailwind CSS**를 사용해서 만들었습니다.

## 기술 스택

- **Next.js** - React 기반 풀스택 프레임워크
- **Tailwind CSS** - 유틸리티 퍼스트 CSS
- **gray-matter** - Markdown frontmatter 파싱
- **remark** - Markdown을 HTML로 변환

## Markdown으로 글 작성

블로그 글은 `content/blog/` 폴더에 `.md` 파일로 작성하면 됩니다.

```markdown
---
title: "글 제목"
date: "2026-03-15"
description: "글 설명"
tags: ["태그1", "태그2"]
---

본문 내용을 여기에 작성합니다.
```

간단하죠? Markdown만 알면 누구나 글을 쓸 수 있습니다.
