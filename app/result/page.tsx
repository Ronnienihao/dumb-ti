// app/result/page.tsx
import Image from 'next/image';
export default async function ResultPage({ searchParams }: { searchParams: { p: string } }) {
  const p = searchParams.p;
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold">{p}</h1>
      <Image src={`/assets/personalities/${p}.jpg`} width={400} height={400} alt="result" />
      <button className="mt-8 px-8 py-3 bg-[#03547c] text-white rounded-full">Share Result</button>
    </div>
  );
}
