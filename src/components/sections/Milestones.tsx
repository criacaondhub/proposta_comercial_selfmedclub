import { MILESTONES } from '@/config/content'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.section

export function Milestones() {
  return (
    <SlideVariantContext.Provider value="section">
      <section
        id="marcos"
        className="relative isolate flex w-full shrink-0 flex-col items-center justify-center overflow-hidden bg-background-section px-slide-x py-slide-y md:h-svh md:px-slide-x-lg md:py-slide-y-lg"
      >
        <div className="absolute inset-0 -z-10 bg-grain" aria-hidden />

        <div className="flex w-full max-w-5xl flex-col items-center gap-group md:gap-group-lg">
          {/* Heading */}
          <div className="flex flex-col items-center gap-4 text-center md:gap-5">
            <Reveal effect="rise">
              <h1
                className={cn(
                  'max-w-4xl font-display text-4xl font-semibold text-balance md:text-5xl xl:text-6xl',
                  theme.heading,
                )}
              >
                {MILESTONES.title}
              </h1>
            </Reveal>
            <Reveal effect="rise" delay={0.15}>
              <h2 className={cn('max-w-xl font-heading text-base font-light leading-snug md:text-lg', theme.muted)}>
                {MILESTONES.subtitle}
              </h2>
            </Reveal>
          </div>

          {/* Cards — mesma altura via items-stretch no grid */}
          <div className="grid w-full grid-cols-1 gap-item sm:grid-cols-3 md:gap-item-lg">
            {MILESTONES.events.map((event, index) => (
              <Reveal key={event.label} effect="flip" delay={0.3 + index * 0.15} className="h-full">
                <GlassCard className="h-full justify-between gap-group">
                  {/* Topo: número + tagline */}
                  <div className="flex items-center justify-between">
                    <span className={cn('text-xs font-medium tabular-nums', theme.muted)}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={cn(
                        'rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em]',
                        event.tagline === 'ONLINE'
                          ? 'bg-section-accent/15 text-section-accent'
                          : 'bg-white/10 text-white/80',
                      )}
                    >
                      {event.tagline}
                    </span>
                  </div>

                  {/* Título + data */}
                  <div className="flex flex-col gap-1">
                    <p className={cn('text-xs font-semibold uppercase tracking-[0.15em]', theme.muted)}>
                      {event.label}
                    </p>
                    <p className={cn('text-4xl font-semibold tabular-nums md:text-5xl', theme.heading)}>
                      {event.date}
                    </p>
                  </div>

                  {/* Descrição */}
                  <p className={cn('text-lg leading-relaxed md:text-xl', theme.text)}>
                    {event.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          {/* Logo centralizado abaixo */}
          <Reveal effect="rise" delay={0.7}>
            <img
              src="/assets/01-capa/Logo-vertical-branco.svg"
              alt="SelfMed Club"
              className="h-16 w-auto opacity-90 md:h-20"
            />
          </Reveal>
        </div>
      </section>
    </SlideVariantContext.Provider>
  )
}
