import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landingPages } from "@/lib/landing-pages";
import { JsonLd } from "@/components/JsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/landing/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://example.com/landing/${page.slug}`,
      locale: "ko_KR",
      type: "article",
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "이 페이지로 무엇을 할 수 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "이 페이지는 특정 얼굴 스타일 관련 검색 유입을 위한 페이지이며, 실제 생성은 홈의 생성기에서 바로 진행할 수 있습니다.",
        },
      },
      {
        "@type": "Question",
        name: "영어 프롬프트를 바로 생성하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "아니요. 먼저 한글 브리프를 만든 뒤 ChatGPT에 붙여넣어 영어 프롬프트로 변환하는 방식입니다.",
        },
      },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <JsonLd data={faqJsonLd} />

      <h1 className="text-3xl font-bold tracking-tight">{page.heading}</h1>
      <p className="mt-4 text-sm leading-6 text-neutral-700">
        {page.description}
      </p>

      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">이런 분께 적합해요</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
          <li>영어 프롬프트를 직접 쓰기 어려운 분</li>
          <li>얼굴 인상과 이목구비를 중심으로 결과를 만들고 싶은 분</li>
          <li>ChatGPT와 flow를 함께 활용하는 작업 흐름을 원하는 분</li>
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">바로 시작하기</h2>
        <p className="mt-3 text-sm text-neutral-700">
          생성기는 홈에 통합되어 있습니다. 아래 버튼을 눌러 바로 시작하세요.
        </p>
        <a
          href="/"
          className="mt-4 inline-flex rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
        >
          홈에서 생성기 시작하기
        </a>
      </div>
    </main>
  );
}