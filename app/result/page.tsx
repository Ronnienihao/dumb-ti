"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { personalities } from "@/lib/personalities";
import { useSearchParams } from "next/navigation";

const axisLabels = {
  E: { pos: "Hustle", neg: "Rot" },
  S: { pos: "Glow", neg: "Fade" },
  M: { pos: "Delu", neg: "Raw" },
  V: { pos: "Main", neg: "Side" },
};

const accentColors = ["#f4cf7a", "#ea98e6", "#83d4d6", "#bae089"];

function ResultContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("p") ?? "PLNT";
  const p = personalities[code] ?? personalities["PLNT"];

  const [lang, setLang] = useState<"en" | "zh">("en");

  useEffect(() => {
    const browserLang = navigator.language || "";
    if (browserLang.startsWith("zh")) {
      setLang("zh");
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f9f7ef" }}>
      <div className="max-w-md mx-auto px-4 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="text-xl font-bold" style={{ color: "#03547c" }}>
            dumb-ti
          </Link>
          {/* Language toggle */}
          <div className="flex rounded-full overflow-hidden border-2 text-sm font-bold" style={{ borderColor: "#03547c" }}>
            <button
              onClick={() => setLang("en")}
              className="px-4 py-1.5 transition-colors"
              style={{
                backgroundColor: lang === "en" ? "#03547c" : "transparent",
                color: lang === "en" ? "white" : "#03547c",
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang("zh")}
              className="px-4 py-1.5 transition-colors"
              style={{
                backgroundColor: lang === "zh" ? "#03547c" : "transparent",
                color: lang === "zh" ? "white" : "#03547c",
              }}
            >
              中文
            </button>
          </div>
        </div>

        {/* Personality image */}
        <div className="rounded-3xl overflow-hidden mb-6 shadow-sm">
          <Image
            src={p.image}
            alt={p.name}
            width={600}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Name — Chinese version only */}
        {lang === "zh" && (
          <div className="text-center mb-3">
            <h1 className="text-4xl font-bold" style={{ color: "#03547c" }}>
              {p.nameCN}
            </h1>
          </div>
        )}

        {/* Quote */}
        <p className="text-center text-zinc-500 italic mb-8 px-4 leading-relaxed">
          &ldquo;{lang === "zh" ? p.quoteCN : p.quote}&rdquo;
        </p>

        {/* Vibe Breakdown */}
        <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-5">
            {lang === "zh" ? "你的维度分析" : "Your Vibe Breakdown"}
          </h2>
          <div className="flex flex-col gap-5">
            {(Object.keys(axisLabels) as Array<keyof typeof axisLabels>).map((axis, i) => {
              const val = p.axes[axis];
              const labels = axisLabels[axis];
              // val range: -1.0 to 1.0; center = 50%; each side max = 50%
              const fillPct = Math.abs(val) * 50;
              const isPos = val >= 0;
              const color = accentColors[i];

              return (
                <div key={axis}>
                  <div className="flex justify-between text-xs font-semibold text-zinc-500 mb-2">
                    <span>{labels.neg}</span>
                    <span>{labels.pos}</span>
                  </div>
                  <div className="relative w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
                    {isPos ? (
                      <div
                        className="absolute top-0 h-full rounded-full"
                        style={{ left: "50%", width: `${fillPct}%`, backgroundColor: color }}
                      />
                    ) : (
                      <div
                        className="absolute top-0 h-full rounded-full"
                        style={{ right: "50%", width: `${fillPct}%`, backgroundColor: color }}
                      />
                    )}
                    {/* Center divider */}
                    <div className="absolute top-0 bottom-0 w-0.5 bg-zinc-300" style={{ left: "50%" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm">
          <p className="text-zinc-700 leading-relaxed">
            {lang === "zh" ? p.descriptionCN : p.description}
          </p>
        </div>

        {/* Activity banner */}
        <div className="rounded-3xl p-6 mb-6" style={{ backgroundColor: "#ea98e644", border: "2px solid #ea98e6" }}>
          <p className="font-bold text-zinc-800 mb-1">
            {lang === "zh" ? "🎉 限时活动 · 前3天专属" : "🎉 Limited Offer — First 3 Days Only"}
          </p>
          <p className="text-sm text-zinc-700 mb-4">
            {lang === "zh"
              ? "在 X 或 Instagram 上分享你的测试结果，并私信给我们截图，即可免费解锁价值 $3.9 的 Pro 版本。"
              : "Share your result on X or Instagram and DM us proof to unlock the Pro version ($3.9 value) for FREE."}
          </p>
          <div className="flex gap-3">
            <button
              className="flex-1 py-3 rounded-2xl text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#03547c" }}
            >
              {lang === "zh" ? "分享到 X" : "Share on X"}
            </button>
            <button
              className="flex-1 py-3 rounded-2xl text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#ea98e6" }}
            >
              {lang === "zh" ? "分享到 Instagram" : "Share on Instagram"}
            </button>
          </div>
        </div>

        {/* Retake */}
        <Link
          href="/quiz"
          className="block w-full py-4 rounded-full font-black text-white text-center"
          style={{ backgroundColor: "#03547c" }}
        >
          {lang === "zh" ? "重新测试 →" : "Retake Quiz →"}
        </Link>

      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f9f7ef]" />}>
      <ResultContent />
    </Suspense>
  );
}
