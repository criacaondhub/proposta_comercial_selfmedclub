import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

const bullets = [
  'Acesso a uma biblioteca de roteiros de anúncios já validados para você replicar e conseguir ter clientes querendo fechar com você;',
  'Os nossos especialistas em marketing avaliarão os seus anúncios gravados para você\nsair do Workshop com eles prontos;',
  'Na prática, meu estrategista de marketing pessoal abrirá 2 horas da agenda\ndele para uma imersão completa com vocês.',
]

export function Workshop() {
  return (
    <SlideVariantContext.Provider value="light">
      <section
        id="workshop"
        className="relative isolate w-full shrink-0 overflow-hidden bg-background text-text md:grid md:h-svh md:grid-cols-[1fr_1.15fr]"
      >
        <div className="absolute inset-0 -z-10 bg-grain-dark" aria-hidden />

        {/* Coluna esquerda — imagem full-bleed */}
        <Reveal effect="unveil" delay={0.3} className="hidden overflow-hidden md:block">
          <img
            src="/assets/geral/imagem-slide-20.webp"
            alt=""
            decoding="async"
            className="block h-full w-full object-cover"
          />
        </Reveal>

        {/* Coluna direita — conteúdo */}
        <div className="flex flex-col justify-center gap-group px-slide-x py-slide-y md:gap-group-lg md:px-slide-x-lg md:py-slide-y-lg">
          <Reveal effect="drop" className="flex flex-col gap-item md:gap-item-lg">
            <p className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.accent)}>
              <span className="h-px w-8 bg-accent md:w-12" aria-hidden />
              Bônus
            </p>
            <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', theme.muted)}>
              Workshop Mão na Massa
            </p>
            <h2 className={cn('font-display text-4xl font-semibold text-balance md:text-5xl xl:text-6xl', theme.heading)}>
              Oficina de <span className={theme.accent}>marketing</span>, tráfego e <span className={theme.accent}>criativos</span>
            </h2>
            <p className={cn('font-heading text-base font-light leading-relaxed text-balance md:text-lg', theme.text)}>
              Estratégias validadas para ter resultados no marketing sem precisar de seguidores, autoridade ou equipe.
            </p>
          </Reveal>

          <ul className="flex flex-col gap-3">
            {bullets.map((bullet, index) => (
              <li key={index}>
                <Reveal effect="rise" delay={0.35 + index * 0.1}>
                  <GlassCard className="gap-2 p-4 md:p-5">
                    <div className="flex items-baseline gap-3">
                      <span className={cn('shrink-0 text-xs font-medium tabular-nums', theme.muted)}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className={cn('text-lg leading-snug md:text-xl', theme.text)}>
                        {bullet.split('\n').map((line, i, arr) => (
                          <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                        ))}
                      </p>
                    </div>
                  </GlassCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SlideVariantContext.Provider>
  )
}
