import { asset } from '@/lib/asset'
import { MotionConfig } from 'framer-motion'
import {
  CONCIERGE,
  DELIVERABLES,
  EXPERIENCES,
  FELLOW,
  MENTORIA_INDIVIDUAL,
  NETWORKING,
  ONLINE_MENTORING,
  ONLINE_TRAINING,
  WORKSHOP,
} from '@/config/content'
import { HorizontalScroll } from '@/components/ui/HorizontalScroll'
import { Cover } from '@/components/sections/Cover'
import { About } from '@/components/sections/About'
import { Challenge } from '@/components/sections/Challenge'
import { Quote } from '@/components/sections/Quote'
import { Statement } from '@/components/sections/Statement'
import { Deliverables } from '@/components/sections/Deliverables'
import { OnlineTraining } from '@/components/sections/OnlineTraining'
import { Experiences } from '@/components/sections/Experiences'
import { OnlineMentoring } from '@/components/sections/OnlineMentoring'
import { Networking } from '@/components/sections/Networking'
import { NextSteps } from '@/components/sections/NextSteps'
import { Milestones } from '@/components/sections/Milestones'
import { FullImage } from '@/components/sections/FullImage'
import { Doubts } from '@/components/sections/Doubts'
import { Bonus } from '@/components/sections/Bonus'
import { Concierge } from '@/components/sections/Concierge'
import { Workshop } from '@/components/sections/Workshop'
import { Fellow } from '@/components/sections/Fellow'
import { MentoriaIndividual } from '@/components/sections/MentoriaIndividual'
import { Recap } from '@/components/sections/Recap'
import { Pricing } from '@/components/sections/Pricing'
import { Offer } from '@/components/sections/Offer'
import { CallOffer } from '@/components/sections/CallOffer'

// Slide 06: os quadrantes aparecem um por clique — etapa 0 mostra só o fundo
// Slides 07 a 10: os boxes aparecem um por clique — etapa 0 mostra só título e foto
// Slides 16 a 19 (bônus): os blocos aparecem um por clique — etapa 0 mostra só título e foto
// Slide 22: o segundo clique cobre a oferta com vidro embaçado e mostra a condição exclusiva
const BOX_STEPS = [
  { component: Deliverables, count: DELIVERABLES.items.length + 1 },
  { component: OnlineTraining, count: ONLINE_TRAINING.items.length + 1 },
  { component: OnlineMentoring, count: ONLINE_MENTORING.items.length + 1 },
  { component: Experiences, count: EXPERIENCES.items.length + 1 },
  { component: Networking, count: NETWORKING.items.length + 1 },
  { component: Concierge, count: CONCIERGE.items.length + 1 },
  { component: Workshop, count: WORKSHOP.items.length + 1 },
  { component: Fellow, count: FELLOW.items.length + 1 },
  { component: MentoriaIndividual, count: MENTORIA_INDIVIDUAL.items.length + 1 },
  { component: Offer, count: 2 },
]

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        {/* Slide 04 (citação) sobe por cima do 03; slide 05 (imagem) desce por cima do 04. */}
        <HorizontalScroll
          enterFromBottom={[Quote]}
          enterFromTop={[Statement]}
          steps={BOX_STEPS}
        >
          <Cover />
          <About />
          <Challenge />
          <Quote />
          <Statement />
          <Deliverables />
          <OnlineTraining />
          <OnlineMentoring />
          <Experiences />
          <Networking />
          <NextSteps />
          <Milestones />
          <Doubts />
          <Bonus />
          <FullImage id="slide-18" src={asset('/assets/geral/capa-slide-18.webp')} />
          <Concierge />
          <Workshop />
          <Fellow />
          <MentoriaIndividual />
          <Recap />
          <Pricing />
          <Offer />
          <CallOffer />
        </HorizontalScroll>
      </main>
    </MotionConfig>
  )
}

export default App
