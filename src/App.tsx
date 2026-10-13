import { MotionConfig } from 'framer-motion'
import { HorizontalScroll } from '@/components/ui/HorizontalScroll'
import { CURRICULUM, DELIVERABLES } from '@/config/content'
import { Cover } from '@/components/sections/Cover'
import { About } from '@/components/sections/About'
import { Challenge } from '@/components/sections/Challenge'
import { Quote } from '@/components/sections/Quote'
import { Statement } from '@/components/sections/Statement'
import { Deliverables } from '@/components/sections/Deliverables'
import { OnlineTraining } from '@/components/sections/OnlineTraining'
import { Curriculum } from '@/components/sections/Curriculum'
import { CurriculumPt2 } from '@/components/sections/CurriculumPt2'
import { NextSteps } from '@/components/sections/NextSteps'
import { Milestones } from '@/components/sections/Milestones'
import { FullImage } from '@/components/sections/FullImage'
import { Presencial } from '@/components/sections/Presencial'
import { Features } from '@/components/sections/Features'
import { Doubts } from '@/components/sections/Doubts'
import { Bonus } from '@/components/sections/Bonus'
import { Concierge } from '@/components/sections/Concierge'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        {/* Slide 04 (citação) sobe por cima do 03; slide 05 (imagem) desce por cima do 04.
            O 06 (entregáveis) percorre os 4 entregáveis antes de avançar.
            Os slides 08 e 09 (conteúdos) revelam os itens um por clique. */}
        <HorizontalScroll
          enterFromBottom={[Quote]}
          enterFromTop={[Statement]}
          steps={[
            { component: Deliverables, count: DELIVERABLES.items.length },
            { component: Curriculum, count: CURRICULUM.blocks[0].items.length },
            { component: CurriculumPt2, count: CURRICULUM.blocks[1].items.length },
          ]}
        >
          <Cover />
          <About />
          <Challenge />
          <Quote />
          <Statement />
          <Deliverables />
          <OnlineTraining />
          <Curriculum />
          <CurriculumPt2 />
          <NextSteps />
          <Milestones />
          <FullImage id="slide-12" src="/assets/geral/Capa-slide12.webp" />
          <Presencial />
          <FullImage id="slide-14" src="/assets/geral/Capa-slide14.webp" />
          <Features />
          <Doubts />
          <Bonus />
          <FullImage id="slide-18" src="/assets/geral/capa-slide-18.webp" />
          <Concierge />
        </HorizontalScroll>
      </main>
    </MotionConfig>
  )
}

export default App
