import { CHALLENGE } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { SlideHeading } from '@/components/ui/SlideHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

export function Challenge() {
  return (
    <Slide id="desafio">
      <SlideHeading label={CHALLENGE.label} title={CHALLENGE.title} text={CHALLENGE.text} />

      <Reveal delay={0.15} className="grid gap-item md:grid-cols-3 md:gap-item-lg">
        {CHALLENGE.items.map((item, index) => (
          <GlassCard key={item.title}>
            <span className={cn('text-sm font-semibold tabular-nums', theme.accent)}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={cn('text-xl font-semibold md:text-2xl', theme.heading)}>{item.title}</h3>
            <p className="leading-relaxed">{item.description}</p>
          </GlassCard>
        ))}
      </Reveal>
    </Slide>
  )
}
