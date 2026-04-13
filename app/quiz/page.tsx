"use client";
import { useState } from "react";
import { questions } from "@/lib/quiz-data";
import { getPersonalityCode } from "@/lib/scoring";
export default function QuizPage() {
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState({ E: 0, S: 0, M: 0, V: 0 });
  const [lang, setLang] = useState<"EN" | "CN">("EN");
  const q = questions[idx];
  const isLast = idx === questions.length - 1;
  function handleSelect(val: number) {
    const newScores = { 
      ...scores, 
      [q.axis]: scores[q.axis as keyof typeof scores] + val 
    };
    setScores(newScores);
    
    if (!isLast) {
      setIdx(idx + 1);
    } else {
      window.location.href = `/result?p=${getPersonalityCode(newScores)}`;
    }
  }
  return (
    <main className="min-h-screen bg-[#f9f7ef] p-6 flex flex-col items-center">
      <div className="w-full max-w-lg">
        {/* 顶部工具栏 */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-xs text-zinc-400 font-medium">
            {lang === "EN" ? "Takes about 4 minutes to complete" : "完成测试约需 4 分钟"}
          </p>
          <button 
            onClick={() => setLang(lang === "EN" ? "CN" : "EN")} 
            className="text-xs font-bold text-[#03547c] bg-white px-3 py-1 rounded-full border"
          >
            {lang === "EN" ? "EN / 中" : "中 / EN"}
          </button>
        </div>
        {/* 题目 */}
        <h2 className="text-3xl font-black text-zinc-900 leading-tight mb-10">
          {lang === "EN" ? q.text : q.textCN}
        </h2>
        {/* 选项 */}
        <div className="flex flex-col gap-4">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(opt.value)}
              className="w-full text-left p-6 rounded-3xl border-2 bg-white border-zinc-200 hover:border-[#83d4d6] transition-all"
            >
              <span className="text-lg font-bold text-zinc-800">
                {lang === "EN" ? opt.text : opt.textCN}
              </span>
            </button>
          ))}
        </div>
        {/* 返回上一题 */}
        {idx > 0 && (
          <button 
            onClick={() => setIdx(idx - 1)} 
            className="w-full mt-8 text-zinc-500 font-semibold underline"
          >
            {lang === "EN" ? "← Back" : "← 上一题"}
          </button>
        )}
      </div>
    </main>
  );
}
