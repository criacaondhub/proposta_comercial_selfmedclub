import { TbCheck } from 'react-icons/tb'
import { DELIVERABLES } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { SlideHeading } from '@/components/ui/SlideHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

export function Deliverables() {
  return (
    <Slide id="entregaveis">
      <SlideHeading label={DELIVERABLES.label} title={DELIVERABLES.title} />

      <Reveal delay={0.15}>
        <ul className="grid gap-item sm:grid-cols-2 lg:grid-cols-3 md:gap-item-lg">
          {DELIVERABLES.items.map((item) => (
            <li key={item}>
              <GlassCard className="flex-row items-center">
                <span className={cn('flex size-10 shrink-0 items-center justify-center rounded-full', theme.accentBg)}>
                  <TbCheck className="size-5" aria-hidden />
                </span>
                <span className={cn('font-medium', theme.heading)}>{item}</span>
              </GlassCard>
            </li>
          ))}
        </ul>
      </Reveal>
    </Slide>
  )
}
