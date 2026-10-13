import { PRESENCIAL } from '@/config/content'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

export function Presencial() {
  return (
    <SlideVariantContext.Provider value="light">
      <section
        id="presencial"
        className="relative isolate w-full shrink-0 overflow-hidden bg-background text-text md:grid md:h-svh md:grid-cols-[1.15fr_1fr]"
      >
        <div className="absolute inset-0 -z-10 bg-grain-dark" aria-hidden />

        {/* Coluna esquerda — conteúdo */}
        <div className="flex flex-col justify-center gap-group px-slide-x py-slide-y md:gap-group-lg md:px-slide-x-lg md:py-slide-y-lg">
          <Reveal effect="drop" className="flex flex-col gap-item md:gap-item-lg">
            {/* Tagline */}
            <p className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.accent)}>
              <span className="h-px w-8 bg-accent md:w-12" aria-hidden />
              {PRESENCIAL.tagline}
            </p>

            {/* H1 */}
            <h1
              className={cn(
                'max-w-xl text-3xl font-semibold leading-[1.1] tracking-tight text-balance md:text-4xl xl:text-5xl',
                theme.heading,
              )}
            >
              <span className={theme.accent}>2 eventos intimistas</span>
              {' com o Gustavo Sá e outros membros.'}
            </h1>
          </Reveal>

          {/* Nota */}
          <Reveal effect="rise" delay={0.4}>
            <p className={cn('text-sm leading-relaxed md:text-base', theme.muted)}>
              {PRESENCIAL.note}
            </p>
          </Reveal>
        </div>

        {/* Coluna direita — imagem full-bleed */}
        <Reveal effect="unveil" delay={0.3} className="hidden overflow-hidden md:block">
          <img
            src={PRESENCIAL.image.src}
            alt={PRESENCIAL.image.alt}
            decoding="async"
            className="block h-full w-full object-cover"
          />
        </Reveal>
      </section>
    </SlideVariantContext.Provider>
  )
}
