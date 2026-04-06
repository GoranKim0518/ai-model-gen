import { JsonLd } from "../components/JsonLd";
import { Generator } from "../components/Generator";

export default function HomePage() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI 모델 프롬프트 생성기",
  url: "https://ai-model-gen-lac.vercel.app",
    inLanguage: "ko-KR",
  };

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI 모델 프롬프트 생성기",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    inLanguage: "ko-KR",
    description:
      "클릭 몇 번으로 AI 모델 프롬프트를 생성하는 웹 서비스",
  url: "https://ai-model-gen-lac.vercel.app",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "초보자도 사용할 수 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "네. 쉬운 모드에서는 최소한의 선택만으로 결과를 만들 수 있습니다.",
        },
      },
      {
        "@type": "Question",
        name: "쉬운 모드와 전문가 모드 차이는 무엇인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "쉬운 모드는 빠르게 결과를 만드는 용도이고, 전문가 모드는 얼굴형, 눈매, 피부 등 세부 항목을 직접 고를 수 있습니다.",
        },
      },
      {
        "@type": "Question",
        name: "결과가 마음에 안 들면 어떻게 하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "생성된 문장을 조정해 다시 시도하거나, 맞춤 제작 문의를 통해 직접 세팅을 의뢰할 수 있습니다.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            AI 모델 프롬프트 생성기
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600 md:text-base">
            원하는 외형을 선택한 뒤, 생성 결과를 ChatGPT에
            붙여넣으면{" "}
            <a
              href="https://labs.google/fx/tools/flow"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold underline underline-offset-2 hover:text-neutral-900"
            >
              Google Flow
            </a>
            의 nano banana pro에서 사용할 수 있는 영어 프롬프트가 출력됩니다.
          </p>
        </div>

        <Generator />

        <section className="mt-14 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">사용 방법</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-neutral-700">
            <li>원하는 외형을 선택하세요.</li>
            <li>생성된 문장을 ChatGPT에 붙여넣으세요.</li>
            <li>나온 영어 프롬프트를 
              <a href="https://labs.google/fx/tools/flow"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold underline underline-offset-2 hover:text-neutral-900"> Google Flow(나노 바나나 프로 모델)
              </a>에 넣으세요.
            </li>
          </ol>
        </section>

        <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">자주 묻는 질문</h2>
          <div className="mt-4 space-y-4 text-sm text-neutral-700">
            <div>
              <h3 className="font-bold text-neutral-900">
                초보자도 사용할 수 있나요?
              </h3>
              <p className="mt-1">
                네. 쉬운 모드에서는 최소한의 선택만으로 결과를 만들 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900">
                쉬운 모드와 전문가 모드 차이는 무엇인가요?
              </h3>
              <p className="mt-1">
                쉬운 모드는 빠르게 결과를 만드는 용도이고, 전문가 모드는 얼굴형,
                눈매, 피부 등 세부 항목을 직접 고를 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900">
                결과가 마음에 안 들면 어떻게 하나요?
              </h3>
              <p className="mt-1">
                생성된 문장을 조금 바꿔 다시 시도하거나, 맞춤 제작 문의로 직접
                세팅을 의뢰할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">맞춤 제작 문의</h2>
          <p className="mt-3 text-sm text-neutral-700">
            원하는 얼굴이 잘 안 나오면 맞춤 제작도 도와드릴 수 있어요. 여러 번
            시도해도 원하는 인상이 안 나오면 직접 세팅해드릴 수 있습니다.
          </p>
          <div className="mt-4">
            <a
              href="/contact"
              className="inline-flex rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
            >
              문의하기
            </a>
          </div>
        </section>

        <footer className="mt-10 flex flex-wrap gap-4 text-sm text-neutral-500">
          <a href="/contact" className="hover:text-neutral-900">
            문의
          </a>
          <a href="/privacy" className="hover:text-neutral-900">
            개인정보처리방침
          </a>
          <a href="/terms" className="hover:text-neutral-900">
            이용약관
          </a>
        </footer>
      </section>
    </main>
  );
}