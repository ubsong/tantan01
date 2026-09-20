import Card from '#/components/Card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

const data = [{
  id: '001',
  name: '박지성',
  age: 45,
  country : 'South Korea',
  lv: 3,
  
},{
  id: '002',
  name: '손흥민',
  age: 34,
  country : 'South Korea',
  lv: 2,
},{
  id: '003',
  name: '이강인',
  age: 25,
  country : 'South Korea',
  lv: 1,
}]


function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 p-8">
      {/* 딥 네이비 글로우 (카드보다 어둡게 깔아서 카드가 떠 보이도록) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(29,78,216,0.28)_0,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.18)_0,transparent_45%)]" />
      {/* 전술 지도 느낌의 큰 그리드 */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />
      {/* 가장자리 비네트 */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,23,0.85)_100%)]" />

      <div className="relative">
        <h1 className="text-4xl font-bold text-sky-200 [text-shadow:0_0_12px_rgba(56,189,248,0.6)]">Home</h1>
        <div className='mt-4'>
          <Card data={data[0]} />
          <Card data={data[1]} />
          <Card data={data[2]} />
        </div>
      </div>
    </div>
  )
}
