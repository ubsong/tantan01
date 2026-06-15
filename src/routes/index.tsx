import Card from '#/components/Card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

const data = [{
  name: '송우법',
  age: 43,
  country : '대한민국',
},{
  name: '김애설',
  age: 42,
  country : '대한민국',
}]


function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold ">Home</h1>
      <div className='mt-4'>
        <Card data={data[0]} />
        <Card data={data[1]} />
      </div>
    </div>
  )
}
