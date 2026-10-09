import { SOLUTION } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { SlideHeading } from '@/components/ui/SlideHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.section

export function Solution() {
  return (
    // Entrada: título e cards crescem a partir do centro
    <Slide id="solucao" variant="section" className="md:grid md:grid-cols-[1fr_1.2fr] md:items-center">
      <SlideHeading effect="zoom" label={SOLUTION.label} title={SOLUTION.title} text={SOLUTION.text} />

      <div className="grid gap-item sm:grid-cols-2 md:gap-item-lg">
        {SOLUTION.pillars.map((pillar, index) => (
          <Reveal key={pillar.title} effect="zoom" delay={0.2 + index * 0.12} className="h-full">
            <GlassCard className="h-full">
              <h3 className={cn('text-xl font-semibold', theme.heading)}>{pillar.title}</h3>
              <p className="leading-relaxed">{pillar.description}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}
