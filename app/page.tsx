"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-[#f9f7ef] flex flex-col items-center justify-center p-6 text-center">
      {/* Logo 部分 - 极简大字 */}
      <div className="mb-20">
        <h1 className="text-9xl font-black text-[#03547c] tracking-tighter uppercase select-none">
          dumb-ti
        </h1>
        <p className="mt-4 text-xl font-medium text-[#ea98e6] tracking-widest">
          YOUR VIBE. YOUR TRUTH.
        </p>
      </div>
      {/* 点击按钮 - 极强点击欲 */}
      <button
        onClick={() => router.push("/quiz")}
        className="group relative px-16 py-8 bg-[#03547c] rounded-[2rem] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#03547c]/20"
      >
        <span className="text-4xl font-black text-white uppercase tracking-tight">
          Let's Gooooo!
        </span>
        
        {/* 小装饰，增加灵动感 */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#f4cf7a] rounded-full animate-bounce" />
      </button>
      {/* 底部信息 */}
      <div className="mt-24 text-sm font-semibold text-zinc-400">
        <p>100% GEN-Z APPROVED • NO BS</p>
      </div>
    </main>
  );
}
