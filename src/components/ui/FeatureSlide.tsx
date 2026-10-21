import type { IconType } from 'react-icons'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { highlightWords } from '@/lib/highlight'
import { useSlideSteps } from '@/lib/slide-steps'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

type FeatureSlideProps = {
  id: string
  tagline: string
  title: string
  /** Trechos do título pintados com a cor de destaque */
  highlight?: readonly string[]
  items: readonly { icon: IconType; title: string; text: string }[]
  image: { src: string; alt: string }
  /** Ex.: 'object-[60%_center]' para reenquadrar a foto */
  imageClassName?: string
  /** Lado da foto — o conteúdo fica no lado oposto. Padrão: esquerda */
  imageSide?: 'left' | 'right'
}

// Slide claro: foto full-bleed de um lado, tagline + título + boxes (ícone, título e texto) em grade 2×2 do outro.
// Usado pelos slides 07 (plataforma educacional), 08 (experiências presenciais), 09 (mentorias online) e 10 (networking)
export function FeatureSlide({
  id,
  tagline,
  title,
  highlight,
  items,
  image,
  imageClassName,
  imageSide = 'left',
}: FeatureSlideProps) {
  // No deck, os boxes aparecem um por clique: etapa 0 mostra só título e foto, cada etapa seguinte revela um box.
  // No mobile (sem deck) entram juntos, em cascata, ao aparecer na tela.
  const steps = useSlideSteps()

  return (
    <SlideVariantContext.Provider value="light">
      <section
        id={id}
        className={cn(
          'relative isolate w-full shrink-0 overflow-hidden bg-background text-text md:grid md:h-svh',
          imageSide === 'left' ? 'md:grid-cols-[1fr_1.4fr]' : 'md:grid-cols-[1.4fr_1fr]',
        )}
      >
        <div className="absolute inset-0 -z-10 bg-grain-dark" aria-hidden />

        {/* Imagem full-bleed — md:order-last a leva para a direita */}
        <Reveal
          effect="unveil"
          delay={0.3}
          className={cn('hidden overflow-hidden md:block', imageSide === 'right' && 'md:order-last')}
        >
          <img
            src={image.src}
            alt={image.alt}
            decoding="async"
            className={cn('block h-full w-full object-cover', imageClassName)}
          />
        </Reveal>

        {/* Conteúdo — padding vertical e título encolhem em telas baixas para os 4 boxes caberem */}
        <div className="flex flex-col justify-center gap-group px-slide-x py-slide-y md:gap-8 md:px-slide-x-lg md:py-[min(var(--spacing-slide-y-lg),8vh)]">
          <Reveal effect="drop" className="flex flex-col gap-item md:gap-item-lg">
            <p className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.accent)}>
              <span className="h-px w-8 bg-accent md:w-12" aria-hidden />
              {tagline}
            </p>
            <h2
              className={cn(
                'font-display text-4xl font-semibold text-balance md:text-[clamp(2rem,5vh,3.75rem)] md:leading-[1.05]',
                theme.heading,
              )}
            >
              {highlightWords(title, highlight, theme.accent)}
            </h2>
          </Reveal>

          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = item.icon

              return (
                <li key={item.title}>
                  <Reveal
                    effect="drop"
                    delay={steps ? 0 : 0.25 + index * 0.12}
                    visible={steps ? steps.step > index : undefined}
                    className="h-full"
                  >
                    <GlassCard className="h-full gap-3 p-5">
                      <div className="flex items-center gap-3">
                        <span
                          className={cn('flex size-10 shrink-0 items-center justify-center rounded-full', theme.accentBg)}
                          aria-hidden
                        >
                          <Icon className="size-5" />
                        </span>
                        <h3 className={cn('text-lg font-semibold leading-snug text-balance', theme.heading)}>
                          {item.title}
                        </h3>
                      </div>
                      <p className={cn('text-base leading-normal text-pretty', theme.text)}>{item.text}</p>
                    </GlassCard>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </SlideVariantContext.Provider>
  )
}
