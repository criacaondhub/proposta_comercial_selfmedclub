import { MotionConfig } from 'framer-motion'
import { HorizontalScroll } from '@/components/ui/HorizontalScroll'
import { Cover } from '@/components/sections/Cover'
import { About } from '@/components/sections/About'
import { Challenge } from '@/components/sections/Challenge'
import { Solution } from '@/components/sections/Solution'
import { Deliverables } from '@/components/sections/Deliverables'
import { Timeline } from '@/components/sections/Timeline'
import { Investment } from '@/components/sections/Investment'
import { NextSteps } from '@/components/sections/NextSteps'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        <HorizontalScroll>
          <Cover />
          <About />
          <Challenge />
          <Solution />
          <Deliverables />
          <Timeline />
          <Investment />
          <NextSteps />
        </HorizontalScroll>
      </main>
    </MotionConfig>
  )
}

export default App
