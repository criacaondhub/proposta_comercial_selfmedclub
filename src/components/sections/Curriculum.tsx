import { AnimatePresence, motion } from 'framer-motion'
import { CURRICULUM } from '@/config/content'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { useSlideSteps } from '@/lib/slide-steps'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

const ITEM_ANIMATION = {
  initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit:    { opacity: 0, y: -10, filter: 'blur(4px)' },
  transition: { duration: 0.45, ease: [0.25, 0, 0, 1] as const },
}

export function Curriculum() {
  const steps = useSlideSteps()
  const block = CURRICULUM.blocks[0]
  const visibleCount = steps !== null ? steps.step + 1 : block.items.length

  return (
    <SlideVariantContext.Provider value="light">
      <section
        id="conteudos"
        className="relative isolate w-full shrink-0 overflow-hidden bg-background text-text md:grid md:h-svh md:grid-cols-[1.15fr_1fr]"
      >
        <div className="absolute inset-0 -z-10 bg-grain-dark" aria-hidden />

        {/* Coluna esquerda */}
        <div className="flex flex-col justify-center gap-group px-slide-x py-slide-y md:gap-group-lg md:px-slide-x-lg md:py-slide-y-lg">
          <Reveal effect="drop" className="flex flex-col gap-item md:gap-item-lg">
            <p className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.accent)}>
              <span className="h-px w-8 bg-accent md:w-12" aria-hidden />
              {CURRICULUM.tagline}
            </p>
            <h2
              className={cn(
                'text-3xl font-semibold leading-[1.1] tracking-tight text-balance md:text-4xl xl:text-5xl',
                theme.heading,
              )}
            >
              {block.title}
            </h2>
          </Reveal>

          <ul className="flex flex-col gap-3">
            <AnimatePresence mode="popLayout">
              {block.items.slice(0, visibleCount).map((item, index) => (
                <motion.li key={item.text} {...ITEM_ANIMATION}>
                  <GlassCard className="gap-2 p-4 md:p-5">
                    <div className="flex items-baseline gap-3">
                      <span className={cn('shrink-0 text-xs font-medium tabular-nums', theme.muted)}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className={cn('text-sm font-medium leading-snug md:text-base', theme.text)}>{item.text}</p>
                    </div>
                    {item.sub && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1 pl-7">
                        {item.sub.map((sub) => (
                          <span key={sub} className={cn('flex items-center gap-1.5 text-xs leading-snug', theme.muted)}>
                            <span className="size-1 shrink-0 rounded-full bg-accent-light" aria-hidden />
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>

        {/* Coluna direita — imagem full-bleed */}
        <Reveal effect="unveil" delay={0.3} className="hidden overflow-hidden md:block">
          {/* ⚠️ IMAGEM PROVISÓRIA — trocar pela imagem final do slide 08 */}
          <img
            src="/assets/05-entregaveis/Backgroud-Slide-05.webp"
            alt=""
            decoding="async"
            className="block h-full w-full object-cover"
          />
        </Reveal>
      </section>
    </SlideVariantContext.Provider>
  )
}
