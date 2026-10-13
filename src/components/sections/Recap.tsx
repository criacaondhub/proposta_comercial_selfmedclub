import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.section

export function Recap() {
  return (
    <SlideVariantContext.Provider value="section">
      <section
        id="recapitulando"
        className="relative isolate flex w-full shrink-0 flex-col items-center overflow-hidden bg-background-section px-slide-x py-slide-y md:h-svh md:px-slide-x-lg md:py-slide-y-lg"
      >
        <div className="absolute inset-0 -z-10 bg-grain" aria-hidden />

        {/* Logo topo */}
        <Reveal effect="rise">
          <img
            src="/assets/01-capa/Logo-vertical-branco.svg"
            alt="SelfMed Club"
            className="h-10 w-auto opacity-70 md:h-12"
          />
        </Reveal>

        {/* Conteúdo centralizado */}
        <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center md:gap-6">
          <Reveal effect="rise" delay={0.15}>
            <h1 className={cn('font-display text-5xl font-semibold text-balance md:text-6xl xl:text-7xl', theme.heading)}>
              Recapitulando…
            </h1>
          </Reveal>
          <Reveal effect="rise" delay={0.3}>
            <h2 className={cn('max-w-2xl font-heading text-lg font-light leading-snug text-balance md:text-xl xl:text-2xl', theme.muted)}>
              O que torna este programa único e quanto valeria cada uma das entregas individualmente?
            </h2>
          </Reveal>
        </div>
      </section>
    </SlideVariantContext.Provider>
  )
}
