import { createFileRoute } from '@tanstack/react-router'

import Ggsaptest from '#/components/Ggsaptest'

// import Spacetest from '#/components/Spacetest'

export const Route = createFileRoute('/gsap')({
  component: RouteComponent,  
})

function RouteComponent() {
  return <div>
    <Ggsaptest />

    {/* <Spacetest /> */}
  </div>
}
