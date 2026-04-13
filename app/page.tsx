"use client"; // 告诉 Next.js 这是一个有交互动画的页面

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* 背景装饰：增加一点 Gen Z 的凌乱感/呼吸感 */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo 标题：DUMB-TI */}
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4"
        >
          DUMB-<span className="text-green-400 italic">TI</span>
        </motion.h1>

        {/* 毒舌副标题 */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-md mx-auto"
        >
          Stop being so proud of your 16 personalities. <br/>
          Let's see how <span className="underline decoration-green-400">dumb</span> you really are.
        </motion.p>

        {/* 核心按钮：跳转到 /quiz */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/quiz" 
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-black transition-all duration-200 bg-green-400 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            <span className="text-2xl uppercase tracking-widest">Let's Gooooo!</span>
            
            {/* 按钮阴影层：增加“弹射”感 */}
            <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-110 -z-10 bg-green-400/30 blur-xl group-hover:opacity-100 opacity-0"></div>
          </Link>
        </motion.div>

        {/* 底部小字装饰 */}
        <p className="mt-12 text-gray-600 text-sm tracking-widest uppercase">
          Based on 24 questions that will roast you
        </p>
      </div>
    </main>
  );
}
