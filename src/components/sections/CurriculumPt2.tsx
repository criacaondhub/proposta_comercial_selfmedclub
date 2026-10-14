import { asset } from '@/lib/asset'
import {
  TbAward,
  TbCalendarPlus,
  TbChartBar,
  TbClock,
  TbCurrencyDollar,
  TbSettings,
  TbStar,
  TbTrendingUp,
} from 'react-icons/tb'
import { AnimatePresence, motion } from 'framer-motion'
import { CURRICULUM } from '@/config/content'
import { SLIDE_THEME, SlideVariantContext } from '@/lib/slide-theme'
import { useSlideSteps } from '@/lib/slide-steps'
import { cn } from '@/lib/utils'
import { highlightWords } from '@/lib/highlight'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.light

// Ícones na mesma ordem dos itens de CURRICULUM.blocks[1]
const ICONS = [
  TbCurrencyDollar, // Como precificar seus atendimentos
  TbTrendingUp,     // Como aumentar seu ticket médio
  TbCalendarPlus,   // Como lotar sua agenda e ter um bom posicionamento no digital
  TbStar,           // Construindo um atendimento premium
  TbChartBar,       // Gestão financeira da clínica
  TbAward,          // Construindo autoridade e reputação
  TbClock,          // Como gerenciar sua agenda
  TbSettings,       // Como ter uma empresa autogerenciável
]

const ITEM_ANIMATION = {
  initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit:    { opacity: 0, y: -10, filter: 'blur(4px)' },
  transition: { duration: 0.45, ease: [0.25, 0, 0, 1] as const },
}

export function CurriculumPt2() {
  const steps = useSlideSteps()
  const block = CURRICULUM.blocks[1]
  const visibleCount = steps !== null ? steps.step + 1 : block.items.length

  return (
    <SlideVariantContext.Provider value="light">
      <section
        id="conteudos-2"
        className="relative isolate w-full shrink-0 overflow-hidden bg-background text-text md:grid md:h-svh md:grid-cols-[1fr_1.3fr] md:grid-rows-1"
      >
        <div className="absolute inset-0 -z-10 bg-grain-dark" aria-hidden />

        {/* Coluna esquerda */}
        <div className="flex flex-col justify-center gap-group px-slide-x py-slide-y md:px-slide-x-lg md:py-slide-y-lg">
          <Reveal effect="drop" className="flex flex-col gap-item md:gap-item-lg">
            <p className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.accent)}>
              <span className="h-px w-8 bg-accent md:w-12" aria-hidden />
              {CURRICULUM.tagline}
            </p>
            <h2
              className={cn(
                'font-display text-4xl font-semibold text-balance md:text-5xl xl:text-6xl',
                theme.heading,
              )}
            >
              {highlightWords(block.title, block.highlight, theme.accent)}
            </h2>
          </Reveal>

          <ul className="grid auto-rows-fr grid-cols-2 gap-2">
            <AnimatePresence mode="popLayout">
              {block.items.slice(0, visibleCount).map((item, index) => {
                const Icon = ICONS[index]
                return (
                  <motion.li key={item.text} className="h-full" {...ITEM_ANIMATION}>
                    <GlassCard className="h-full flex-row items-center gap-3 p-3 md:p-4">
                      <Icon className={cn('size-5 shrink-0', theme.accent)} aria-hidden />
                      <p className={cn('text-sm leading-snug text-pretty md:text-base', theme.text)}>
                        {item.text.split('\n').map((line, i, arr) => (
                          <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                        ))}
                      </p>
                    </GlassCard>
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>
        </div>

        {/* Coluna direita — imagem full-bleed */}
        <Reveal effect="unveil" delay={0.3} className="hidden overflow-hidden md:block">
          <img
            src={asset('/assets/geral/Slide-09.webp')}
            alt=""
            decoding="async"
            className="block h-full w-full object-cover object-[25%_center]"
          />
        </Reveal>
      </section>
    </SlideVariantContext.Provider>
  )
}
