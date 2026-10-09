import { CURRICULUM } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'
import { DarkBackground } from '@/components/ui/DarkBackground'

const theme = SLIDE_THEME.section

// Entrada: título cresce do centro entrando em foco; os dois blocos viram de baixo para cima em 3D
// e os tópicos de cada bloco surgem em cascata
export function Curriculum() {
  return (
    <Slide
      id="conteudos"
      variant="section"
      background={<DarkBackground />}
      className="md:h-full md:justify-center"
    >
      <Reveal effect="zoom" className="flex flex-col gap-item md:gap-item-lg">
        <p className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.muted)}>
          <span className={cn('h-px w-8 md:w-12', theme.divider)} aria-hidden />
          {CURRICULUM.tagline}
        </p>
        <h2
          className={cn(
            'max-w-5xl text-3xl font-semibold leading-[1.1] tracking-tight text-balance md:text-4xl xl:text-5xl',
            theme.heading,
          )}
        >
          {CURRICULUM.title}
        </h2>
      </Reveal>

      <div className="grid gap-item md:grid-cols-2 md:gap-item-lg">
        {CURRICULUM.blocks.map((block, blockIndex) => {
          const baseDelay = 0.5 + blockIndex * 0.25

          return (
            <Reveal key={block.title} effect="flip" delay={baseDelay} className="h-full">
              <GlassCard className="h-full gap-group">
                <div className="flex items-baseline justify-between gap-item">
                  <h3 className={cn('font-heading text-xl font-light md:text-2xl', theme.heading)}>{block.title}</h3>
                  <span className={cn('text-sm font-medium tabular-nums', theme.muted)}>
                    {String(blockIndex + 1).padStart(2, '0')}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 md:gap-3">
                  {block.items.map((item, itemIndex) => (
                    <li key={item.text}>
                      <Reveal effect="rise" delay={baseDelay + 0.4 + itemIndex * 0.07}>
                        <p className={cn('flex gap-3 text-sm leading-snug md:text-base', theme.text)}>
                          <span className="mt-[0.5em] size-1.5 shrink-0 rounded-full bg-accent-light" aria-hidden />
                          {item.text}
                        </p>
                        {item.sub && (
                          <ul className="mt-2 flex flex-col gap-1.5 pl-[1.125rem]">
                            {item.sub.map((sub) => (
                              <li key={sub} className={cn('flex gap-3 text-sm leading-snug', theme.muted)}>
                                <span className={cn('mt-[0.6em] h-px w-2.5 shrink-0', theme.divider)} aria-hidden />
                                {sub}
                              </li>
                            ))}
                          </ul>
                        )}
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </Slide>
  )
}
