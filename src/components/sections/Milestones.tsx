import { asset } from '@/lib/asset'
import { MILESTONES } from '@/config/content'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.section

// Cor neon de cada tipo de encontro — ver @utility neon em index.css
const NEON = {
  ONLINE: '[--neon:var(--color-neon-online)]',
  PRESENCIAL: '[--neon:var(--color-neon-presencial)]',
} as const

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
              <h2
                className={cn(
                  'max-w-4xl font-display text-4xl font-semibold text-balance md:text-5xl xl:text-6xl',
                  theme.heading,
                )}
              >
                {MILESTONES.title}
              </h2>
            </Reveal>
            <Reveal effect="rise" delay={0.15}>
              <p className={cn('max-w-xl font-heading text-base font-light leading-snug md:text-lg', theme.muted)}>
                {MILESTONES.subtitle}
              </p>
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
                    {/* Tag neon com ponto pulsando, estilo "ao vivo" */}
                    <span
                      className={cn(
                        'neon inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]',
                        NEON[event.tagline],
                      )}
                    >
                      <span className="relative flex size-1.5" aria-hidden>
                        <span className="absolute inset-0 rounded-full bg-(--neon) motion-safe:animate-ping" />
                        <span className="relative size-1.5 rounded-full bg-(--neon) shadow-[0_0_6px_var(--neon)]" />
                      </span>
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
              src={asset('/assets/01-capa/Logo-vertical-branco.svg')}
              alt="SelfMed Club"
              className="h-16 w-auto opacity-90 md:h-20"
            />
          </Reveal>
        </div>
      </section>
    </SlideVariantContext.Provider>
  )
}
