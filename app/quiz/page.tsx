"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/quiz-data";
import { getPersonalityCode } from "@/lib/scoring";
export default function QuizPage() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState({ E: 0, S: 0, M: 0, V: 0 });
  const q = questions[idx];
  
  const handleAnswer = (val: number, axis: 'E'|'S'|'M'|'V') => {
    const newScores = { ...scores, [axis]: scores[axis] + val };
    setScores(newScores);
    if (idx < questions.length - 1) setIdx(idx + 1);
    else router.push(`/result?p=${getPersonalityCode(newScores)}`);
  };
  
  return (
    <div className="p-8 bg-[#f9f7ef] min-h-screen">
      <h2 className="text-2xl font-bold mb-6">{q.text}</h2>
      {q.options.map((o, i) => (
        <button key={i} onClick={() => handleAnswer(o.value, q.axis)} className="block w-full p-4 mb-3 bg-white rounded-2xl border">
          {o.text}
        </button>
      ))}
    </div>
  );
}
