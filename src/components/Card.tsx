const Card = ({ data }: { data: { name: string; age: number; country: string; id: number; lv: number } }) => {
  return (
    <div className="group relative mt-5 w-100 font-mono">
      <div className="relative overflow-hidden border border-sky-400/60 bg-linear-to-br from-blue-950 via-blue-900 to-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-shadow duration-300 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.55)]">
        {/* 딥 블루 글로우 배경 */}
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_25%,#1d4ed8_0,transparent_40%),radial-gradient(circle_at_80%_70%,#0ea5e9_0,transparent_35%),radial-gradient(circle_at_50%_1₀₀%,#312e81_₀,transparent_4₀ %)]" />
        {/* 사이버 그리드 */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.08)_1px,transparent_1px)] bg-size-[20px_20px]" />
        {/* 스캔 라인 */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 animate-[scan_3s_linear_infinite] bg-linear-to-b from-transparent via-sky-300/20 to-transparent" />

        {/* 코너 브라켓 */}
        <span className="absolute top-1 left-1 size-3 border-t-2 border-l-2 border-sky-200" />
        <span className="absolute right-1 bottom-1 size-3 border-r-2 border-b-2 border-sky-200" />

        {/* 헤더 */}
        <div className="relative flex items-center justify-between border-b border-sky-400/40 bg-sky-400/10 px-4 py-2">
          <span className="text-xs font-bold tracking-[0.3em] text-sky-200 uppercase">
            ▌Classified // ID-{data.id}
          </span>
          <span className="flex items-center gap-1.5 text-[10px] tracking-widest text-sky-200 uppercase">
            <span className="size-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />
            Online
          </span>
        </div>

        {/* 본문 */}
        <div className="relative space-y-2 p-5 text-sm text-sky-50">
          <div className="flex items-baseline gap-3">
            <span className="w-14 shrink-0 text-[10px] tracking-widest text-blue-400 uppercase">Name</span>
            <span className="text-lg font-bold tracking-wide text-cyan-200 [text-shadow:0_0_8px_rgba(103,232,249,0.7)]">
              {data.name}
            </span>
          </div>
          <div className="flex items-baseline gap-3 border-t border-dashed border-sky-400/25 pt-2">
            <span className="w-14 shrink-0 text-[10px] tracking-widest text-blue-400 uppercase">Age</span>
            <span className="font-bold">{data.age}<span className="ml-1 font-light text-sky-300/70">YRS</span></span>
          </div>
          <div className="flex items-baseline gap-3 border-t border-dashed border-sky-400/25 pt-2">
            <span className="w-14 shrink-0 text-[10px] tracking-widest text-blue-400 uppercase">Origin</span>
            <span className="font-bold uppercase">{data.country}</span>
          </div>
        </div>

        {/* 푸터 */}
        <div className="relative flex items-center justify-between border-t border-sky-400/40 px-4 py-1.5 text-[10px] tracking-widest text-blue-300/80 uppercase">
          <span>Clearance: Lv.{data.lv}</span>
          <span>▮▮▮▮▯</span>
        </div>
      </div>
    </div>
  )
}

export default Card
