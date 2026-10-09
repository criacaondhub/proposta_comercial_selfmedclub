import { motion } from 'framer-motion'
import { QUOTE } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { Reveal } from '@/components/ui/Reveal'
import { FadeText } from '@/components/ui/FadeText'
import { fadeTextDuration } from '@/lib/text-fade'

const theme = SLIDE_THEME.section
const EASE = [0.22, 1, 0.36, 1] as const

// Linha do tempo: aspa de abertura → texto esmaecendo letra a letra → aspa de fechamento → autor
const TEXT_START = 0.7
const TEXT_END = TEXT_START + fadeTextDuration(QUOTE.text)

// Aspas em SVG no mesmo azul claro do trecho em destaque
function QuoteMark({ position, delay }: { position: 'open' | 'close'; delay: number }) {
  const isOpen = position === 'open'

  return (
    <motion.svg
      viewBox="0 0 32 32"
      className={cn('size-10 text-accent-light md:size-14', isOpen ? 'self-start' : 'self-end')}
      initial={{ opacity: 0, scale: 0.4, rotate: isOpen ? -30 : 150 }}
      whileInView={{ opacity: 1, scale: 1, rotate: isOpen ? 0 : 180 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, ease: EASE }}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M9.5 6C5.4 8 3 11.6 3 16.5V26h9.5v-9.5H7.6c0-3.4 1.6-5.8 4.4-7.3L9.5 6Zm16 0C21.4 8 19 11.6 19 16.5V26h9.5v-9.5h-4.9c0-3.4 1.6-5.8 4.4-7.3L25.5 6Z"
      />
    </motion.svg>
  )
}

// Entrada: aspa de abertura gira, todo o texto esmaece em cascata letra a letra,
// aspa de fechamento fecha e o autor aparece
export function Quote() {
  return (
    <Slide
      id="citacao"
      variant="section"
      background={
        <>
          <div className="absolute inset-0 bg-background-dark" />
          <div className="absolute inset-0 bg-grain" />
        </>
      }
      className="items-center justify-center md:h-full"
    >
      <figure className="flex w-full max-w-5xl flex-col items-center gap-group md:gap-group-lg">
        <div className="flex w-full flex-col gap-item">
          <QuoteMark position="open" delay={0.1} />

          <blockquote
            className={cn(
              'px-2 text-center font-heading text-2xl font-light italic leading-snug text-balance md:px-12 md:text-4xl xl:text-5xl',
              // Mesmo creme do fundo do slide 03 (#dcddcf)
              theme.text,
            )}
          >
            <p>
              <FadeText
                text={QUOTE.text}
                highlightClassName="font-display font-semibold italic text-accent-light"
                delay={TEXT_START}
              />
            </p>
          </blockquote>

          <QuoteMark position="close" delay={TEXT_END} />
        </div>

        <figcaption className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.muted)}>
          <motion.span
            className={cn('h-px w-8 origin-right md:w-12', theme.divider)}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: TEXT_END + 0.4, ease: EASE }}
            aria-hidden
          />
          <Reveal effect="rise" delay={TEXT_END + 0.5}>
            <cite className="italic">{QUOTE.author}</cite>
          </Reveal>
        </figcaption>
      </figure>
    </Slide>
  )
}
