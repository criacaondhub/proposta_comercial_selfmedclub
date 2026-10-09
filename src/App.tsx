import { MotionConfig } from 'framer-motion'
import { HorizontalScroll } from '@/components/ui/HorizontalScroll'
import { DELIVERABLES } from '@/config/content'
import { Cover } from '@/components/sections/Cover'
import { About } from '@/components/sections/About'
import { Challenge } from '@/components/sections/Challenge'
import { Quote } from '@/components/sections/Quote'
import { Statement } from '@/components/sections/Statement'
import { Deliverables } from '@/components/sections/Deliverables'
import { OnlineTraining } from '@/components/sections/OnlineTraining'
import { Curriculum } from '@/components/sections/Curriculum'
import { NextSteps } from '@/components/sections/NextSteps'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        {/* Slide 04 (citação) sobe por cima do 03; slide 05 (imagem) desce por cima do 04.
            O 06 (entregáveis) percorre os 4 entregáveis antes de avançar */}
        <HorizontalScroll
          enterFromBottom={[Quote]}
          enterFromTop={[Statement]}
          steps={[{ component: Deliverables, count: DELIVERABLES.items.length }]}
        >
          <Cover />
          <About />
          <Challenge />
          <Quote />
          <Statement />
          <Deliverables />
          <OnlineTraining />
          <Curriculum />
          <NextSteps />
        </HorizontalScroll>
      </main>
    </MotionConfig>
  )
}

export default App
