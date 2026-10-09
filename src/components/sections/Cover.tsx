import { TbArrowRight } from 'react-icons/tb'
import { COVER } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { SlideHeading } from '@/components/ui/SlideHeading'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

export function Cover() {
  return (
    <Slide id="capa" className="justify-between md:h-full">
      <Reveal>
        <p className={cn('text-lg font-semibold tracking-tight', theme.heading)}>{COVER.brand}</p>
      </Reveal>

      <SlideHeading as="h1" size="display" label={COVER.label} title={COVER.title} text={COVER.text} />

      <Reveal delay={0.2} className="flex flex-wrap items-end justify-between gap-group">
        <dl className="flex flex-wrap gap-group md:gap-group-lg">
          {COVER.meta.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className={cn('text-sm', theme.muted)}>{item.label}</dt>
              <dd className={cn('font-medium', theme.heading)}>{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className={cn('hidden items-center gap-2 text-sm md:flex', theme.muted)}>
          {COVER.hint}
          <TbArrowRight className="size-4" aria-hidden />
        </p>
      </Reveal>
    </Slide>
  )
}
