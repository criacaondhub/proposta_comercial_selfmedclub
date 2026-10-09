import { useRef } from 'react'
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'
import { FADE_LETTER_MS, FADE_STAGGER_MS, parseSegments, plainText } from '@/lib/text-fade'

type FadeTextProps = {
  /** Trechos entre *asteriscos* recebem highlightClassName */
  text: string
  highlightClassName?: string
  /** Atraso (s) antes da primeira letra, contado a partir da entrada na tela */
  delay?: number
  className?: string
}

const letter: Variants = {
  hidden: { opacity: 0, filter: 'blur(4px)' },
  visible: (order: number) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: FADE_LETTER_MS / 1000, delay: order, ease: [0.4, 0, 0.2, 1] },
  }),
}

// Texto que aparece letra a letra, esmaecendo em cascata
export function FadeText({ text, highlightClassName, delay = 0, className }: FadeTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduceMotion = useReducedMotion()
  const segments = parseSegments(text)
  // Posição de cada trecho no texto corrido, para a cascata seguir sem reiniciar entre trechos
  const starts = segments.map((_, index) =>
    segments.slice(0, index).reduce((sum, segment) => sum + segment.chars.length, 0),
  )

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{plainText(text)}</span>
      <motion.span
        aria-hidden
        initial={reduceMotion ? false : 'hidden'}
        animate={inView || reduceMotion ? 'visible' : 'hidden'}
      >
        {segments.map((segment, index) => (
          <span key={index} className={segment.highlight ? highlightClassName : undefined}>
            {/* Spans inline (não inline-block): não criam pontos de quebra no meio das palavras */}
            {segment.chars.map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={letter}
                custom={delay + ((starts[index] + charIndex) * FADE_STAGGER_MS) / 1000}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </span>
  )
}
