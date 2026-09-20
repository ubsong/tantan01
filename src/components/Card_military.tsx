const Card = ({ data }: { data: { name: string; age: number; country: string } }) => {
  return (
    <div className="group relative mt-5 w-100 font-mono">
      <div className="relative overflow-hidden border border-lime-400/60 bg-linear-to-br from-stone-900 via-green-950 to-stone-950 shadow-[0_0_20px_rgba(163,230,53,0.25)] transition-shadow duration-300 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))] group-hover:shadow-[0_0_30px_rgba(163,230,53,0.5)]">
        {/* 군용 위장 패턴 느낌의 배경 */}
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#4d7c0f_0,transparent_35%),radial-gradient(circle_at_75%_65%,#78716c_0,transparent_30%),radial-gradient(circle_at_50%_90%,#365314_0,transparent_35%)]" />
        {/* 사이버 그리드 */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(163,230,53,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.07)_1px,transparent_1px)] bg-size-[20px_20px]" />
        {/* 스캔 라인 */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 animate-[scan_3s_linear_infinite] bg-linear-to-b from-transparent via-lime-400/15 to-transparent" />

        {/* 코너 브라켓 */}
        <span className="absolute top-1 left-1 size-3 border-t-2 border-l-2 border-lime-300" />
        <span className="absolute right-1 bottom-1 size-3 border-r-2 border-b-2 border-lime-300" />

        {/* 헤더 */}
        <div className="relative flex items-center justify-between border-b border-lime-400/40 bg-lime-400/10 px-4 py-2">
          <span className="text-xs font-bold tracking-[0.3em] text-lime-300 uppercase">
            ▌Classified // ID-001
          </span>
          <span className="flex items-center gap-1.5 text-[10px] tracking-widest text-lime-300 uppercase">
            <span className="size-2 animate-pulse rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
            Online
          </span>
        </div>

        {/* 본문 */}
        <div className="relative space-y-2 p-5 text-sm text-lime-100">
          <div className="flex items-baseline gap-3">
            <span className="w-14 shrink-0 text-[10px] tracking-widest text-lime-500 uppercase">Name</span>
            <span className="text-lg font-bold tracking-wide text-lime-300 [text-shadow:0_0_8px_rgba(163,230,53,0.7)]">
              {data.name}
            </span>
          </div>
          <div className="flex items-baseline gap-3 border-t border-dashed border-lime-400/20 pt-2">
            <span className="w-14 shrink-0 text-[10px] tracking-widest text-lime-500 uppercase">Age</span>
            <span className="font-bold">{data.age}<span className="ml-1 font-light text-lime-400/70">YRS</span></span>
          </div>
          <div className="flex items-baseline gap-3 border-t border-dashed border-lime-400/20 pt-2">
            <span className="w-14 shrink-0 text-[10px] tracking-widest text-lime-500 uppercase">Origin</span>
            <span className="font-bold uppercase">{data.country}</span>
          </div>
        </div>

        {/* 푸터 */}
        <div className="relative flex items-center justify-between border-t border-lime-400/40 px-4 py-1.5 text-[10px] tracking-widest text-lime-500/80 uppercase">
          <span>Clearance: Lv.3</span>
          <span>▮▮▮▮▯</span>
        </div>
      </div>
    </div>
  )
}

export default Card
