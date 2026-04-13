"use client";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { personalities } from "@/lib/personalities";
function ResultContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("p") ?? "PLNT";
  const p = personalities[code] ?? personalities["PLNT"];
  const [lang, setLang] = useState<"EN" | "CN">("EN");
  const axes = [
    { label: lang === "EN" ? "Hustle / Rot" : "拼劲 / 躺平", val: p.axes.E, color: "#f4cf7a" },
    { label: lang === "EN" ? "Glow / Fade" : "闪耀 / 透明", val: p.axes.S, color: "#ea98e6" },
    { label: lang === "EN" ? "Delu / Raw" : "妄想 / 现实", val: p.axes.M, color: "#83d4d6" },
    { label: lang === "EN" ? "Main / Side" : "主角 / 路人", val: p.axes.V, color: "#bae089" },
  ];
  return (
    <main className="min-h-screen bg-[#f9f7ef] p-6 flex flex-col items-center text-center">
      {/* 语言切换按钮 */}
      <button 
        onClick={() => setLang(lang === "EN" ? "CN" : "EN")} 
        className="mb-8 font-bold text-[#03547c] border-2 px-6 py-2 rounded-full bg-white shadow-sm"
      >
        {lang === "EN" ? "EN -> 中" : "中 -> EN"}
      </button>
      <h1 className="text-5xl font-black text-[#03547c] mb-6">{p.name}</h1>
      
      <img 
        src={`/assets/personalities/${code}.jpg`} 
        alt={p.name} 
        className="w-full max-w-sm rounded-3xl border-4 border-[#83d4d6] shadow-xl mb-6"
      />
      
      <p className="italic text-zinc-600 text-lg mb-8">
        &ldquo;{lang === "EN" ? p.quote : p.quoteCN}&rdquo;
      </p>
      
      {/* 维度分析图 */}
      <div className="bg-white rounded-3xl p-6 mb-8 w-full max-w-lg text-left shadow-sm">
        <h3 className="font-bold text-zinc-800 mb-4">{lang === "EN" ? "Vibe Analysis" : "维度分析"}</h3>
        {axes.map((ax, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between text-xs font-bold text-zinc-500 mb-1">
              <span>{lang === "EN" ? "Low" : "低"}</span>
              <span>{lang === "EN" ? "High" : "高"}</span>
            </div>
            <div className="w-full h-4 bg-zinc-100 rounded-full overflow-hidden flex">
              <div className="h-full" style={{ width: '50%', backgroundColor: ax.val < 0 ? ax.color : '#e5e7eb' }} />
              <div className="h-full" style={{ width: '50%', backgroundColor: ax.val > 0 ? ax.color : '#e5e7eb' }} />
            </div>
            <p className="text-xs font-semibold text-zinc-400 mt-1">{ax.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-3xl p-8 shadow-sm text-left mb-8 max-w-lg">
        <p className="text-zinc-800 text-lg leading-relaxed">
          {lang === "EN" ? p.description : p.descriptionCN}
        </p>
      </div>
      
      <button 
        onClick={() => window.location.href = "/quiz"}
        className="w-full max-w-lg py-5 rounded-2xl font-black text-white text-xl bg-[#03547c] hover:bg-[#024060] transition-all"
      >
        {lang === "EN" ? "Retake Quiz ↺" : "重新测试 ↺"}
      </button>
    </main>
  );
}
export default function ResultPage() {
  return <Suspense fallback={<div>Loading...</div>}><ResultContent /></Suspense>;
}
