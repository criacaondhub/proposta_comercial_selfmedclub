import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.section

export function CallOffer() {
  return (
    <SlideVariantContext.Provider value="section">
      <section
        id="oferta-call"
        className="relative h-svh w-full shrink-0 overflow-hidden bg-background-section md:w-screen"
      >
        <div className="absolute inset-0 -z-10 bg-grain" aria-hidden />

        <div className="flex h-full flex-col items-center justify-center gap-8 px-slide-x text-center md:gap-10 md:px-slide-x-lg">
          {/* Tagline */}
          <Reveal effect="drop">
            <p className={cn('text-sm font-medium uppercase tracking-[0.25em]', theme.muted)}>
              Oferta especial
            </p>
          </Reveal>

          {/* Bloco principal */}
          <div className="flex flex-col items-center gap-5 md:gap-6">
            <Reveal effect="rise" delay={0.2}>
              <h2 className={cn('font-display text-3xl font-semibold md:text-4xl xl:text-5xl', theme.heading)}>
                Para fechamento em call:
              </h2>
            </Reveal>

            <Reveal effect="rise" delay={0.35}>
              <p className={cn('font-display text-6xl font-semibold text-balance md:text-7xl xl:text-8xl', theme.heading)}>
                <span className="text-section-accent">R$52.000,00</span>{' '}
                à vista
              </p>
            </Reveal>

            <Reveal effect="rise" delay={0.5}>
              <p className={cn('font-heading text-xl font-light md:text-2xl', theme.muted)}>
                ou 10x de <span className={cn('font-semibold', theme.heading)}>R$6.200,00</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </SlideVariantContext.Provider>
  )
}
