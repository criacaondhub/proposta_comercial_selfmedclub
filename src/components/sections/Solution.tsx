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
    <Slide id="solucao" variant="section" className="md:grid md:grid-cols-[1fr_1.2fr] md:items-center">
      <SlideHeading label={SOLUTION.label} title={SOLUTION.title} text={SOLUTION.text} />

      <Reveal delay={0.15} className="grid gap-item sm:grid-cols-2 md:gap-item-lg">
        {SOLUTION.pillars.map((pillar) => (
          <GlassCard key={pillar.title}>
            <h3 className={cn('text-xl font-semibold', theme.heading)}>{pillar.title}</h3>
            <p className="leading-relaxed">{pillar.description}</p>
          </GlassCard>
        ))}
      </Reveal>
    </Slide>
  )
}
