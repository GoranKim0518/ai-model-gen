type FormState = {
  gender: string;
  age: string;
  styleBase: string;
  overallVibe?: string;
  faceShape?: string;
  eyebrows?: string;
  eyes?: string;
  nose?: string;
  lips?: string;
  skin?: string;
  hair?: string;
  makeup?: string;
  finalMood?: string;
};

const fixedLine =
  "이 내용을 flow의 nano banana pro에 최적화된 영어 프롬프트로 리턴해 줘. 얼굴 인상, 이목구비, 피부 질감, 얼굴 퀄리티를 신경써 줘. 영어로만 출력해줘.";

export function generateBrief(data: FormState) {
  const lines = [
    `- 성별: ${data.gender}`,
    `- 연령: ${data.age}`,
    `- 스타일 기반: ${data.styleBase}`,
    data.overallVibe ? `- 전체 분위기: ${data.overallVibe}` : "",
    data.faceShape ? `- 얼굴형: ${data.faceShape}` : "",
    data.eyebrows ? `- 눈썹: ${data.eyebrows}` : "",
    data.eyes ? `- 눈매: ${data.eyes}` : "",
    data.nose ? `- 코: ${data.nose}` : "",
    data.lips ? `- 입술/입매: ${data.lips}` : "",
    data.skin ? `- 피부: ${data.skin}` : "",
    data.hair ? `- 헤어: ${data.hair}` : "",
    data.makeup ? `- 메이크업: ${data.makeup}` : "",
    data.finalMood ? `- 최종 무드: ${data.finalMood}` : "",
    "",
    fixedLine,
  ];

  return lines.filter(Boolean).join("\n");
}