import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

const bullets = [
  'Acompanhe de perto a rotina clínica do Dr. Gustavo Sá;',
  'Observe os protocolos e a aplicação prática dos conhecimentos;',
  'Vivencie o dia a dia de um consultório de referência;',
  'Aprofunde seus conhecimentos diretamente na prática.',
]

export function Fellow() {
  return (
    <SlideVariantContext.Provider value="light">
      <section
        id="fellow"
        className="relative isolate w-full shrink-0 overflow-hidden bg-background text-text md:grid md:h-svh md:grid-cols-[1.15fr_1fr]"
      >
        <div className="absolute inset-0 -z-10 bg-grain-dark" aria-hidden />

        {/* Coluna esquerda — conteúdo */}
        <div className="flex flex-col justify-center gap-group px-slide-x py-slide-y md:gap-group-lg md:px-slide-x-lg md:py-slide-y-lg">
          <Reveal effect="drop" className="flex flex-col gap-item md:gap-item-lg">
            <p className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.accent)}>
              <span className="h-px w-8 bg-accent md:w-12" aria-hidden />
              Bônus
            </p>
            <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', theme.muted)}>
              1 Dia de Fellow Clínica
            </p>
            <h1 className={cn('font-display text-4xl font-semibold text-balance md:text-5xl xl:text-6xl', theme.heading)}>
              Uma experiência prática e{' '}
              <span className={theme.accent}>exclusiva</span>{' '}
              dentro da clínica do Dr.&nbsp;Gustavo Sá
            </h1>
          </Reveal>

          <ul className="flex flex-col gap-3">
            {bullets.map((bullet, index) => (
              <Reveal key={bullet} effect="rise" delay={0.35 + index * 0.1}>
                <li>
                  <GlassCard className="gap-2 p-4 md:p-5">
                    <div className="flex items-baseline gap-3">
                      <span className={cn('shrink-0 text-xs font-medium tabular-nums', theme.muted)}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className={cn('text-lg leading-snug md:text-xl', theme.text)}>{bullet}</p>
                    </div>
                  </GlassCard>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Coluna direita — imagem full-bleed */}
        <Reveal effect="unveil" delay={0.3} className="hidden overflow-hidden md:block">
          <img
            src="/assets/geral/Slide-21.webp"
            alt=""
            decoding="async"
            className="block h-full w-full object-cover"
          />
        </Reveal>
      </section>
    </SlideVariantContext.Provider>
  )
}
