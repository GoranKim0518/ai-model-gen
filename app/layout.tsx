import type { Metadata } from "next";
import "./globals.css";

// normalized without trailing slash to avoid double slashes when concatenating paths
const siteUrl = "https://ai-model-gen-lac.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AI 모델 프롬프트 생성기 | 3분 만에 만드는 고퀄 AI 모델",
  description:
    "원하는 얼굴과 외형을 선택하고, ChatGPT와 flow의 nano banana pro에 활용할 수 있는 AI 모델 얼굴 프롬프트 브리프를 쉽게 만들어보세요.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION ?? "",
  },
  other: {
    "naver-site-verification": process.env.NAVER_SITE_VERIFICATION ?? "",
  },
  openGraph: {
    title: "AI 모델 얼굴 프롬프트 브리프 생성기",
    description:
      "한글로 외형을 선택하고 AI 모델 얼굴 브리프를 생성하세요.",
    url: siteUrl,
    siteName: "AI Face Brief Generator",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 모델 얼굴 프롬프트 브리프 생성기",
    description:
      "한글로 외형을 선택하고 AI 모델 얼굴 브리프를 생성하세요.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}