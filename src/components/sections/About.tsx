import { motion } from 'framer-motion'
import { ABOUT } from '@/config/content'
import { SLIDE_THEME } from '@/lib/slide-theme'
import { cn } from '@/lib/utils'
import { Slide } from '@/components/ui/Slide'
import { Reveal, RevealWords } from '@/components/ui/Reveal'

const theme = SLIDE_THEME.section

// Entrada: linhas da tagline se estendem, título sobe palavra por palavra, subtítulo entra em foco
function TaglineLine({ origin }: { origin: 'left' | 'right' }) {
  return (
    <motion.span
      className={cn('h-px w-8 md:w-12', theme.divider)}
      style={{ originX: origin === 'left' ? 1 : 0 }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    />
  )
}

export function About() {
  return (
    <Slide
      id="sobre"
      variant="section"
      background={<div className="absolute inset-0 bg-grain" />}
      className="items-center justify-center text-center md:h-full"
    >
      <div className="flex flex-col items-center gap-item md:gap-item-lg">
        <Reveal effect="blur">
          <p className={cn('flex items-center gap-item text-sm font-medium uppercase tracking-[0.2em]', theme.muted)}>
            <TaglineLine origin="left" />
            {ABOUT.tagline}
            <TaglineLine origin="right" />
          </p>
        </Reveal>

        <h2
          className={cn(
            'max-w-5xl font-display text-4xl font-semibold text-balance md:text-6xl xl:text-7xl',
            theme.heading,
          )}
        >
          <RevealWords text={ABOUT.title} delay={0.4} />
        </h2>
      </div>

      <Reveal effect="blur" delay={1.1}>
        <p
          className={cn(
            'max-w-6xl font-heading text-lg font-light leading-relaxed text-balance md:text-xl lg:whitespace-nowrap lg:text-2xl xl:text-3xl',
            theme.text,
          )}
        >
          {ABOUT.text.split('\n').map((line, index) => (
            <span key={index}>
              {index > 0 && <br className="hidden lg:block" />}
              {index > 0 && ' '}
              {line}
            </span>
          ))}
        </p>
      </Reveal>
    </Slide>
  )
}
