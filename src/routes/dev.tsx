import { createFileRoute } from '@tanstack/react-router'
import  D3test from '#/components/D3test'

export const Route = createFileRoute('/dev')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="p-8">
    <h1 className="text-4xl font-bold">Dev</h1>
    <div className='mt-4' style={{ height: '500px' }}>
      <D3test />
    </div>

    <h1 className='text-2xl font-bold mt-4'>D3 Test</h1>
  </div>
}
