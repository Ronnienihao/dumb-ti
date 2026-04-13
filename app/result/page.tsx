"use client";
import { useSearchParams } from "next/navigation";
import { personalities } from "@/lib/personalities";
import { Suspense } from "react";
function ResultContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("p") ?? "PLNT";
  const p = personalities[code] ?? personalities["PLNT"];
  return (
    <main className="min-h-screen bg-[#f9f7ef] p-6 flex flex-col items-center text-center">
      <h1 className="text-5xl font-black text-[#03547c] mb-6">{p.name}</h1>
      
      {/* 使用绝对路径 /assets/...，它会自动指向 public/assets */}
      <img 
        src={`/assets/personalities/${code}.jpg`} 
        alt={p.name} 
        className="w-full max-w-sm rounded-3xl border-4 border-[#83d4d6] shadow-xl mb-6"
        onError={(e) => { (e.target as HTMLImageElement).src = '/assets/personalities/PLNT.jpg'; }}
      />
      
      <p className="italic text-zinc-600 text-lg mb-8">&ldquo;{p.quote}&rdquo;</p>
      
      <div className="bg-white rounded-3xl p-8 shadow-sm text-left mb-8 max-w-lg">
        <p className="text-zinc-800 text-lg leading-relaxed">{p.description}</p>
      </div>
      
      <button 
        onClick={() => window.location.href = "/quiz"}
        className="w-full max-w-lg py-5 rounded-2xl font-black text-white text-xl bg-[#03547c]"
      >
        Retake Quiz ↺
      </button>
    </main>
  );
}
export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
