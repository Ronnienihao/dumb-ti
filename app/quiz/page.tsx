"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/quiz-data";
import { getPersonalityCode } from "@/lib/scoring";
const ACCENT = ["#f4cf7a", "#ea98e6", "#83d4d6", "#bae089"];
export default function QuizPage() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [scores, setScores] = useState({ E: 0, S: 0, M: 0, V: 0 });
  const q = questions[idx];
  const progress = Math.round(((idx + 1) / questions.length) * 100);
  const accent = ACCENT[idx % ACCENT.length];
  const isLast = idx === questions.length - 1;
  function handleSelect(i: number) {
    setSelected(i);
  }
  function goNext() {
    if (selected === null) return;
    const val = q.options[selected].value;
    const newScores = { ...scores, [q.axis]: scores[q.axis as keyof typeof scores] + val };
    setScores(newScores);
    if (!isLast) {
      setIdx(idx + 1);
      setSelected(null);
    } else {
      const code = getPersonalityCode(newScores);
      router.push(`/result?p=${code}`);
    }
  }
  return (
    <main className="min-h-screen bg-[#f9f7ef] p-6 flex flex-col items-center">
      {/* 顶部指示器 */}
      <div className="w-full max-w-lg flex items-center justify-between mb-8">
        <span className="text-sm font-black text-zinc-800">dumb-ti</span>
        <span className="text-sm font-semibold text-zinc-600">{idx + 1} / {questions.length}</span>
      </div>
      <div className="w-full max-w-lg mb-10">
        <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
          <div className="h-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: accent }} />
        </div>
      </div>
      {/* 题目内容 */}
      <div className="w-full max-w-lg flex-1">
        <h2 className="text-3xl font-black text-zinc-900 leading-tight mb-10">
          {q.text}
        </h2>
        <div className="flex flex-col gap-4">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className="w-full text-left p-6 rounded-3xl border-2 transition-all duration-150 shadow-sm"
              style={{
                backgroundColor: selected === i ? accent + "40" : "#ffffff",
                borderColor: selected === i ? accent : "#e5e7eb",
              }}
            >
              <span className={`text-lg font-bold ${selected === i ? "text-zinc-900" : "text-zinc-800"}`}>
                {opt.text}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* 底部按钮 */}
      <div className="w-full max-w-lg mt-10">
        <button
          onClick={goNext}
          disabled={selected === null}
          className="w-full py-5 rounded-2xl font-black text-white text-xl transition-all disabled:bg-zinc-300"
          style={{ backgroundColor: selected !== null ? "#03547c" : "#cbd5e1" }}
        >
          {isLast ? "See my result 🔮" : "Next →"}
        </button>
      </div>
    </main>
  );
}
