import { TIMELINE } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { SlideHeading } from '@/components/ui/SlideHeading'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.section

export function Timeline() {
  return (
    <Slide id="cronograma" variant="section">
      <SlideHeading label={TIMELINE.label} title={TIMELINE.title} />

      <ol className="grid gap-group md:grid-cols-4 md:gap-item-lg">
        {TIMELINE.steps.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={0.1 * index} className="flex flex-col gap-item">
              <p className={cn('text-sm font-medium uppercase tracking-[0.2em]', theme.muted)}>{step.period}</p>
              <div className="flex items-center gap-2" aria-hidden>
                <span className="size-3 shrink-0 rounded-full bg-section-accent" />
                <span className={cn('h-px w-full', theme.divider)} />
              </div>
              <h3 className={cn('text-xl font-semibold md:text-2xl', theme.heading)}>{step.title}</h3>
              <p className="leading-relaxed">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Slide>
  )
}
