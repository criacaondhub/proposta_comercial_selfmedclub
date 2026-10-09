import { ABOUT } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { SlideHeading } from '@/components/ui/SlideHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.section

export function About() {
  return (
    <Slide id="sobre" variant="section" className="md:grid md:grid-cols-2 md:items-center">
      <SlideHeading label={ABOUT.label} title={ABOUT.title} text={ABOUT.text} />

      <Reveal delay={0.15} className="grid grid-cols-2 gap-item md:gap-item-lg">
        {ABOUT.stats.map((stat) => (
          <GlassCard key={stat.label}>
            <p className={cn('text-4xl font-semibold tracking-tight md:text-5xl', theme.heading)}>{stat.value}</p>
            <p className={cn('text-sm md:text-base', theme.muted)}>{stat.label}</p>
          </GlassCard>
        ))}
      </Reveal>
    </Slide>
  )
}
