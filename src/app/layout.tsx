import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Blog & Portfolio",
  description: "개인 블로그와 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0f0f1a]/80 border-b border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold gradient-text">
              JG
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-[#ff6b6b] transition-colors">
                홈
              </Link>
              <Link href="/blog" className="hover:text-[#feca57] transition-colors">
                블로그
              </Link>
              <Link href="/portfolio" className="hover:text-[#48dbfb] transition-colors">
                포트폴리오
              </Link>
            </div>
          </div>
        </nav>
        <main className="pt-20 min-h-screen">{children}</main>
        <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
          © 2026 JG. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
