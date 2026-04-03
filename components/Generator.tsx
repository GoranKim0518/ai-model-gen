"use client";

import { useMemo, useState } from "react";
import {
  ages,
  eyebrows,
  faceShapes,
  femaleEyes,
  femaleHairs,
  femaleMakeups,
  femaleVibes,
  finalMoods,
  genders,
  lips,
  maleEyes,
  maleHairs,
  maleMakeups,
  maleVibes,
  noses,
  skins,
  styleBases,
} from "@/lib/traits";
import { generateBrief } from "@/lib/brief-generator";

type Mode = "easy" | "pro";
type Gender = "여성" | "남성" | "";

function SelectField({
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-neutral-800">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border bg-white px-3 py-3 text-sm outline-none ring-0 transition focus:border-black"
      >
        <option value="">선택해주세요</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function Generator() {
  const [mode, setMode] = useState<Mode>("easy");
  const [gender, setGender] = useState<Gender>("");
  const [age, setAge] = useState("");
  const [styleBase, setStyleBase] = useState("");
  const [overallVibe, setOverallVibe] = useState("");
  const [faceShape, setFaceShape] = useState("");
  const [eyebrow, setEyebrow] = useState("");
  const [eyes, setEyes] = useState("");
  const [nose, setNose] = useState("");
  const [lip, setLip] = useState("");
  const [skin, setSkin] = useState("");
  const [hair, setHair] = useState("");
  const [makeup, setMakeup] = useState("");
  const [finalMood, setFinalMood] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const vibeOptions = useMemo(() => {
    if (gender === "여성") return femaleVibes;
    if (gender === "남성") return maleVibes;
    return [] as readonly string[];
  }, [gender]);

  const eyeOptions = useMemo(() => {
    if (gender === "여성") return femaleEyes;
    if (gender === "남성") return maleEyes;
    return [] as readonly string[];
  }, [gender]);

  const hairOptions = useMemo(() => {
    if (gender === "여성") return femaleHairs;
    if (gender === "남성") return maleHairs;
    return [] as readonly string[];
  }, [gender]);

  const makeupOptions = useMemo(() => {
    if (gender === "여성") return femaleMakeups;
    if (gender === "남성") return maleMakeups;
    return [] as readonly string[];
  }, [gender]);

  function handleGenerate() {
    if (!gender || !age || !styleBase) {
      alert("성별, 연령, 스타일 기반은 필수로 선택해주세요.");
      return;
    }

    if (!overallVibe || !finalMood) {
      alert("전체 분위기와 최종 무드는 선택해주세요.");
      return;
    }

    const brief = generateBrief({
      gender,
      age,
      styleBase,
      overallVibe,
      faceShape: mode === "pro" ? faceShape : undefined,
      eyebrows: mode === "pro" ? eyebrow : undefined,
      eyes: mode === "easy" ? undefined : eyes,
      nose: mode === "pro" ? nose : undefined,
      lips: mode === "pro" ? lip : undefined,
      skin: mode === "pro" ? skin : undefined,
      hair: mode === "pro" ? hair : undefined,
      makeup: mode === "pro" ? makeup : undefined,
      finalMood,
    });

    setResult(brief);
    setCopied(false);
  }

  async function handleCopy() {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section className="rounded-3xl border bg-white p-5 shadow-sm md:p-6">
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setMode("easy")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            mode === "easy"
              ? "bg-black text-white"
              : "bg-neutral-100 text-neutral-700"
          }`}
        >
          쉬운 모드
        </button>
        <button
          type="button"
          onClick={() => setMode("pro")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            mode === "pro"
              ? "bg-black text-white"
              : "bg-neutral-100 text-neutral-700"
          }`}
        >
          전문가 모드
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SelectField
          label="성별"
          value={gender}
          onChange={(v) => setGender(v as Gender)}
          options={genders}
          required
        />
        <SelectField
          label="연령"
          value={age}
          onChange={setAge}
          options={ages}
          required
        />
        <SelectField
          label="스타일 기반"
          value={styleBase}
          onChange={setStyleBase}
          options={styleBases}
          required
        />
        <SelectField
          label="전체 분위기"
          value={overallVibe}
          onChange={setOverallVibe}
          options={vibeOptions}
          required
        />
        <SelectField
          label="최종 무드"
          value={finalMood}
          onChange={setFinalMood}
          options={finalMoods}
          required
        />

        {mode === "pro" && (
          <>
            <SelectField
              label="얼굴형"
              value={faceShape}
              onChange={setFaceShape}
              options={faceShapes}
            />
            <SelectField
              label="눈썹"
              value={eyebrow}
              onChange={setEyebrow}
              options={eyebrows}
            />
            <SelectField
              label="눈매"
              value={eyes}
              onChange={setEyes}
              options={eyeOptions}
            />
            <SelectField
              label="코"
              value={nose}
              onChange={setNose}
              options={noses}
            />
            <SelectField
              label="입술/입매"
              value={lip}
              onChange={setLip}
              options={lips}
            />
            <SelectField
              label="피부"
              value={skin}
              onChange={setSkin}
              options={skins}
            />
            <SelectField
              label="헤어"
              value={hair}
              onChange={setHair}
              options={hairOptions}
            />
            <SelectField
              label="메이크업"
              value={makeup}
              onChange={setMakeup}
              options={makeupOptions}
            />
          </>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
        >
          결과 생성하기
        </button>
        {result && (
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-xl border px-5 py-3 text-sm font-medium"
          >
            {copied ? "복사됨" : "결과 복사하기"}
          </button>
        )}
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">생성 결과</label>
        <textarea
          readOnly
          value={result}
          placeholder="선택 후 결과 생성하기를 누르면 여기 표시됩니다."
          className="min-h-[260px] w-full rounded-2xl border bg-neutral-50 p-4 text-sm leading-6 text-neutral-800"
        />
      </div>
    </section>
  );
}