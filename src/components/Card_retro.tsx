const Card = ({ data }: { data: { name: string; age: number; country: string } }) => {
  return (
    <div className="group relative mt-5 w-100 font-mono">
      {/* 하드 섀도 (오프셋 그림자) */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-md border-2 border-stone-900 bg-pink-500 transition-transform duration-150 group-hover:translate-x-3 group-hover:translate-y-3" />

      <div className="relative overflow-hidden rounded-md border-2 border-stone-900 bg-amber-100 transition-transform duration-150 group-hover:-translate-x-1 group-hover:-translate-y-1">
        {/* 레트로 윈도우 타이틀 바 */}
        <div className="flex items-center justify-between border-b-2 border-stone-900 bg-linear-to-r from-teal-500 to-cyan-400 px-3 py-1.5">
          <span className="text-sm font-bold tracking-widest text-stone-900 uppercase">Player 01</span>
          <div className="flex gap-1.5">
            <span className="size-3 border-2 border-stone-900 bg-yellow-300" />
            <span className="size-3 border-2 border-stone-900 bg-lime-400" />
            <span className="size-3 border-2 border-stone-900 bg-red-400" />
          </div>
        </div>

        {/* 본문 */}
        <div className="space-y-1 p-4 text-stone-900">
          <h1 className="text-lg font-bold">
            &gt; 내 이름은{' '}
            <span className="bg-stone-900 px-1 text-amber-300">{data.name}</span> 입니다.
          </h1>
          <p>
            &gt; 나이는 <span className="font-bold text-pink-600 underline decoration-wavy">{data.age}</span> 세입니다.
          </p>
          <p>
            &gt; 국적은 <span className="font-bold text-teal-700">{data.country}</span>입니다.
            <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-stone-900" />
          </p>
        </div>

        {/* 스캔라인 오버레이 */}
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.04)_0px,rgba(0,0,0,0.04)_1px,transparent_1px,transparent_3px)]" />
      </div>
    </div>
  )
}

export default Card
