import { asset } from '@/lib/asset'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

const bullets = [
  'Gestão das datas de Encontros Presenciais;',
  'Auxílio com translados, hospedagem e estadia do mentorado;',
  'Acompanhamento de Resultados para garantir seu crescimento;',
  'Suporte para dúvidas e dificuldades.',
]

export function Concierge() {
  return (
    <SlideVariantContext.Provider value="light">
      <section
        id="concierge"
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
            <h2 className={cn('font-display text-4xl font-semibold text-balance md:text-5xl xl:text-6xl', theme.heading)}>
              Concierge <span className={theme.accent}>Pessoal</span>
            </h2>
            <p className={cn('font-heading text-base font-light leading-relaxed md:text-lg', theme.text)}>
              Você terá um Concierge dedicado a acompanhar seus resultados
              <br />
              e te ajudar com qualquer tipo de dificuldade e dúvidas como:
            </p>
          </Reveal>

          <ul className="flex flex-col gap-3">
            {bullets.map((bullet, index) => (
              <li key={bullet}>
                <Reveal effect="rise" delay={0.35 + index * 0.1}>
                  <GlassCard className="gap-2 p-4 md:p-5">
                    <div className="flex items-baseline gap-3">
                      <span className={cn('shrink-0 text-xs font-medium tabular-nums', theme.muted)}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className={cn('text-lg leading-snug md:text-xl', theme.text)}>{bullet}</p>
                    </div>
                  </GlassCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna direita — imagem full-bleed */}
        <Reveal effect="unveil" delay={0.3} className="hidden overflow-hidden md:block">
          <img
            src={asset('/assets/geral/imagem-slide-19.webp')}
            alt=""
            decoding="async"
            className="block h-full w-full object-cover"
          />
        </Reveal>
      </section>
    </SlideVariantContext.Provider>
  )
}
